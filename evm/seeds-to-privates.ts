import fs from "fs";
import { Wallet } from "ethers";
import { PRIVATES_FILENAME, SEEDS_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(PRIVATES_FILENAME);

for (const seed of seeds) {
  const wallet = Wallet.fromPhrase(seed);
  const { privateKey } = wallet;

  stream.write(`${privateKey}\n`);
}

console.log(`Private keys written to ${PRIVATES_FILENAME}`);
stream.close();
