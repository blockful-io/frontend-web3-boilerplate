/*
    This file should hold the addresses of the 
    smartContracts that are used in the application.
*/

import { SupportedNetworks } from "@/config/wallet";

enum Contracts {
  "MyContractName",
}

export const ContractAddressByChain: Record<
  SupportedNetworks,
  Record<Contracts, string>
> = {
  [SupportedNetworks.Mainnet]: {
    [Contracts.MyContractName]: "0x000",
  },
  [SupportedNetworks.Sepolia]: {
    [Contracts.MyContractName]: "0x000",
  },
};
