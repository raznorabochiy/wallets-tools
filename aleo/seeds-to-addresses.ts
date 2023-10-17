import fs from "fs";
import { Account } from "@aleohq/sdk";
import { seedPhraseToPrivateKey } from "./utils";
import { ADDRESSES_FILENAME, SEEDS_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const seed of seeds) {
  const privateKey = seedPhraseToPrivateKey(seed);

  const wallet = new Account({ privateKey });
  const address = wallet.address().to_string();

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
