import { getPrivateKeyFromSeed } from "./utils";
import { seedsToPrivatesBuilder } from "../../../utils";

export function getPrivateFromSeed(seed: string): string {
  const privateKey = getPrivateKeyFromSeed(seed);
  return privateKey;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
