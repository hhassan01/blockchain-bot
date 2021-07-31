export function resetFactory(router, contracts) {
  const factoryAddress = await router.factory();
  return factory = new ethers.Contract(factoryAddress, contracts, account);
}
