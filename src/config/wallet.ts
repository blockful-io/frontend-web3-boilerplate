// Import any network that should be included in dApp's connection, below
import { mainnet, sepolia } from "wagmi/chains";
import { configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";

// Add any network that should be included in dApp's connection, below
export enum SupportedNetworks {
  "Mainnet" = 1,
  "Sepolia" = 11155111,
}

// Wether or not the network configured to be used is a testnet
export const IS_TESTNET = !!process.env.NEXT_PUBLIC_USE_TESTNET;

export const ENV_DEFAULT_CHAIN_ID = IS_TESTNET
  ? SupportedNetworks.Sepolia
  : SupportedNetworks.Mainnet;

const apiKey = IS_TESTNET
  ? process.env.NEXT_PUBLIC_ALCHEMY_TESTNET_KEY
  : process.env.NEXT_PUBLIC_ALCHEMY_KEY;

if (!apiKey) {
  throw new Error("Please provide an Alchemy API key");
}

const projectID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "";

if (!projectID) {
  throw new Error("Please provide an Wallet Connect project ID");
}

// You can change below networks array as wanted
const { chains, publicClient } = configureChains(
  [IS_TESTNET ? sepolia : mainnet],
  [alchemyProvider({ apiKey: apiKey }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Blockful Frontend Web3 Boilerplate",
  projectId: projectID,
  chains,
});

const wagmiClientConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export { chains, wagmiClientConfig };
