const Dochaintion = artifacts.require("Dochaintion");

module.exports = function (deployer) {
  deployer.deploy(Dochaintion, "0x93a224c17AC0CFf33dc4A88C3e02dF2204060Bde", "");
};
