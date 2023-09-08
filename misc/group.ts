import fs from "fs";
import { GROUP_SIZE_DEFAULT } from "../constants";
import { loadFromFile } from "../utils";

const fileName = process.argv[2];
const groupSize = parseInt(process.argv[2]) || GROUP_SIZE_DEFAULT;

if (!fs.existsSync(fileName)) {
  console.log(`File ${fileName} not found`);
  process.exit();
}

if (!fileName.endsWith(".txt")) {
  console.log("File must be a .txt file");
  process.exit();
}

const resultFileName = fileName.replace(/\.txt$/, ".grouped.txt");

const lines = await loadFromFile(fileName);
const stream = fs.createWriteStream(resultFileName);

let group = 1;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (i % groupSize === 0) {
    stream.write(`\nGroup: ${group}\n`);
    group++;
  }

  stream.write(`${line}\n`);
}

console.log(`Grouped results written to ${resultFileName}`);
stream.close();
