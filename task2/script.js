const erc20ABI = require('./ERC20TokenABI.json');
const aavePoolABI = require('./AavePoolABI.json');

let ethereum = window.ethereum;
window.ethereum.request({ method: 'eth_requestAccounts' });

let provider = new ethereum.providers.Web3Provider(ethereum);
const signer = provider.getSigner();

const erc20Addr = "";
const aavePoolAddr = "";

const privKey = "";
const wallet = new ethereum.Wallet(privKey, provider);

const erc20Contract = new ethereum.Contract(erc20Addr, erc20ABI, wallet);
const aavePoolContract = new ethereum.Contract(aavePoolAddr, aavePoolABI, wallet);

const transferAmount = ethereum.utils.parseUnits('10', 18);

async function transferTokensToAave() {
  const approveTx = await erc20Contract.approve(aavePoolAddr, transferAmount);

  const depositTx = await aavePoolContract.deposit(erc20Addr, transferAmount, 0, wallet.address);
}

transferTokensToAave();
