import { fromHex } from "@cosmjs/encoding";
import { DirectSecp256k1Wallet } from "@cosmjs/proto-signing";
import { getAddressFromPrivate as getAddressFromPrivateEVM } from "../evm/privates-to-addresses";
import { Options } from "../../types";
import { privatesToAddressesBuilder } from "../../utils";
import { cosmosAddressFromEvmAddress, isEVMCompatible } from "./utils";

export async function getAddressFromPrivate(
  key: string,
  options?: Options,
) {
  const prefix = options?.cosmosChain!;

  if (isEVMCompatible(prefix)) {
    const evmAddress = getAddressFromPrivateEVM(key);
    const address = cosmosAddressFromEvmAddress(evmAddress, prefix);
    return address;
  }

  const keyWithout0x = key.slice(2);
  const wallet = await DirectSecp256k1Wallet.fromKey(
    fromHex(keyWithout0x),
    prefix,
  );
  const [first] = await wallet.getAccounts();
  const { address } = first;
  return address;
}

export default privatesToAddressesBuilder(getAddressFromPrivate);
