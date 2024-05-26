import fs from "fs/promises";
import fsCallback from "fs";
import {
  ADDRESSES_FILENAME,
  PRIVATES_FILENAME,
  SEEDS_FILENAME,
} from "./constants";
import { Options } from "./types";

async function loadFromFile(fileName: string) {
  if (!fsCallback.existsSync(fileName)) {
    console.log(`Файл ${fileName} не найден`);
    process.exit();
  }

  const file = await fs.readFile(fileName, { encoding: "utf8" });

  return file.split("\n").filter(Boolean).map((item) => item.trim());
}

export function zeroPad(value: string) {
  return "0x" + BigInt(value).toString(16).padStart(64, "0");
}

export function privatesToAddressesBuilder(
  func: (key: string, options?: Options) => string | Promise<string>,
) {
  return async function (opt?: Options) {
    const keys = await loadFromFile(PRIVATES_FILENAME);
    const stream = fsCallback.createWriteStream(ADDRESSES_FILENAME);

    for (const key of keys) {
      const address = await func(key, opt);
      stream.write(`${address}\n`);
    }

    console.log(`Адреса записаны в ${ADDRESSES_FILENAME}`);
    stream.close();
  };
}

export function seedsToAddressesBuilder(
  func: (seed: string, options?: Options) => string | Promise<string>,
) {
  return async function (opt?: Options) {
    const seeds = await loadFromFile(SEEDS_FILENAME);
    const stream = fsCallback.createWriteStream(ADDRESSES_FILENAME);

    for (const seed of seeds) {
      try {
        const address = await func(seed, opt);
        stream.write(`${address}\n`);
      } catch (e) {
        stream.write(`${e.shortMessage ?? e.message}\n`);
      }
    }

    console.log(`Адреса записаны в ${ADDRESSES_FILENAME}`);
    stream.close();
  };
}

export function seedsToPrivatesBuilder(
  func: (seed: string, options?: Options) => string | Promise<string>,
) {
  return async function (opt?: Options) {
    const seeds = await loadFromFile(SEEDS_FILENAME);
    const stream = fsCallback.createWriteStream(PRIVATES_FILENAME);

    for (const seed of seeds) {
      try {
        const privateKey = await func(seed, opt);
        stream.write(`${privateKey}\n`);
      } catch (e) {
        stream.write(`${e.shortMessage ?? e.message}\n`);
      }
    }

    console.log(`Приватники записаны в ${PRIVATES_FILENAME}`);
    stream.close();
  };
}
