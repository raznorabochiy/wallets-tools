import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { fromB64 } from "@mysten/sui.js/utils";
import { seedsToPrivatesBuilder } from "../../utils";

export function getPrivateFromSeed(seed: string): string {
  const keypair = Ed25519Keypair.deriveKeypair(seed);
  const { privateKey } = keypair.export();
  const key = "0x" + Buffer.from(fromB64(privateKey)).toString("hex");
  return key;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
