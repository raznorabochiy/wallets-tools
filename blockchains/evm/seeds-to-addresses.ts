import { Wallet } from "ethers";
import { seedsToAddressesBuilder } from "../../utils";

export function getAddressFromSeed(seed: string): string {
  const wallet = Wallet.fromPhrase(seed);
  const { address } = wallet;
  return address;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
