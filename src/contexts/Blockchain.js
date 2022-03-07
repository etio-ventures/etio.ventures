import React, {useState, useEffect, useMemo, useCallback} from 'react'
import {InjectedConnector} from '@web3-react/injected-connector'
import {useWeb3React} from "@web3-react/core";
// import ItemShop from '../contracts/ItemShop.json'
// import Web3 from "web3";

export const BlockchainContext = React.createContext(null)

export const BlockchainProvider = ({children}) => {
    const {activate, account, library, connector, active, deactivate} = useWeb3React()

    const [isActive, setIsActive] = useState(false)
    const [shouldDisable, setShouldDisable] = useState(false) // Should disable connect button while connecting to MetaMask
    const [isLoading, setIsLoading] = useState(true)

    const [balance, setBalance] = useState(0)
    const [tokens, setTokens] = useState([])

    // Check when App is Connected or Disconnected to MetaMask
    const handleIsActive = useCallback(() => {
        console.log('App is connected with MetaMask ', active)
        setIsActive(active)
    }, [active])

    useEffect(() => {
        handleIsActive()
    }, [handleIsActive])

    // 1 = Ethereum
    // 42161 = Arbitrum One
    // 421611 = Arbitrum Rinkeby
    // 31337 = Hardhat Localhost
    const injectedConnector = (new InjectedConnector({supportedChainIds: [1, 42161, 421611, 31337]}))

    // Connect to MetaMask wallet
    const connect = async () => {
        console.log('Connecting to MetaMask...')
        setShouldDisable(true)
        try {
            await activate(injectedConnector).then(() => {
                setShouldDisable(false)
            })
        } catch (error) {
            console.log('Error on connecting: ', error)
        }
    }

    // Disconnect from Metamask wallet
    const disconnect = async () => {
        console.log('Disconnecting wallet from App...')
        try {
            await deactivate()
        } catch (error) {
            console.log('Error on disconnnect: ', error)
        }
    }

    // const provider = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // const contract = useMemo(() => new provider.eth.Contract(ItemShop.abi, process.env.REACT_APP_TOKEN_CONTRACT), [provider]);
    //
    // const fetchBalance = async () => {
    //     try {
    //         await contract.methods.balanceOf(account).call().then(setBalance);
    //     } catch (e) {
    //         console.log('Error fetching balance: ', e)
    //     }
    // }
    //
    // // Add helper
    // contract.getPastTransfers = (account) => {
    //     return contract.getPastEvents('Transfer', {
    //         filter: {
    //             from: '0x0000000000000000000000000000000000000000',
    //             to: account,
    //         }, fromBlock: 0
    //     });
    // };
    //
    // const compilePromises = (events) => {
    //     return Promise.all(events
    //         .map(e => e.returnValues.tokenId)
    //         .map(async id => await contract.methods.tokenURI(id).call()));
    // }
    //
    // const fetchTokens = async () => {
    //     try {
    //         await contract.getPastTransfers(account)
    //             .then(compilePromises)
    //             .then(setTokens)
    //     } catch (e) {
    //         console.log('Error fetching balance: ', e)
    //     }
    // }

    // // Init Loading
    // useEffect(() => {
    //     connect().then(val => {
    //         setIsLoading(false)
    //     })
    // }, [])


    const exportable = useMemo(
        () => ({
            // info
            account,
            balance,
            tokens,

            // functions
            connect,
            disconnect,

            // status
            isActive,
            isLoading,
            shouldDisable,

            // helpers
            // fetchTokens,
            // fetchBalance

        }), [account, balance, tokens, isActive, isLoading, shouldDisable]
    ) // For some reason you don't need to inject functions as dependencies???

    return <BlockchainContext.Provider value={exportable}>{children}</BlockchainContext.Provider>
}

export default function useBlockchain() {
    const context = React.useContext(BlockchainContext);
    if (context === undefined) {
        throw new Error('useBlockchain must be used with its Provider.');
    }
    return context;
}