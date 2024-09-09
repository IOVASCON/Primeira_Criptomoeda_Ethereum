// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract MinhaPrimeiraCriptomoeda {
    
    string public name = "MinhaPrimeiraCriptomoeda"; // Define o nome do token
    string public symbol = "MPC"; // Define o símbolo do token
    uint8 public decimals = 18; // Define a quantidade de casas decimais
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * (10 ** uint256(decimals)); // Define o supply total
        balanceOf[msg.sender] = totalSupply; // Atribui o supply ao criador do contrato
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    // Função para transferir tokens
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Saldo insuficiente");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    // Função para aprovação de gastos
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
}
