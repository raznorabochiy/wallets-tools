import fs from "fs";
import { AptosAccount } from "aptos";
import {
  ADDRESSES_FILENAME,
  APTOS_DERIVATION_PATH,
  SEEDS_FILENAME,
} from "../constants";
import { loadFromFile } from "../utils";

const seeds = await loadFromFile(SEEDS_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const seed of seeds) {
  const account = AptosAccount.fromDerivePath(APTOS_DERIVATION_PATH, seed);
  const { address } = account.toPrivateKeyObject();

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
