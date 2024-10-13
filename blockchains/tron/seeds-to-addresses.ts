import { TronWeb } from "tronweb";
import { seedsToAddressesBuilder } from "../../utils";

export function getAddressFromSeed(seed: string): string {
  const wallet = TronWeb.fromMnemonic(seed);
  const { address } = wallet;
  return address;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
