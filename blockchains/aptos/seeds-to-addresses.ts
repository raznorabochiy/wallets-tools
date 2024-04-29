import { AptosAccount } from "aptos";
import { APTOS_DERIVATION_PATH } from "../../constants";
import { seedsToAddressesBuilder } from "../../utils";

export function getAddressFromSeed(seed: string): string {
  const account = AptosAccount.fromDerivePath(APTOS_DERIVATION_PATH, seed);
  const { address } = account.toPrivateKeyObject();
  return address!;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
