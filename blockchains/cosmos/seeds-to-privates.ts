import { stringToPath } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Options } from "../../types";
import { seedsToPrivatesBuilder } from "../../utils";
import { getPrivateFromSeed as getPrivateFromSeedEVM } from "../evm/seeds-to-privates";
import { getPathByPrefix, isEVMCompatible } from "./utils";

export async function getPrivateFromSeed(
  seed: string,
  options?: Options,
) {
  const prefix = options?.cosmosChain!;

  if (isEVMCompatible(prefix)) {
    const privateKey = getPrivateFromSeedEVM(seed);
    return privateKey;
  }

  const hdPaths = [stringToPath(getPathByPrefix(prefix))];
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(seed, {
    prefix,
    hdPaths,
  });

  // @ts-ignore
  const [accountWithPrivkeys] = await wallet.getAccountsWithPrivkeys();
  const { privkey } = accountWithPrivkeys;
  const privateKey = "0x" + toHex(privkey);
  return privateKey;
}

export default seedsToPrivatesBuilder(getPrivateFromSeed);
