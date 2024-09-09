/*
async function main() {
    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MinhaPrimeiraCriptomoeda");

    // Exibir o endereço do deployer e certificar-se de que está correto
    console.log("Deploying contracts with the account:", deployer.address);

    // Implantar o contrato com supply inicial de 1 milhão de tokens
    const token = await Token.deploy(1000000);
    await token.deployed();

    // Verificar se o contrato foi implantado corretamente
    console.log("Token deployed to:", token.address);

    // Verificar o saldo do deployer
    const balance = await token.balanceOf(deployer.address);
    console.log("Balance of deployer:", balance.toString());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
*/
async function main() {
    const [deployer] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MinhaPrimeiraCriptomoeda");

    // Exibir o endereço do deployer
    console.log("Deploying contracts with the account:", deployer.address);

    // Implantar o contrato com supply inicial de 1 milhão de tokens
    const token = await Token.deploy(1000000);
    await token.deployed();

    // Verificar se o contrato foi implantado corretamente
    console.log("Token deployed to:", token.address);

    // Verificar o saldo do deployer e emitir logs
    const balance = await token.balanceOf(deployer.address);
    console.log("Balance of deployer:", balance.toString());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
