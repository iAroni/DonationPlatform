# DonationPlatform

#SETUP
Make .secret file with mnemonic
Make .infura file with api-key
cd TruffleContract && npm install @truffle/hdwallet-provider

#truffle
cd TruffleContract && truffle migrate --network rinkeby

#to site (for now)
Copy TruffleContract/contracts/Dochaintion.sol -> DonationPlatform/wwwroot/js/Dochaintion.js
change first line of Dochaintion { -> var DoChaintion = {