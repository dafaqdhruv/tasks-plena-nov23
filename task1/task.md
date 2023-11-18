# Task Description

You have to transfer the Testnet BNB available in the contract below to your BSC address.

`Contract Address:0x472F952956B6C7444D917c1c46d9b2fC35bbE9cE`

Contract Code:

```solidity
pragma solidity 0.8.0;

contract Test{
    function transferFunds(address _address, bytes calldata _payload) external{
        (bool status,) = _address.delegatecall(_payload);
        require(status, "Forwarded call failed.");
    }
}
```
