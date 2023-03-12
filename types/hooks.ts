import { MetaMaskInpageProvider } from "@metamask/providers"
import { Contract, BrowserProvider } from "ethers"
import { SWRResponse } from "swr";

export type Web3Dependencies = {
    provider: BrowserProvider;
    contract: Contract;
    ethereum: MetaMaskInpageProvider;
}

export type CryptoHookFactory <D = any, P = any> = {
    (d: Partial<Web3Dependencies>): CryptoHandlerHook<D,P>
}

export type CryptoHandlerHook<D=any, p=any> = (params: string) => CryptoSWRResponse<D>;

export type CryptoSWRResponse<D = any> = SWRResponse<D>;

// shorter way too manipulate
// using other method just in case to call these in other files

// export type CryptoHookFactory <D = any, P = any> = {
//     (d: Partial<Web3Dependencies>): (params: P ) => SWRResponse<D>;
// }