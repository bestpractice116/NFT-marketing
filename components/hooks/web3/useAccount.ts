import { CryptoHookFactory } from "@_types/hooks";
import useSWR from "swr";

type AccountHookFactory = CryptoHookFactory<string>;

export type UseAccountHook = ReturnType<AccountHookFactory>

export const hookFactory: AccountHookFactory = ({provider}) => () => {
    const swrRes = useSWR(
        provider? "web3/useAccount" : null,

        async () => {
            console.log("REVALIDATING!!!");
            const accounts = await provider!._getAddress("0x3B033924320ce1CDfd196DF8A346061Af98f0E39");
            if(!accounts){
                throw "Cannot retreive account! Please, connect to web3 wallet."
            }
            return accounts;
        }
    )
    return swrRes;
}

export const useAccount = hookFactory({ethereum: undefined, provider: undefined});