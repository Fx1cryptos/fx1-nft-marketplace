require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    baseSepolia: {
      url: process.env.BASE_SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },
    baseMainnet: {
      url: process.env.BASE_MAINNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
