import bech32 from "bech32";
import { fromHex } from "@cosmjs/encoding";
import {
  CUSTOM_COSMOS_DERIVATION_PATHS,
  DEFAULT_COSMOS_DERIVATION_PATH,
} from "../../constants";
import { CosmosChain } from "../../types";

export function getPathByPrefix(prefix: CosmosChain): string {
  return CUSTOM_COSMOS_DERIVATION_PATHS[prefix] ??
    DEFAULT_COSMOS_DERIVATION_PATH;
}

export function isEVMCompatible(prefix: CosmosChain): boolean {
  return [CosmosChain.dym, CosmosChain.evmos, CosmosChain.inj].includes(prefix);
}

export function cosmosAddressFromEvmAddress(
  evmAddress: string,
  prefix: CosmosChain,
): string {
  const evmAddressWithout0x = evmAddress.slice(2);
  const evmAddressBytes = fromHex(evmAddressWithout0x);
  const address = bech32.encode(prefix, bech32.toWords(evmAddressBytes));
  return address;
}
