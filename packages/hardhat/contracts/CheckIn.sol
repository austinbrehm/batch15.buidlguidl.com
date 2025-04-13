// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;


// Interact with the BatchRegistry contract.
interface IBatchRegistry {
    function checkIn() external;
}


contract CheckIn {
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistry) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function checkIn() public {
        batchRegistry.checkIn();
    }
}
