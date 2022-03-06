// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0;

contract Bank {
    event logdata(uint x);
    mapping(address => uint) public balances;

    constructor() payable {
        // owner = 
    }

    receive() external payable {
        emit logdata(msg.value);
        if(balances[msg.sender]>0){
            update(balances[msg.sender] + msg.value);
        } else {
            update(msg.value);
        }

    }

    function update(uint newBalance) public {
        balances[msg.sender] = newBalance;
    }

    function balanceofall() public view returns(uint) {
        address myAddress = address(this);
        return myAddress.balance ;
    }

    function balanceof(address payable x) public view returns(uint) {
        return balances[x];
    }

    function withdraw(address payable x) public {
        address myAddress = address(this);

        if (myAddress.balance > 0) {
            x.transfer(myAddress.balance); 
        }
    }

}