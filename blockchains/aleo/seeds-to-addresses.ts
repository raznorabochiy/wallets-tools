import { Account } from "@aleohq/sdk";
import { seedsToAddressesBuilder } from "../../utils";
import { seedPhraseToPrivateKey } from "./utils";

export function getAddressFromSeed(seed: string): string {
  const privateKey = seedPhraseToPrivateKey(seed);
  const wallet = new Account({ privateKey });
  const address = wallet.address().to_string();
  return address;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
