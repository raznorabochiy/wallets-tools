import fs from "fs";
import { Account } from "@aleohq/sdk";
import { ADDRESSES_FILENAME, PRIVATES_FILENAME } from "../constants";
import { loadFromFile } from "../utils";

const keys = await loadFromFile(PRIVATES_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const key of keys) {
  const wallet = new Account({ privateKey: key });
  const address = wallet.address().to_string();

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
