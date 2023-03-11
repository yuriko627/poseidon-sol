import { expect } from "chai"
import { ethers } from "hardhat"
const { poseidon } = require("circomlibjs")

describe("Poseidon contract", function () {
  it("Should output the same hash against poseison-slow.js implementation", async function () {
    const Poseidon = await ethers.getContractFactory("Poseidon")
    const _poseidon = await Poseidon.deploy()
    const hash = await _poseidon.hash([3, 5])
    expect(poseidon([3, 5]).toString()).to.equal(hash.toString())
  })
})
