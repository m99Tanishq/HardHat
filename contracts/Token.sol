// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 < 0.9.0;

contract Token{
    string public name = "HardHat Token";
    string public symbole = "HHT";
    uint256 public totalSupply = 1000;

    address public owner;

    mapping(address => uint256) balances;

    // Keep track of all token transfers
    mapping(address => mapping(address => uint256)) internal tokenTransfers;

    constructor() {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Not Enough Tokens");
        require(amount > 0, "Amount must be greater than 0");
        require(to != address(0), "Recipient address cannot be 0x0");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        tokenTransfers[msg.sender][to] += amount;
    }

    function balanceOf(address account) external view returns(uint256){
        return balances[account];
    }
}