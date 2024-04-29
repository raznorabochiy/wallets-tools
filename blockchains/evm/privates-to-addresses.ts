import { Wallet } from "ethers";
import { privatesToAddressesBuilder } from "../../utils";

export function getAddressFromPrivate(key: string): string {
  const wallet = new Wallet(key);
  const { address } = wallet;
  return address;
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
