require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UFakVqbPwzekXVg5lIw37DP4rzCAutdJ',
      accounts: ['8a426563d64301fc412fbc71504e53180a5a989b8096770f2aaff0de2df0b5d8'],
    },
  },
};