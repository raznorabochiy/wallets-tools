import { seedsToPrivatesBuilder } from "../../utils";
import { seedPhraseToPrivateKey } from "./utils";

export function getPrivateFromSeed(seed: string): string {
  const privateKey = seedPhraseToPrivateKey(seed);
  return privateKey;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
