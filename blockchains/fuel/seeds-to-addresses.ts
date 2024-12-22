import { Wallet } from "fuels";
import { seedsToAddressesBuilder } from "../../utils";

export function getAddressFromSeed(seed: string): string {
  const wallet = Wallet.fromMnemonic(seed);

  const { address } = wallet;
  return address.toString();
}

export default seedsToAddressesBuilder(getAddressFromSeed);
