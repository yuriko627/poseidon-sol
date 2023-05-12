// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

import "hardhat/console.sol";

interface PoseidonHash {
  function hash(uint[2] calldata) external pure returns (uint);
}

contract Benchmark {
  // Benchmark poseidon-sol
  function benchmarkA(address p) public view returns (uint) {
    uint[2] memory input = [uint(2), 1];
    uint g = gasleft();
    uint r = PoseidonHash(p).hash(input);
    console.log(g-gasleft());
    require(input[0] == 2, 'error');
    require(input[1] == 1, 'error');
    return r;
  }
}