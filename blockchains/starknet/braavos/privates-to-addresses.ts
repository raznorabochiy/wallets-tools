import { getBraavosAddress } from "./utils";
import { Options } from "../../../types";
import { privatesToAddressesBuilder } from "../../../utils";

export function getAddressFromPrivate(key: string, options?: Options): string {
  const address = getBraavosAddress(key, options?.braavosVersion!);
  return address;
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
