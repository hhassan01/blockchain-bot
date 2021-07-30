import _ from 'lodash';
import { ethers } from 'ethers';

import { account } from './wallet';
import { pancakeAddresses } from '../addresses.js';
import { resetFactory } from '../helpers/resetFactory.js';

const routerContracts = [
  'function factory() external pure returns (address)',
  'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)',
  'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)',
]
const router = new ethers.Contract(pancakeAddresses.router, routerContracts, account);

const factoryContracts = [
  'event PairCreated(address indexed token0, address indexed token1, address pair, uint)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)',
  'function allPairs(uint) external view returns (address pair)',
  'function totalSupply() external view returns (uint)'
]
let factory = new ethers.Contract(pancakeAddresses.factory, factoryContracts, account);

try {
  // const WBNB_CAKE = await factory.getPair(pancakeAddresses.WBNB, addresses.CAKE);
} catch(error) {
  if (error.reason == 'bad address checksum') {
    factory = resetFactory(router, factoryContracts);
  } else {
    throw new Error(error);
  }
} finally {
  // const WBNB_CAKE = await factory.getPair(addresses.WBNB, addresses.CAKE);
  // addresses = _.extend(addresses, { wbnbCakePair: WBNB_CAKE });
}

const pairContracts = [
  'function name() external pure returns (string memory)',
  'function totalSupply() external view returns (uint)',
  'event Sync(uint112 reserve0, uint112 reserve1)',
],
// const pair = new ethers.Contract(addresses.wbnbCakePair, pairContracts, account);

const pairName = await pair.name();
const totalSupply = await pair.totalSupply();
console.log(pairName, '------', totalSupply);