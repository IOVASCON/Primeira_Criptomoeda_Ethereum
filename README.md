# Desafio: Minha Primeira Criptomoeda

Este projeto tem como objetivo o desenvolvimento de um contrato inteligente que simula uma criptomoeda na rede Ethereum. O desafio envolve a implementação do contrato utilizando **Solidity**, a compilação, o deploy na rede de testes **Hardhat** e a criação de testes automatizados para garantir o correto funcionamento do contrato.

## Propósito do Desafio

O propósito deste desafio é aplicar os conhecimentos adquiridos em **blockchain**, **Solidity**, **Hardhat** e **JavaScript** para criar e testar um contrato inteligente que gerencia uma criptomoeda. A criptomoeda possui funções básicas como emissão inicial (supply), transferência de tokens e verificação de saldo, tudo controlado por eventos e mapeamentos.

## Estrutura de Arquivos

Abaixo está a estrutura de diretórios e arquivos utilizados no projeto:

├── contracts/
│   └── MinhaPrimeiraCriptomoeda.sol  # O contrato inteligente da criptomoeda
├── scripts/
│   ├── deploy.js                     # Script para fazer o deploy do contrato
│   └── interact.js                   # Script para interagir com o contrato após o deploy
├── test/
│   └── TesteCriptomoeda.js            # Teste automatizado para validar o contrato
├── hardhat.config.js                  # Configuração do Hardhat
├── package.json                       # Dependências e informações do projeto
└── README.md                          # Documentação do projeto

## Tecnologias Utilizadas

As tecnologias e ferramentas utilizadas para o desenvolvimento e testes do contrato foram:

    Solidity: Linguagem de programação para contratos inteligentes.
    JavaScript: Linguagem para escrever scripts de deploy e testes.
    Hardhat: Ambiente de desenvolvimento para Ethereum que facilita a compilação, o deploy e os testes.
    Ethers.js: Biblioteca para interagir com contratos na rede Ethereum.
    Chai: Biblioteca de asserções para testes em JavaScript.
    Node.js

## Bibliotecas Instaladas

As principais bibliotecas instaladas para este projeto foram:

    Hardhat: npm install --save-dev hardhat
    Ethers.js: npm install --save-dev @nomiclabs/hardhat-ethers ethers
    Chai: npm install chai

## Compilação e Execução

1.Compilação

Para compilar o contrato, utilizamos o Hardhat. O comando abaixo foi utilizado para compilar o código Solidity:

    *npx hardhat compile*

Resultado: Compilação realizada com sucesso.

2.Deploy do Contrato

O contrato foi implantado na rede de testes Hardhat utilizando o seguinte comando:

    *npx hardhat run scripts/deploy.js --network hardhat*

Resultado: O contrato foi implantado com sucesso e o endereço do contrato foi registrado. O saldo inicial do deployer foi atribuído corretamente.

![Compilação e Deploy](./VScode%20-%20compilação%20e%20deploy.PNG)

3.Testes

Para validar o contrato, criamos um teste automatizado em TesteCriptomoeda.js e o executamos com o comando:

    *npx hardhat test*

Resultado: O teste passou com sucesso, validando que o total supply foi corretamente atribuído ao deployer.

  MinhaPrimeiraCriptomoeda
    ✔ Deve atribuir o total supply ao deployer (1207ms)

![Test](./VScode%20-%20Test.PNG)

## Conclusão

O desafio foi concluído com êxito. O contrato foi compilado, implantado e testado corretamente. Todas as etapas do projeto, desde a implementação do contrato até a validação através de testes, foram executadas com sucesso. Este projeto oferece uma base sólida para desenvolver contratos inteligentes na rede Ethereum, fornecendo um exemplo prático de como criar e gerenciar uma criptomoeda.

Esse arquivo `README.md` fornece uma visão completa do projeto, incluindo a motivação, a estrutura do projeto, as ferramentas e bibliotecas utilizadas, e o sucesso das etapas de compilação, deploy e testes.
