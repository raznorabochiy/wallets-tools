import fs from "fs";
import shuffle from "lodash/shuffle.js";
import { loadFromFile } from "../utils";

const fileName = process.argv[2];

if (!fs.existsSync(fileName)) {
  console.log(`File ${fileName} not found`);
  process.exit();
}

if (!fileName.endsWith(".txt")) {
  console.log("File must be a .txt file");
  process.exit();
}

const resultFileName = fileName.replace(/\.txt$/, ".shuffled.txt");

const lines = await loadFromFile(fileName);
const stream = fs.createWriteStream(resultFileName);

const shuffledLines = shuffle(lines);

for (const line of shuffledLines) {
  stream.write(`${line}\n`);
}

console.log(`Shuffled results written to ${resultFileName}`);
stream.close();
