import HDWalletProvider from "@truffle/hdwallet-provider";
import { PRIVATE_KEY, INFURA_ROPSTEN_URL } from "./keys.json";

export const contracts_build_directory = "./public/contracts";
export const networks = {
  development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*",
  },
  ropsten: {
    provider: () => new HDWalletProvider(PRIVATE_KEY, INFURA_ROPSTEN_URL),
    network_id: 3,
    gas: 5500000,
    gasPrice: 20000000000,
    confirmations: 2,
    timeoutBlocks: 200
  }
};
export const compilers = {
  solc: {
    version: "0.8.13",
  }
};