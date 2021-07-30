import { ethers } from 'ethers';

import { account, provider } from './config/wallet.js';
import { factoryContracts, routerContracts, pairContracts } from './config/contracts.js';
import { pancakeAddresses, apeAddresses } from './config/addresses.js';


const pancakeRouter = new ethers.Contract(pancakeAddresses.router, routerContracts, account);
const pancakeFactory = new ethers.Contract(pancakeAddresses.factory, factoryContracts, account);

const apeRouter = new ethers.Contract(apeAddresses.router, routerContracts, account);
const apeFactory = new ethers.Contract(apeAddresses.factory, factoryContracts, account);

// const pair = new ethers.Contract(addresses.wbnbCakePair, pairContracts, account);
// pair.on('Sync', async (reserve0, reserve1) => {
//   console.log(Number(reserve0._hex), '------RESERVE--------', reserve1);
// })

provider.on('block', async (blockNo) => {
  console.log(blockNo);
})
// // Find a method to get total volume of a token (in an exchange?)