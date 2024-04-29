import bs58 from "bs58";
import { Keypair } from "@solana/web3.js";
import { seedsToAddressesBuilder } from "../../utils";
import { seedPhraseToPrivateKey } from "./utils";

export function getAddressFromSeed(seed: string): string {
  const privateKey = seedPhraseToPrivateKey(seed);
  const keypair = Keypair.fromSecretKey(bs58.decode(privateKey));
  const address = keypair.publicKey.toString();
  return address;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
