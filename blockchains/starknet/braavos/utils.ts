import { CallData, ec, hash } from "starknet";
import { mnemonicToSeedSync } from "@scure/bip39";
import { HDKey } from "@scure/bip32";
import {
  BRAAVOS_INITIAL_CLASS_HASH,
  BRAAVOS_PROXY_CLASS_HASH,
  STARKNET_DERIVATION_PATH,
} from "../../../constants";
import { BraavosVersion } from "../../../types";
import { zeroPad } from "../../../utils";

export function getPrivateKeyFromSeed(seed: string): string {
  const seedBytes = mnemonicToSeedSync(seed);
  const hdKey = HDKey.fromMasterSeed(seedBytes);
  const hdKeyDerived = hdKey.derive(STARKNET_DERIVATION_PATH);

  const result = "0x" + ec.starkCurve.grindKey(hdKeyDerived.privateKey!);

  return zeroPad(result);
}

export function getBraavosAddress(
  key: string,
  braavosVersion: BraavosVersion,
): string {
  if (braavosVersion === BraavosVersion.old) {
    const { getSelectorFromName, calculateContractAddressFromHash } = hash;
    const starkKey = ec.starkCurve.getStarkKey(key);

    const initializer = CallData.compile({ public_key: starkKey });

    const constructorCallData = CallData.compile({
      implementation_address: BRAAVOS_INITIAL_CLASS_HASH,
      initializer_selector: getSelectorFromName("initializer"),
      calldata: [...initializer],
    });

    const result = calculateContractAddressFromHash(
      starkKey,
      BRAAVOS_PROXY_CLASS_HASH,
      constructorCallData,
      0,
    );

    return zeroPad(result);
  }

  return "пока не поддерживается";
}
