# Task 1

## Solution

Since the task involved a contract which invokes a `delegateCall()`, we can execute a function from another contract to transfer funds.

A contract is deployed which contains `transferFunds (address to)` method which transfer all BNB funds from contract to a given address. And the address to this contract along with it's encoded function parameters is passed to the `Test` contract.

This contract is defined in `./contracts/payload.sol`. And the script to send this transaction is in `tx.js`.

## Prerequisites

* Node v18

## How to run

* Do an npm install

```shell
    npm i
```

* Compile contracts

```shell
    npx hardhat compile
```

* Fill private key in `tx.js`

* Run tx

```shell
    node tx.js
```
