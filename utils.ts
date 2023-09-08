import fs from "fs/promises";
import fsCallback from "fs";

export async function loadFromFile(fileName: string) {
  if (!fsCallback.existsSync(fileName)) {
    console.log(`File ${fileName} not found`);
    process.exit();
  }

  const file = await fs.readFile(fileName, { encoding: "utf8" });

  return file.split("\n").filter(Boolean).map((item) => item.trim());
}

export function zeroPad(value: string) {
  return "0x" + BigInt(value).toString(16).padStart(64, "0");
}
