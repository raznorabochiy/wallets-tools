import bs58 from "bs58";
import { Keypair } from "@solana/web3.js";
import { privatesToAddressesBuilder } from "../../utils";

export function getAddressFromPrivate(key: string): string {
  const keypair = Keypair.fromSecretKey(bs58.decode(key));
  const address = keypair.publicKey.toString();
  return address;
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
