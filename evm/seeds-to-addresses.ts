import fs from "fs";
import { Wallet } from "ethers";
import { ADDRESSES_FILENAME, SEEDS_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const seed of seeds) {
  const wallet = Wallet.fromPhrase(seed);
  const { address } = wallet;

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
