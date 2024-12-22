import { Wallet } from "fuels";
import { privatesToAddressesBuilder } from "../../utils";

export function getAddressFromPrivate(key: string): string {
  const wallet = Wallet.fromPrivateKey(key);

  const { address } = wallet;
  return address.toString();
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
