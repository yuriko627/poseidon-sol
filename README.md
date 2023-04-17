# poseidon-sol

## Overview

Poseidon Hash Function implementation in Solidity

![](https://img.shields.io/hexpm/l/plug?color=green)
![GitHub issues](https://img.shields.io/github/issues/yuriko627/poseidon-sol)
[![Build Status](https://github.com/yuriko627/poseidon-sol/workflows/Build%20Status/badge.svg?branch=main)](https://github.com/yuriko627/poseidon-sol/workflows/actions?query=workflow%3A%22Build+Status%22)
[![codecov](https://codecov.io/gh/yuriko627/poseidon-sol/branch/main/graph/badge.svg)](https://codecov.io/gh/yuriko627/poseidon-sol)

## Description

Currently, the most widely-used Poseidon hash function for EVM is implemented in JS, and it is performant but it could be more unreadable. Also, if you write a smart contract in Solidity, it has to link the bytecode or call an external contract address for hash functions, which is inconvenient.

In the future, Poseidon hash might be implemented as a precompile contract in the Ethereum protocol (https://eips.ethereum.org/EIPS/eip-5988), so that people can call it with cheap gas. However, I think it would still be valuable to have a Poseidon Solidity implementation as a baseline for the performance benchmark.

## How to use
- `npm install poseidon-sol`: install 

## How to test
- `npm install`
- `npx hardhat test`

## Other commands
-  `npx hardhat compile`
-  `npx hardhat coverage`

