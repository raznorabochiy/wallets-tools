import { Account } from "@aleohq/sdk";
import { privatesToAddressesBuilder } from "../../utils";

export function getAddressFromPrivate(key: string): string {
  const wallet = new Account({ privateKey: key });
  const address = wallet.address().to_string();
  return address;
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
