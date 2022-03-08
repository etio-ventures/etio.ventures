import React from 'react'
import ReactDOM from 'react-dom'
import {Routes, Route} from "react-router";
import {Web3ReactProvider} from "@web3-react/core";
import {BlockchainProvider} from "./contexts/Blockchain";
import {BrowserRouter} from "react-router-dom";
import Web3 from "web3";
import './index.css';
import Home from "./pages/Home";
import Terminal from "./components/terminal/Terminal";
import AboutUs from "./pages/AboutUs";

function getLibrary(provider, connector) {
    return new Web3(provider)
}

ReactDOM.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <BlockchainProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/about-us" element={<AboutUs/>}/>
                        <Route exact path="/terminal" element={<Terminal/>}/>
                    </Routes>
                </BrowserRouter>
            </BlockchainProvider>
        </Web3ReactProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);