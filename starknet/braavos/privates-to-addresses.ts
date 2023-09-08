import fs from "fs";
import { ADDRESSES_FILENAME, PRIVATES_FILENAME } from "../../constants";
import { loadFromFile } from "../../utils";
import { getBraavosAddress } from "./utils";

const keys = await loadFromFile(PRIVATES_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

for (const key of keys) {
  const address = getBraavosAddress(key);

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
