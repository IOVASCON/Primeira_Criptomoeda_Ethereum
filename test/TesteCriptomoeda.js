const { expect } = require("chai");

describe("MinhaPrimeiraCriptomoeda", function () {
    it("Deve atribuir o total supply ao deployer", async function () {
        const [owner] = await ethers.getSigners();
        const Token = await ethers.getContractFactory("MinhaPrimeiraCriptomoeda");
        const token = await Token.deploy(1000000);

        await token.deployed();

        const ownerBalance = await token.balanceOf(owner.address);
        const totalSupply = await token.totalSupply();

        // Convertendo ambos para string antes de comparar
        expect(totalSupply.toString()).to.equal(ownerBalance.toString());
    });
});
