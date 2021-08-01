import _ from 'lodash';
import { ethers } from 'ethers';

import { account, provider } from './config/wallet.js';
import { factoryContracts, routerContracts, pairContracts } from './config/contracts.js';
import { pancakeAddresses, apeAddresses, coinAddresses } from './config/addresses.js';

// --------------------------- //
const pancakeRouter = new ethers.Contract(pancakeAddresses.router, routerContracts, account);
const pancakeFactory = new ethers.Contract(pancakeAddresses.factory, factoryContracts, account);

const apeRouter = new ethers.Contract(apeAddresses.router, routerContracts, account);
const apeFactory = new ethers.Contract(apeAddresses.factory, factoryContracts, account);
// --------------------------- //

const coins = [];
const wex_wbnb = await pancakeFactory.getPair(coinAddresses.wbnb, coinAddresses.wex);
console.log(wex_wbnb)
const wex_wbnb_pair = new ethers.Contract(wex_wbnb, pairContracts, account);

const xvs_wbnb = await pancakeFactory.getPair(coinAddresses.wbnb, coinAddresses.xvs);
console.log(xvs_wbnb)
const xvs_wbnb_pair = new ethers.Contract(xvs_wbnb, pairContracts, account);

// const xvs_wbnb_pair_obj = {
//   name: await xvs_wbnb_pair.name(),
//   volume: Number(_.get(await xvs_wbnb_pair.totalSupply(), '_hex', 'error')),
//   symbol: await xvs_wbnb_pair.symbol(),
//   decimals: await xvs_wbnb_pair.decimals()
// }
// coins.push(xvs_wbnb_pair_obj);
// const wex_wbnb_pair_obj = {
//   name: await wex_wbnb_pair.name(),
//   volume: Number(_.get(await wex_wbnb_pair.totalSupply(), '_hex', 'error')),
//   symbol: await wex_wbnb_pair.symbol(),
//   decimals: await wex_wbnb_pair.decimals()
// }
// coins.push(wex_wbnb_pair_obj);
// console.log(coins)

function formatReserves(reserveObject) {
  return {
    reserve0: ethers.utils.formatEther(reserveObject[0]),
    reserve1: ethers.utils.formatEther(reserveObject[1])
  }
}

async function GetTokenData(token0, token1) {
  const token = await pancakeFactory.getPair(token0, token1);
  const tokenPair = new ethers.Contract(token, pairContracts, account);
  const pairObj = {
    name: await tokenPair.name(),
    volume: ethers.utils.formatEther(_.get(await tokenPair.totalSupply(), '_hex', '')),
    symbol: await tokenPair.symbol(),
    decimals: await tokenPair.decimals(),
    reservers: formatReserves(await tokenPair.getReserves()),
    price0: ethers.utils.formatEther(await tokenPair.price0CumulativeLast()),
    price1: ethers.utils.formatEther(await tokenPair.price1CumulativeLast()),
    kLast: ethers.utils.formatEther(await tokenPair.kLast()),
  }
  return pairObj;
}

// const vol = await xvs_wbnb_pair.totalSupply();
// console.log(vol, 'VOL')
// const mango = ethers.utils.formatEther(vol)
const mango = await GetTokenData(coinAddresses.wbnb, coinAddresses.wex);
console.log(mango, 'BIG NUMBER RESULT');

// provider.on('block', async (blockNo) => {
//   console.log(blockNo);
//   const mango = await GetTokenData(coinAddresses.wbnb, coinAddresses.busd);
//   console.log(mango);
// })
// // Find a method to get total volume of a token (in an exchange?)