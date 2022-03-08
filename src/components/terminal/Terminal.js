import {useEffect, useRef, useState} from 'react'
import validator from 'validator';

// Utils
import commandExists from './utils/commandExists'
import constructEcho from './utils/constructEcho'
import useBlockchain from "../../contexts/Blockchain";
import parseEOL from "./handlers/parseEOL";
import {Navigate} from 'react-router'
import { collection, addDoc } from "firebase/firestore";
import db from '../../firebase';

export default function Terminal(props) {
    const {isActive, account, connect, disconnect} = useBlockchain();

    const my_commands = {
        help: {
            description: 'Show a list of available commands.',
            usage: 'help',
            fn: () => {
                const message = `
 +----------------------------------------------------+
 |   Command    |     Usage     |     Description     |
 +----------------------------------------------------+
`
                pushToStdout(message)
                for (const c in commands) {
                    const cmdObj = commands[c]
                    const usage = cmdObj.usage ? `${cmdObj.usage}` : ''
                    pushToStdout(` | ${c}: ${usage} - ${cmdObj.description}`)
                }
                pushToStdout(' +----------------------------------------------------+')
            }
        },
        // Currently broken
        // clear: {
        //     description: 'Empty the terminal window.',
        //     usage: 'clear',
        //     explicitExec: true,
        //     fn: () => {
        //         setStdOut([])
        //     }
        // },
        representative: {
            description: 'Speak with a live representative.',
            usage: 'representative',
            fn: () => {
                const message = `
 +--------------------------------------------------------------------------------------------------
 | CONNECTED FROM: [undisclosed]
 +--------------------------------------------------------------------------------------------------
 | Thank you for your continued support and for being a valuable employee of ETIO. We appreciate you.
 | A corporate representative will be dispatched to your current location of [undisclosed].
 | -------------------------------------------------------------------------------------------------
 | *** NOTICE: ALL OF OUR AVAILABLE REPRESENTATIVES ARE CURRENTLY BUSY ASSISTING OTHER EMPLOYEES ***
 | -------------------------------------------------------------------------------------------------
 | Your concerns are meaningful to us. Please stay connected to speak with the next available
 | representative. A representative will be available in [1247138952] blocks or [474.55] years.
 +--------------------------------------------------------------------------------------------------
`
                pushToStdout(message)
            }
        },
        logout: {
            description: 'Disconnect and exit the terminal.',
            usage: 'logout',
            fn: async (...args) => {
                await commands['disconnect'].fn(...args)
                //todo: This is a memory leak due to "disconnect" not finishing before the navigation dumps the component
                return <Navigate to={'/'}/>
            }
        },
        email: {
            description: 'Leave your email to be contacted about passport availability.',
            usage: 'email < string: email>',
            fn: async (...args) => {
                if (!validator.isEmail(args[0])) {
                    pushToStdout('Please use a valid email address.')
                    return false;
                }

                const confirm_this = `Please confirm this is the correct email: ${args[0]}.`

                // eslint-disable-next-line no-restricted-globals
                if (!confirm(confirm_this)) {
                    return pushToStdout(`
 +-------------------------------------------------------------
 | *** EMAIL REQUEST DENIED ***
 |  
 | Your contact information has not been saved.
 | Here at ETIO Ventures, we believe in your right to privacy.
 |
 | All records of this confirmation question will be deleted.
 | All employees viewing this screen will be terminated immediately.
 |
 | Thank you for your support.
 +-------------------------------------------------------------
`)
                }

                try {
                    // eslint-disable-next-line no-unused-vars
                    const docRef = await addDoc(collection(db, "subscribers"), {
                        email: args[0] // This is horribly hacky
                    });
                    pushToStdout(`
 +-------------------------------------------------------------------------------
 | *** EMAIL SUCCESSFULLY SAVED *** 
 | Thank you. We will contact you when interplanetary passports are available.
 | Please avoid any planet-wide extinction level events in the mean time as
 | this creates a lot of extra work for our corporate representatives.
 |
 | If you have any questions, or would like to speak to on of our representatives,
 | please type "representative" and a live representative will assist you shortly.
 +--------------------------------------------------------------------------------
`)
                    console.log("I'm not collecting your metamask address, as I don't want to send it to Google.")
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
        },
        connect: {
            description: 'Connect to the ETIO network.',
            usage: 'connect',
            fn: async (...args) => {
                connect()
                const message = `
 +--------------------------------------------------------------
 | CONNECTED FROM: [undisclosed]
 | LAST CONNECTED: [undisclosed]
 +--------------------------------------------------------------
 | Thank you for connecting to ETIO.
 |
 | If this is your first time connecting, please type "passport"
 | to obtain a passport for transportation off planet.
 |
 | We see that you are logging in from [undisclosed].
 |
 | Please type "help" for the list of commands available to you.
 +---------------------------------------------------------------
 `
                pushToStdout(message)
            },
        },
        passport: {
            description: `Receive your ETIO sponsored advocate passport for interplanetary travel.`,
            usage: 'passport',
            fn: async (...args) => {
                const message = `
 +--------------------------------------------------------------
 | *** ERROR ***
 +--------------------------------------------------------------
 | Passport functionality is currently under maintenance. If you
 | would like to wait, please see a live representative and they
 | will assist you in reserving your place in the queue.
 |
 | Otherwise, please leave your email address and we will contact
 | you when the passport functionality is working. Thank you.
 +--------------------------------------------------------------
 | Hint: Type "help" to see all available commands.
 +--------------------------------------------------------------`
                pushToStdout(message)
            }
        },
        disconnect: {
            description: 'Disconnect from the ETIO network.',
            usage: 'disconnect',
            fn: async (...args) => {
                disconnect()
                const message = `
 +--------------------------------------------------------------
 | DISCONNECTING...
 +--------------------------------------------------------------`
                pushToStdout(message)
            },
        },
    }

    const [PS1, setPS1] = useState('0x0000000000000000000000000000000000000000')
    const [commands, setCommands] = useState(my_commands);
    const [stdOut, setStdOut] = useState([])
    const [history, setHistory] = useState([])
    const [historyPosition, setHistoryPosition] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false)

    const contentRef = useRef(null)
    const promptRef = useRef(null);

    const focusTerminal = () => {
        promptRef.current.focus()
        // if (!window.getSelection().type === 'Range') {
        // }
    }

    const getStdOut = () => {
        const stdout = !props.noNewlineParsing ? parseEOL(stdOut) : stdOut

        return stdout.map((line, i) => {
            return <div className={'terminal message'} key={i}>{line.message}</div>
        })
    }

    const scrollToBottom = () => {
        setTimeout(() => {
            promptRef.current.scrollIntoView()
        }, 5)
    }

    /**
     * @param {String} message
     * @param {Object} options {
     *  rawInput: Raw input from the terminal
     *  isEcho: For distinguishing echo messages (Exemption from message styling)
     * }
     */
    const pushToStdout = (message, options) => {
        stdOut.push({message, isEcho: options?.isEcho || false})
        if (options?.rawInput) pushToHistory(options.rawInput)
        setStdOut(stdOut)
    }

    /**
     * @param {String} rawInput Raw command input from the terminal
     */
    const pushToHistory = rawInput => {
        setHistory([...history, rawInput])
        setHistoryPosition(null)
    }

    const clearInput = () => {
        setHistoryPosition(null)
        promptRef.current.value = ''
    }

    const processCommand = async () => {
        setIsProcessing(true)

        // Initialise command result object
        const commandResult = {command: null, args: [], rawInput: null, result: null}
        const rawInput = promptRef.current.value

        // Push to history
        pushToHistory(rawInput)

        // Show the command, like a real terminal
        pushToStdout(constructEcho(PS1 || ' $', rawInput, props), {isEcho: true})

        if (rawInput) {
            const input = rawInput.split(' ')
            const rawCommand = input.splice(0, 1)[0] // Removed portion is returned...
            const args = input // ...and the rest can be used

            commandResult.rawInput = rawInput
            commandResult.command = rawCommand
            commandResult.args = args

            const {exists, command} = commandExists(commands, rawCommand, props.ignoreCommandCase)

            if (!exists) {
                //todo: Do I need a second arg here????
                pushToStdout(`${rawCommand}: command not found`)
            } else {
                const cmd = commands[command]
                const res = await cmd.fn(...args)

                pushToStdout(res)
                commandResult.result = res
                if (cmd.explicitExec) await cmd.fn(...args)
            }
        }

        setIsProcessing(false);
        clearInput();
        scrollToBottom();
        // Not sure
        // if (this.props.commandCallback) this.props.commandCallback(commandResult)
    }

    const handleInput = event => {
        switch (event.key) {
            case 'Enter':
                processCommand();
                break
            default:
        }
    }

    // Process commands and focus terminal on load
    useEffect(() => {
        if (!isActive) {
            const message = `
 +--------------------------------------------------------------
 | Welcome, Advocate to the ETIO Network
 | CONNECTED FROM: [undisclosed]
 +--------------------------------------------------------------            
 | Please connect to your corporate advocacy account by typing
 | "connect" or type "help" to see all commands available.
 +--------------------------------------------------------------
 |                       !!! NOTE !!!
 | Many terminals are still being upgraded for handheld viewing.
 | We at ETIO recommend using a Personal Computer for interacting
 | with the ETIO Advocacy Terminal until our live representatives
 | are able to upgrade the interface.
 +---------------------------------------------------------------
`
            pushToStdout(message)
        }
        setCommands(my_commands)
        promptRef.current.focus();
    }, [])

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const shorten = (str) => {
        if (typeof (str) === 'undefined') {
            return 'Sign In';
        }
        let s = str.toString()
        return s.length > 4 ? s.substring(0, 4) + '..' + s.substring(s.length - 4, s.length) : s;
    }

    useEffect(() => {
        let display = account ? account : '0x0000000000000000000000000000000000000000';
        if (isMobile) {
            display = shorten(display);
            return account ? setPS1(`${display} @ [advocate: TIER 0] $`) : setPS1(`${display} @ [undisclosed] $`)
        }
        return account ? setPS1(`${display} @ [advocate: TIER 0] $`) : setPS1(`${display} @ [undisclosed] $`)
    }, [account])

    return (
        <div className="terminal container" onClick={focusTerminal}>
            <div ref={contentRef} className="terminal content">
                {getStdOut()}
                <div className="terminal input-group">
                    <span className="terminal prompt">{PS1 || '$'}</span>
                    <input ref={promptRef} name='terminal' className="terminal input" onKeyDown={handleInput}
                           autoComplete='off' type='text'/>
                </div>
            </div>
        </div>
    )
}