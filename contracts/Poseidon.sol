// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Poseidon {

    event Hashed(uint amount, uint when);

	// Prime 0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001
	uint F = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    uint public N_ROUNDS_F = 8;
	uint[16] public N_ROUNDS_P = [56, 57, 56, 60, 60, 63, 64, 63, 60, 66, 60, 65, 70, 60, 64, 68];

	// Parameters are generated by a reference script https://extgit.iaik.tugraz.at/krypto/hadeshash/-/blob/master/code/generate_parameters_grain.sage
	// Used like so: sage generate_parameters_grain.sage 1 0 254 2 8 56 0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001
	// uint { C, M } = unstringifyBigInts(require("./poseidon_constants.json"));


    function poseidon_hash(uint[] calldata inputs) public returns(uint) {

        require(inputs.length > 0, "No input");
		require(inputs.length <= N_ROUNDS_P.length);

    }
}