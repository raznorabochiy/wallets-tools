import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import fs from "fs";
import { seedPhraseToPrivateKey } from "./utils";
import { ADDRESSES_FILENAME, SEEDS_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const seed of seeds) {
  const privateKey = seedPhraseToPrivateKey(seed);
  const keypair = Keypair.fromSecretKey(bs58.decode(privateKey));
  const address = keypair.publicKey.toString();

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
