import { createContext, FunctionComponent, useContext, useEffect, useState } from "react";
import { createDefaultState, Web3State } from "./utils";
import {ethers}  from "ethers";

interface Props {
    children: React.ReactNode;
}

const Web3Context = createContext<Web3State>(createDefaultState());

const Web3Provider: FunctionComponent<Props>= ({children}) => {

    const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState())

    useEffect(() => {
        function initWeb3(){

            const provider = new ethers.BrowserProvider(window.ethereum)

            setWeb3Api({
                ethereum: window.ethereum,
                provider, 
                contract: null,
                isLoading: false
            })
        }

        initWeb3();
    }, [])

    return (
        <Web3Context.Provider value={web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3(){
    return useContext(Web3Context);
}

export default Web3Provider;