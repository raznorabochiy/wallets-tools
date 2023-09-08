import fs from "fs";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { ADDRESSES_FILENAME, SEEDS_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const seed of seeds) {
  const keypair = Ed25519Keypair.deriveKeypair(seed);
  const address = keypair.toSuiAddress();

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
