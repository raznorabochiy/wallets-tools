import { AptosAccount } from "aptos";
import { APTOS_DERIVATION_PATH } from "../../constants";
import { seedsToPrivatesBuilder } from "../../utils";

export function getPrivateFromSeed(seed: string): string {
  const account = AptosAccount.fromDerivePath(APTOS_DERIVATION_PATH, seed);
  const { privateKeyHex } = account.toPrivateKeyObject();
  return privateKeyHex;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
