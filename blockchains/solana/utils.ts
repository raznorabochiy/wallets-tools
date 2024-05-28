import { mnemonicToSeedSync } from "@scure/bip39";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { HDKey } from "ed25519-keygen/hdkey";
import { SOLANA_DERIVATION_PATH } from "../../constants";

export function seedPhraseToPrivateKey(seedPhrase: string) {
  const masterSeed = mnemonicToSeedSync(seedPhrase);
  const hd = HDKey.fromMasterSeed(masterSeed);
  const keypair = Keypair.fromSeed(
    hd.derive(SOLANA_DERIVATION_PATH).privateKey,
  );

  return bs58.encode(keypair.secretKey);
}
