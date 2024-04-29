import { getArgentAddress } from "./utils";
import { Options } from "../../../types";
import { privatesToAddressesBuilder } from "../../../utils";

export function getAddressFromPrivate(key: string, options?: Options): string {
  const address = getArgentAddress(key, options?.argentVersion!);
  return address;
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
