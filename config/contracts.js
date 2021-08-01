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
  'function symbol() external pure returns (string memory)',
  'function decimals() external pure returns (uint8)',
  'function price0CumulativeLast() external view returns (uint)',
  'function price1CumulativeLast() external view returns (uint)',
  'function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)',
  'function kLast() external view returns (uint)',
]
