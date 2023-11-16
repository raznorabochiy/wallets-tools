import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import fs from "fs";
import { ADDRESSES_FILENAME, PRIVATES_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const keys = await loadFromFile(PRIVATES_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const key of keys) {
  const keypair = Keypair.fromSecretKey(bs58.decode(key));
  const address = keypair.publicKey.toString();

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
