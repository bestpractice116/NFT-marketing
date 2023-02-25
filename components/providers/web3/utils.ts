import {MetaMaskInpageProvider} from "@metamask/providers";
import { Contract, Provider } from "ethers";

export type Web3Params = {
    ethereum: MetaMaskInpageProvider |null;
    provider: Provider | null;
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