import { MetaMaskInpageProvider } from "@metamask/providers"
import { Contract, BrowserProvider } from "ethers"
import { SWRResponse } from "swr";

export type Web3Dependencies = {
    provider: BrowserProvider;
    contract: Contract;
    ethereum: MetaMaskInpageProvider;
}

export type CryptoSWRResponse = SWRResponse;

export type CryptoHandlerHook = (params: any) => CryptoSWRResponse;

export type CryptoHookFactory = {
    (d: Partial<Web3Dependencies>): void
}