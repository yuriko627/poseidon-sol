# poseidon-sol
Poseidon Hash Function implementation in Solidity


![](https://img.shields.io/hexpm/l/plug?color=green)

## Motivation for this implementation
Currently, the most widely-used Poseidon hash function for EVM is implemented in JS, and it is performant but it could be more unreadable. Also, if you write a smart contract in Solidity, it has to link the bytecode or call an external contract address for hash functions, which is inconvenient. 

In the future, Poseidon hash might be implemented as a precompile contract in the Ethereum protocol (https://eips.ethereum.org/EIPS/eip-5988), so that people can call it with cheap gas. However, I think it would still be valuable to have a reference Poseidon Solidity implementation as a baseline for the performance benchmark.
