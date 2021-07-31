export const routerContracts = [
  'function factory() external pure returns (address)',
  'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)',
  'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)',
]

export const factoryContracts = [
  'event PairCreated(address indexed token0, address indexed token1, address pair, uint)',
  'function getPair(address tokenA, address tokenB) external view returns (address pair)',
  'function allPairs(uint) external view returns (address pair)',
  'function totalSupply() external view returns (uint)'
]

export const pairContracts = [
  'function name() external pure returns (string memory)',
  'function totalSupply() external view returns (uint)',
  'event Sync(uint112 reserve0, uint112 reserve1)',
]
