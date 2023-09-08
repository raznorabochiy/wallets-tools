import fs from "fs";
import { Wallet } from "ethers";
import { SEEDS_COUNT_DEFAULT, SEEDS_FILENAME } from "./constants";

if (fs.existsSync(SEEDS_FILENAME)) {
  console.log(`File ${SEEDS_FILENAME} already exists`);
  process.exit();
}

const stream = fs.createWriteStream(SEEDS_FILENAME);
const count = parseInt(process.argv[2]) || SEEDS_COUNT_DEFAULT;

for (let i = 0; i < count; i++) {
  const wallet = Wallet.createRandom();
  const { mnemonic } = wallet;

  stream.write(mnemonic.phrase + "\n");
}

console.log(`Generated ${count} seeds to ${SEEDS_FILENAME}`);
stream.close();
