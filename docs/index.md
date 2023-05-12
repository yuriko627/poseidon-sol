# Welcome to poseidon-sol's documentation!
This library is a Poseidon hash function implementation in Solidity.

![](https://img.shields.io/hexpm/l/plug?color=green)
![](https://img.shields.io/github/issues/yuriko627/poseidon-sol)
[![](https://github.com/yuriko627/poseidon-sol/workflows/Build%20Status/badge.svg?branch=main)](https://github.com/yuriko627/poseidon-sol/actions?query=workflow%3A%22Build+Status%2)
[![](https://codecov.io/gh/yuriko627/poseidon-sol/branch/main/graph/badge.svg)](https://codecov.io/gh/yuriko627/poseidon-sol)
[![](https://img.shields.io/npm/v/poseidon-sol)](https://www.npmjs.com/package/poseidon-sol)
[![](https://readthedocs.org/projects/poseidon-sol/badge/?version=latest)](https://poseidon-sol.readthedocs.io/en/latest/?badge=latest)


## Overview

Currently, the most widely-used Poseidon hash function for EVM is implemented in JS, and it is performant but it could be more unreadable. Also, if you write a smart contract in Solidity, it has to link the bytecode or call an external contract address for hash functions, which is inconvenient.

In the future, Poseidon hash might be implemented as a precompile contract in the Ethereum protocol (https://eips.ethereum.org/EIPS/eip-5988), so that people can call it with cheap gas. However, I think it would still be valuable to have a Poseidon Solidity implementation as a baseline for the performance benchmark.

## Installation
make sure that your noder version is >= 16.
`npm install poseidon-sol`

## Usage
put the 2 elements that you want to hash into the array:
`poseidon.hash([0, 0])`

For example,
```
import "poseidon-sol/Poseidon.sol";

contract Example {

  function hash(uint input0, uint input1) public {
    uint output = Poseidon.hash([input0, input1]);
  }

}
```

## Contribution
make sure to run the test and lint before making a PR.

### How to run a test
1. `npm install`
2. `npx hardhat test`

you can see the test coverage by the following command:
`npx hardhat coverage`

### How to lint
1. `npm install`
2. `npx solhint contracts/Poseidon.sol`