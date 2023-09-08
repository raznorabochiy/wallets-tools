import fs from "fs";
import { AptosAccount, HexString } from "aptos";
import { ADDRESSES_FILENAME, PRIVATES_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const keys = await loadFromFile(PRIVATES_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const key of keys) {
  const account = new AptosAccount(new HexString(key).toUint8Array());
  const { address } = account.toPrivateKeyObject();

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
