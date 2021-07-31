// factory.on("PairCreated", async (token0, token1, addressPair) => {
//   console.log(`
//     ~~~~~~~~~~~~~~~~~~
//     New pair detected
//     ~~~~~~~~~~~~~~~~~~
//     token0: ${token0}
//     token1: ${token1}
//     addressPair: ${addressPair}
//   `);

//   // This block ensures we pay with WBNB
//   let buyToken, sellToken;
//   if(token0 === addresses.WBNB) {
//       buyToken = token0;
//       sellToken = token1;
//   }
//   if (token1 === addresses.WBNB) {
//       buyToken = token1;
//       sellToken = token0;
//   }
//   // Neither token is WBNB and we cannot purchase
//   if(typeof buyToken === "undefined") {
//       return
//   }
//   // const amountIn = ethers.utils.parseUnits('0.1', 'ether'); //ether is the measurement, not the coin
//   // const amounts = await router.getAmountsOut(amountIn, [buyToken, sellToken]);

//   // const amountOutMin = amounts[1].sub(amounts[1].div(10)); // math for Big numbers in JS
//   // console.log(`
//   // ~~~~~~~~~~~~~~~~~~~~
//   // Buying new token
//   // ~~~~~~~~~~~~~~~~~~~~
//   // buyToken: ${amountIn.toString()} ${buyToken} (WBNB)
//   // sellToken: ${amountOutMin.toString()} ${sellToken}
//   // `);
//   // const tx = await router.swapExactTokensForTokens(
//   //     amountIn,
//   //     amountOutMin,
//   //     [buyToken, sellToken],
//   //     addresses.me,
//   //     Date.now() + 1000 * 60 * 5 //5 minutes
//   // );
//   // const receipt = await tx.wait();
//   // console.log('Transaction receipt');
//   // console.log(receipt);
//   }
// )
