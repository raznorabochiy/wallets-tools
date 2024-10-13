import { TronWeb } from "tronweb";
import { seedsToPrivatesBuilder } from "../../utils";

export function getPrivateFromSeed(seed: string): string {
  const wallet = TronWeb.fromMnemonic(seed);
  const { privateKey } = wallet;
  return privateKey;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
