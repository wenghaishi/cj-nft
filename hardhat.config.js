require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.REACT_APP_MUMBAI_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.REACT_APP_POLYGONSCAN_KEY,
    }
  },
};
