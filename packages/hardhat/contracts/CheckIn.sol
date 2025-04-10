// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn {
    address public owner;
    IBatchRegistry public batchRegistry;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    constructor(address _batchRegistry) {
        owner = msg.sender;
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function checkMeIn() external {
        batchRegistry.checkIn();
    }
}
