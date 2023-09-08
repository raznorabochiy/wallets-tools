import fs from "fs";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { fromB64 } from "@mysten/sui.js/utils";
import { PRIVATES_FILENAME, SEEDS_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(PRIVATES_FILENAME);

for (const seed of seeds) {
  const keypair = Ed25519Keypair.deriveKeypair(seed);
  const { privateKey } = keypair.export();
  const key = "0x" + Buffer.from(fromB64(privateKey)).toString("hex");

  stream.write(`${key}\n`);
}

console.log(`Private keys written to ${PRIVATES_FILENAME}`);
stream.close();
