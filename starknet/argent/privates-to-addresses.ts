import fs from "fs";
import { ADDRESSES_FILENAME, Cairo, PRIVATES_FILENAME } from "../../constants";
import { loadFromFile } from "../../utils";
import { getArgentXAddress } from "./utils";

const keys = await loadFromFile(PRIVATES_FILENAME);
const stream = fs.createWriteStream(ADDRESSES_FILENAME);

let cairo = Cairo.v1_0;

if (process.argv[2] === "v0") {
  cairo = Cairo.v0;
}

for (const key of keys) {
  const address = getArgentXAddress(key, cairo);

  stream.write(`${address}\n`);
}

console.log(`Addresses written to ${ADDRESSES_FILENAME}`);
stream.close();
