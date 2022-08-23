require("@nomicfoundation/hardhat-chai-matchers"); //new update from hardhat requires to import 'hardhat-toolbox'
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};