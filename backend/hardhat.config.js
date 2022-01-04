require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.NETWORK_URL,
      accounts: [ process.env.ACCOUNT_PRIVATE_KEY ]
    }
  }
}