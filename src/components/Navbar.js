import Logo from "./logo/Logo";
import {Link} from "react-router-dom";
//import WalletButton from "./WalletButton";

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'About Us', href: '/about-us'}
]

export default function Navbar() {
    return (
        <header className="navbar">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b lg:border-none">
                    <div className="flex items-center">
                        <Link to="/" className="text-primary">
                            <Logo id='big-logo'/>
                        </Link>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <Link key={link.name + '-big'}
                                      className="text-base font-medium text-primary hover:text-bone-50"
                                      to={link.href}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <a href="/terminal" className=" hoverable">
                            Employee Sign In
                        </a>
                        {/*<WalletButton/>*/}
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <Link key={link.name + '-small'}
                              className="text-base font-medium text-primary hover:text-primary"
                              to={link.href}>{link.name}</Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
