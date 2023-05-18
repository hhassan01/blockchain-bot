import _ from "lodash";
import { ethers } from "ethers";
import pkg from "bignumber.js";
const { BigNumber } = pkg;

import { account, provider } from "./config/wallet.js";
import {
  factoryContracts,
  routerContracts,
  pairContracts,
} from "./config/contracts.js";
import {
  pancakeAddresses,
  apeAddresses,
  coinAddresses,
} from "./config/addresses.js";
import { getPairData } from "./helpers/pairs.js";

const pancakeRouter = new ethers.Contract(
  pancakeAddresses.router,
  routerContracts,
  account
);
const pancakeFactory = new ethers.Contract(
  pancakeAddresses.factory,
  factoryContracts,
  account
);

const apeRouter = new ethers.Contract(
  apeAddresses.router,
  routerContracts,
  account
);
const apeFactory = new ethers.Contract(
  apeAddresses.factory,
  factoryContracts,
  account
);

const id = await getPairData(
  coinAddresses.wbnb,
  coinAddresses.wex,
  pancakeFactory,
  pairContracts,
  account
);
console.log("MAIN ", {id});
