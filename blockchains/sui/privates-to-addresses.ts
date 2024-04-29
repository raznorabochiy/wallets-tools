import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { privatesToAddressesBuilder } from "../../utils";

export function getAddressFromPrivate(key: string): string {
  const keyWithout0x = key.slice(2);
  const secretKey = Uint8Array.from(Buffer.from(keyWithout0x, "hex"));
  const keypair = Ed25519Keypair.fromSecretKey(secretKey);
  const address = keypair.toSuiAddress();
  return address;
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
