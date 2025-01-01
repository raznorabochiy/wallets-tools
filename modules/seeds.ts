import fs from "fs";
import { Wallet } from "ethers";
import { SEEDS_FILENAME } from "../constants";

export function generateSeed() {
  const wallet = Wallet.createRandom();
  const { mnemonic } = wallet;

  return mnemonic!.phrase;
}

export function generateSeeds(count: number) {
  if (fs.existsSync(SEEDS_FILENAME)) {
    console.log(
      `Файл ${SEEDS_FILENAME} уже присутствует, переименуйте его или удалите`,
    );
    process.exit();
  }

  const stream = fs.createWriteStream(SEEDS_FILENAME);

  for (let i = 0; i < count; i++) {
    const phrase = generateSeed();
    stream.write(phrase + "\n");
  }

  console.log(`Сгенерированы ${count} сид-фразы в файл ${SEEDS_FILENAME}`);
  stream.close();
}
