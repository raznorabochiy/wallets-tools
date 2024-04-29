import { getArgentAddress, getPrivateKeyFromSeed } from "./utils";
import { Options } from "../../../types";
import { seedsToAddressesBuilder } from "../../../utils";

export function getAddressFromSeed(seed: string, options?: Options): string {
  const privateKey = getPrivateKeyFromSeed(seed);
  const address = getArgentAddress(privateKey, options?.argentVersion!);
  return address;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
