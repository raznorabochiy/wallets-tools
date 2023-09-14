import fs from "fs";
import { ADDRESSES_FILENAME, Cairo, SEEDS_FILENAME } from "../../constants";
import { loadFromFile } from "../../utils";
import { getArgentXAddress, getPrivateKeyFromSeed } from "./utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

let cairo = Cairo.v1_0;

if (process.argv[2] === "v0") {
  cairo = Cairo.v0;
}

for (const seed of seeds) {
  const privateKey = getPrivateKeyFromSeed(seed);
  const address = getArgentXAddress(privateKey, cairo);

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
