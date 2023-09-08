import fs from "fs";
import { ADDRESSES_FILENAME, SEEDS_FILENAME } from "../../constants";
import { loadFromFile } from "../../utils";
import { getArgentXAddress, getPrivateKeyFromSeed } from "./utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const seed of seeds) {
  const privateKey = getPrivateKeyFromSeed(seed);
  const address = getArgentXAddress(privateKey);

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
