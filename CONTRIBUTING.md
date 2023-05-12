# Contributing
To contribute to [poseidon-sol](https://github.com/yuriko627/poseidon-sol), please adhere to the following guidelines:

## Prerequisites
Make sure your `node`  version is >=16.

## Cloning the Repo
First, `fork` the main branch of the repo. For more information on forking, please read this [tutorial](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

Then, in your local environment, run `git clone https://github.com/<your_username>/poseidon-sol.git`.

## Installing Dependencies
Before you begin working on your contributions, you need to make sure you have all of the library's dependencies installed. To do that, simply run `npm install`.

## Before Opening a Pull Request (PR)
Before submitting your contributions through a [PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests), make sure to do the following:  
- Write tests for any new features you build
- `npx solhint contracts/Poseidon.sol` to run autoformatting
- `npx hardhat test` to make sure all tests pass
- `npx hardhat converage` to run static analysis
