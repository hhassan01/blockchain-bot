import _ from "lodash";
import { ethers } from "ethers";
import { DateTime } from "luxon";
import pkg from "bignumber.js";

const { BigNumber } = pkg;

function formatReserves(reserves) {
  return {
    r0: BigNumber(_.get(reserves[0], "_hex", "")),
    r1: BigNumber(_.get(reserves[1], "_hex", "")),
    blockTimeStamp: DateTime.fromSeconds(reserves[2]).toFormat(
      "yyyy LLL dd ttt"
    ),
  };
}

function getPrice(reserves) {
  const price = _.get(reserves, "r0", 1).dividedBy(_.get(reserves, "r1", 1));
  return {
    bigNo: price,
    value: price.toString(),
  };
}

export async function getPairData(
  token0,
  token1,
  dexFactory,
  contracts,
  account
) {
  const token0Contract = new ethers.Contract(token0, contracts, account);
  const token1Contract = new ethers.Contract(token1, contracts, account);

  const tokenPairAddress = await dexFactory.getPair(token0, token1);
  const tokenPair = new ethers.Contract(tokenPairAddress, contracts, account);
  let reserves = await tokenPair.getReserves();
  reserves = formatReserves(reserves);
  // const supply = await tokenPair.totalSupply()
  // console.log(BigNumber(supply._hex).toString());

  return {
    name: `${await token0Contract.name()}-${await token1Contract.name()}`,
    decimals: [
      await token0Contract.decimals(),
      await token1Contract.decimals(),
    ],
    // totalSupply: BigNumber(await tokenPair.totalSupply(), '_hex', 1).toString(),
    reserves: {
      r0: {
        bigNo: _.get(reserves, "r0", 1),
        value: _.get(reserves, "r0", 1).toString(),
      },
      r1: {
        bigNo: _.get(reserves, "r1", 1),
        value: _.get(reserves, "r1", 1).toString(),
      },
      lastTransaction: _.get(reserves, "blockTimeStamp", ""),
    },
    price: getPrice(reserves),
  };
}
