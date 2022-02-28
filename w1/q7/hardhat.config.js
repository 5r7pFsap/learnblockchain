require("@nomiclabs/hardhat-waffle");
//require("nomiclabs/hardhat-etherscan");
//require('hardhat-abi-exporter');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.4",
// };

module.exports = {
  defaultNetwork: "ropsten",
  networks: {
    hardhat:{
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/ede3c4b8fb7b45708d992d52089c8616",
      chainId: 3,
      accounts:[mnemonic]
    }
  },
  solidity: {
      version: "0.8.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
      timeout: 20000
    }
};