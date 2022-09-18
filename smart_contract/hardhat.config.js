require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/i11bpe5-vIP8SC97iCnKmcsF_IITkzl2',
      accounts:['cf6994dec2eac9c8b8e8d99629e9fd475f9658938326539fd5d54a570e497983']
    }
  }
}