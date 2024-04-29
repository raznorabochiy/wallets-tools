import { mnemonicToSeedSync } from "@scure/bip39";
import { derivePath } from "@demox-labs/aleo-hd-key";
import { PrivateKey } from "@aleohq/sdk";
import { ALEO_DERIVATION_PATH } from "../../constants";

export function seedPhraseToPrivateKey(seedPhrase: string) {
  const masterSeedBytes = mnemonicToSeedSync(seedPhrase);
  const masterSeedHex = Buffer.from(masterSeedBytes).toString("hex");
  const { seed } = derivePath(ALEO_DERIVATION_PATH, masterSeedHex);

  return PrivateKey.from_seed_unchecked(seed).to_string();
}
