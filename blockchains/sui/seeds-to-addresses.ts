import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { seedsToAddressesBuilder } from "../../utils";

export function getAddressFromSeed(seed: string): string {
  const keypair = Ed25519Keypair.deriveKeypair(seed);
  const address = keypair.toSuiAddress();
  return address;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
