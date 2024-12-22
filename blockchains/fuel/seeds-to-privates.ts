import { Wallet } from "fuels";
import { seedsToPrivatesBuilder } from "../../utils";

export function getPrivateFromSeed(seed: string): string {
  const wallet = Wallet.fromMnemonic(seed);
  const { privateKey } = wallet;
  return privateKey;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
