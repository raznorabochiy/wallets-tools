import fs from "fs";
import { AptosAccount } from "aptos";
import {
  APTOS_DERIVATION_PATH,
  PRIVATES_FILENAME,
  SEEDS_FILENAME,
} from "../constants";
import { loadFromFile } from "../utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(PRIVATES_FILENAME);

for (const seed of seeds) {
  const account = AptosAccount.fromDerivePath(APTOS_DERIVATION_PATH, seed);
  const { privateKeyHex } = account.toPrivateKeyObject();

  stream.write(`${privateKeyHex}\n`);
}

console.log(`Private keys written to ${PRIVATES_FILENAME}`);
stream.close();
