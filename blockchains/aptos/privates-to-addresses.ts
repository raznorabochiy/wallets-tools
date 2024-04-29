import { AptosAccount, HexString } from "aptos";
import { privatesToAddressesBuilder } from "../../utils";

export function getAddressFromPrivate(key: string): string {
  const account = new AptosAccount(new HexString(key).toUint8Array());
  const { address } = account.toPrivateKeyObject();
  return address!;
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
