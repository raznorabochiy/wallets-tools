import fs from "fs";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { ADDRESSES_FILENAME, PRIVATES_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const keys = await loadFromFile(PRIVATES_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const key of keys) {
  const keyWithout0x = key.slice(2);
  const secretKey = Uint8Array.from(Buffer.from(keyWithout0x, "hex"));
  const keypair = Ed25519Keypair.fromSecretKey(secretKey);
  const address = keypair.toSuiAddress();

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
