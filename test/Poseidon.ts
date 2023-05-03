import { expect } from 'chai';
import { ethers } from 'hardhat';
const { poseidon, poseidon_slow } = require('circomlibjs');

describe('Poseidon contract', function () {
  it('Should output the same hash against poseison-slow.js implementation', async function () {
    const Poseidon = await ethers.getContractFactory('Poseidon');
    const _poseidon = await Poseidon.deploy();
    const hash = await _poseidon.hash([3, 5]);
    expect(hash.toString()).to.equal(poseidon([3, 5]).toString());
  });

  it('Should hash edge value, [0, 0]', async function () {
    const Poseidon = await ethers.getContractFactory('Poseidon');
    const _poseidon = await Poseidon.deploy();
    const hash = await _poseidon.hash([0, 0]);
    expect(hash.toString()).to.equal(poseidon([0, 0]).toString());
  });

  it('Should hash 0 and a randome number', async function () {
    const Poseidon = await ethers.getContractFactory('Poseidon');
    const _poseidon = await Poseidon.deploy();
    const i0 = Math.floor(Math.random() * 100000000);
    const h = await _poseidon.hash([i0, 0]);
    expect(h.toString()).to.equal(poseidon([i0, 0]).toString());
    expect(h.toString()).to.equal(poseidon([i0, 0]).toString());
  });

  it('Should check overflowed inputs', async () => {
    const Poseidon = await ethers.getContractFactory('Poseidon');
    const _poseidon = await Poseidon.deploy();
    const input = [1, 5];
    for (let x = 0; x < 10; x++) {
      input.map((i) => 2n ** 255n + BigInt(i * x));
    }
    const h = await _poseidon.hash([input[0], input[1]]);
    expect(h.toString()).to.equal(poseidon(input).toString());
    expect(h.toString()).to.equal(poseidon_slow(input).toString());
  });

  it('should hash many random numbers', async () => {
    const Poseidon = await ethers.getContractFactory('Poseidon');
    const _poseidon = await Poseidon.deploy();
    for (let x = 0; x < 10; x++) {
      const i0 = Math.floor(Math.random() * 100000000);
      const i1 = Math.floor(Math.random() * 100000000);
      const h = await _poseidon.hash([i0, i1]);
      expect(h.toString()).to.equal(poseidon([i0, i1]).toString());
      expect(h.toString()).to.equal(poseidon([i0, i1]).toString());
    }
  });
});
