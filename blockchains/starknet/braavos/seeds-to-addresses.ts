import { getBraavosAddress, getPrivateKeyFromSeed } from "./utils";
import { Options } from "../../../types";
import { seedsToAddressesBuilder } from "../../../utils";

export function getAddressFromSeed(seed: string, options?: Options): string {
  const privateKey = getPrivateKeyFromSeed(seed);
  const address = getBraavosAddress(privateKey, options?.braavosVersion!);
  return address;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
