import { TronWeb } from "tronweb";
import { privatesToAddressesBuilder } from "../../utils";

export function getAddressFromPrivate(key: string): string {
  const keyWithout0x = key.startsWith("0x") ? key.slice(2) : key;

  const address = TronWeb.address.fromPrivateKey(keyWithout0x);
  return address ? address : "invalid private key";
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
