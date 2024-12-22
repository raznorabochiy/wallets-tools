import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { seedsToPrivatesBuilder } from "../../utils";

export function getPrivateFromSeed(seed: string): string {
  const keypair = Ed25519Keypair.deriveKeypair(seed);
  const key = keypair.getSecretKey();
  return key;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
