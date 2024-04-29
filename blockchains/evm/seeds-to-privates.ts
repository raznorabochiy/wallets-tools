import { Wallet } from "ethers";
import { seedsToPrivatesBuilder } from "../../utils";

export function getPrivateFromSeed(seed: string): string {
  const wallet = Wallet.fromPhrase(seed);
  const { privateKey } = wallet;
  return privateKey;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
