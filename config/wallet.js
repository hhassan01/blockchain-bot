import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const mnemonic = process.env.MNEMONIC;
export const provider = new ethers.providers.WebSocketProvider(
  process.env.ANKR_WSS
);

const wallet = ethers.Wallet.fromMnemonic(mnemonic);
export const account = wallet.connect(provider);
