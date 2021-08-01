import { ethers } from "ethers";

export function resetFactory(router, contracts, account) {
  const factoryAddress = await router.factory();
  factory = new ethers.Contract(factoryAddress, contracts, account);
  return factory;
}
