const MinhaPrimeiraCriptomoeda = artifacts.require("MinhaPrimeiraCriptomoeda");

module.exports = function (deployer) {
    deployer.deploy(MinhaPrimeiraCriptomoeda, 1000000); // Parâmetro de supply inicial
};
