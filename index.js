pair.on('Sync', async (reserve0, reserve1) => {
  console.log(Number(reserve0._hex), '------RESERVE--------', reserve1);
})

// const pair = await factory.totalSupply();
// console.log(pair);

provider.on('block', async (blockNo) => {
  // Refetch refreshed values of Token prices here. 
  // console.log(blockNo);
})
// Find a method to get total volume of a token (in an exchange?)