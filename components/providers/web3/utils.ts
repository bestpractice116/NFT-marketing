import {MetaMaskInpageProvider} from "@metamask/providers";
import { Contract, BrowserProvider, Provider } from "ethers";

declare global {
    interface Window{
        ethereum: MetaMaskInpageProvider;
    }
}

export type Web3Params = {
    ethereum: MetaMaskInpageProvider |null;
    provider: BrowserProvider | null;
    contract: Contract | null;
}

export type Web3State = {
    isLoading: boolean;
} & Web3Params;

export const createDefaultState = () => {
    return{
        ethereum: null,
        provider: null,
        contract: null,
        isLoading: true
    }
}