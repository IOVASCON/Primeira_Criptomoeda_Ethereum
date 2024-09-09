async function main() {
    // Obter a conta do deployer
    const [deployer] = await ethers.getSigners();
    
    // Exibir o endereço do deployer para confirmar a conta
    console.log("Deployer address:", deployer.address);
    
    // Conectar ao contrato implantado no endereço especificado
    const Token = await ethers.getContractFactory("MinhaPrimeiraCriptomoeda");
    const token = await Token.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

    try {
        // Verificar o totalSupply do contrato
        const totalSupply = await token.totalSupply();
        console.log("Total supply:", totalSupply.toString());

        // Verificar o saldo do deployer
        const balance = await token.balanceOf(deployer.address);
        console.log("Balance of deployer:", balance.toString());
    } catch (error) {
        console.error("Erro ao interagir com o contrato:", error);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
