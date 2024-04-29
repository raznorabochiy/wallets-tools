import { stringToPath } from "@cosmjs/crypto";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Options } from "../../types";
import { seedsToAddressesBuilder } from "../../utils";
import { getAddressFromSeed as getAddressFromSeedEVM } from "../evm/seeds-to-addresses";
import {
  cosmosAddressFromEvmAddress,
  getPathByPrefix,
  isEVMCompatible,
} from "./utils";

export async function getAddressFromSeed(
  seed: string,
  options?: Options,
) {
  const prefix = options?.cosmosChain!;

  if (isEVMCompatible(prefix)) {
    const evmAddress = getAddressFromSeedEVM(seed);
    const address = cosmosAddressFromEvmAddress(evmAddress, prefix);
    return address;
  }

  const hdPaths = [stringToPath(getPathByPrefix(prefix))];
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(seed, {
    prefix,
    hdPaths,
  });
  const [first] = await wallet.getAccounts();
  const { address } = first;
  return address;
}

export default seedsToAddressesBuilder(getAddressFromSeed);
