import fs from "fs";
import { PRIVATES_FILENAME, SEEDS_FILENAME } from "../../constants";
import { loadFromFile } from "../../utils";
import { getPrivateKeyFromSeed } from "./utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(PRIVATES_FILENAME);

for (const seed of seeds) {
  const privateKey = getPrivateKeyFromSeed(seed);

  stream.write(`${privateKey}\n`);
}

console.log(`Private keys written to ${PRIVATES_FILENAME}`);
stream.close();
