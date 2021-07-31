import { ethers } from 'ethers';

import { account, provider } from './config/wallet.js';
import { factoryContracts, routerContracts, pairContracts } from './config/contracts.js';
import { pancakeAddresses, apeAddresses } from './config/addresses.js';

const pancakeRouter = new ethers.Contract(pancakeAddresses.router, routerContracts, account);
const pancakeFactory = new ethers.Contract(pancakeAddresses.factory, factoryContracts, account);

const apeRouter = new ethers.Contract(apeAddresses.router, routerContracts, account);
const apeFactory = new ethers.Contract(apeAddresses.factory, factoryContracts, account);

// pair.on('Sync', async (reserve0, reserve1) => {
//   console.log(Number(reserve0._hex), '------RESERVE--------', reserve1);
// })

const WBNBAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const BUSDAdddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
const myPair = await pancakeFactory.getPair(WBNBAddress, BUSDAdddress);
console.log(myPair);

const pair = new ethers.Contract(myPair, pairContracts, account);
const pairName = await pair.name()
console.log(pairName)
// provider.on('block', async (blockNo) => {
//   console.log(blockNo);
  

// })
// // Find a method to get total volume of a token (in an exchange?)