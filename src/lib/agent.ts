import {
  AgentKit,
  CdpWalletProvider,
  walletActionProvider,
  erc721ActionProvider,
  cdpApiActionProvider,
  cdpWalletActionProvider,
  pythActionProvider,
} from "@coinbase/agentkit";

const erc721 = erc721ActionProvider();
const pyth = pythActionProvider();
const wallet = walletActionProvider();
const cdp = cdpApiActionProvider({
  apiKeyName: process.env.CDP_API_KEY_NAME,
  apiKeyPrivateKey: process.env.CDP_API_KEY_PRIVATE_KEY?.replace(/\\n/g, "\n"),
});

export const agentKit = await AgentKit.from({
  walletProvider,
  actionProviders: [erc721, pyth, wallet, cdp],
});
