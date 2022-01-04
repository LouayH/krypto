// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
  uint256 count;

  event Transfer(address sender, address receiver, uint amount, string message, uint256 timestamp);

  struct Transaction {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
  }

  Transaction[] transactions;

  function send(address payable receiver, uint amount, string memory message) public {
    count += 1;
    transactions.push(Transaction(msg.sender, receiver, amount, message, block.timestamp));

    emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
  }

  function getAll() public view returns (Transaction[] memory) {
    return transactions;
  }

  function getCount() public view returns (uint256) {
    return count;
  }
}