import { CosmosChain } from "./types";

export const SEEDS_COUNT_DEFAULT = 10;
export const SEEDS_FILENAME = "seeds.txt";
export const PRIVATES_FILENAME = "privates.txt";
export const ADDRESSES_FILENAME = "addresses.txt";
export const APTOS_DERIVATION_PATH = "m/44'/637'/0'/0'/0'";
export const STARKNET_DERIVATION_PATH = "m/44'/9004'/0'/0/0";
export const ALEO_DERIVATION_PATH = "m/44'/0'/0'/0'";
export const SOLANA_DERIVATION_PATH = "m/44'/501'/0'/0'"; // LEDGER m/44'/501'/0'
export const ARGENT_X_PROXY_CLASS_HASH =
  "0x25ec026985a3bf9d0cc1fe17326b245dfdc3ff89b8fde106542a3ea56c5a918";
export const ARGENT_X_ACCOUNT_CLASS_HASH_V0 =
  "0x033434ad846cdd5f23eb73ff09fe6fddd568284a0fb7d1be20ee482f044dabe2";
export const ARGENT_X_ACCOUNT_CLASS_HASH_V1_0 =
  "0x1a736d6ed154502257f02b1ccdf4d9d1089f80811cd6acad48e6b6a9d1f2003";
export const BRAAVOS_PROXY_CLASS_HASH =
  "0x03131fa018d520a037686ce3efddeab8f28895662f019ca3ca18a626650f7d1e";
export const BRAAVOS_INITIAL_CLASS_HASH =
  "0x5aa23d5bb71ddaa783da7ea79d405315bafa7cf0387a74f4593578c3e9e6570";
export const DEFAULT_COSMOS_DERIVATION_PATH = "m/44'/118'/0'/0/0";
export const CUSTOM_COSMOS_DERIVATION_PATHS = {
  [CosmosChain.agoric]: "m/44'/564'/0'/0/0",
  [CosmosChain.cro]: "m/44'/394'/0'/0/0",
  [CosmosChain.kava]: "m/44'/459'/0'/0/0",
  [CosmosChain.secret]: "m/44'/529'/0'/0/0",
  [CosmosChain.terra]: "m/44'/330'/0'/0/0",
};
