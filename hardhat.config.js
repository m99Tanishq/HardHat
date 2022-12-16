/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "hQvWBVTv50yrNFur-68DR09ZhxDVZIaA";
const ROPSTEN_PRIVATE_KEY = "8454292151f619079c820e4bd85116dc31aa2a6c939d6fa0bbae98c086a85361";
module.exports = {
  solidity: "0.8.17",

  networks:{
    goreli:{
      url:`https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${ROPSTEN_PRIVATE_KEY}`],
    }
  }
};
