import { seedsToPrivatesBuilder } from "../../../utils";
import { getPrivateKeyFromSeed } from "./utils";

export function getPrivateFromSeed(seed: string): string {
  const privateKey = getPrivateKeyFromSeed(seed);
  return privateKey;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
