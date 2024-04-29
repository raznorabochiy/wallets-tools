import { HDNodeWallet, Mnemonic } from "ethers";
import { CallData, ec, hash } from "starknet";
import {
  ARGENT_X_ACCOUNT_CLASS_HASH_V0,
  ARGENT_X_ACCOUNT_CLASS_HASH_V1_0,
  ARGENT_X_PROXY_CLASS_HASH,
  STARKNET_DERIVATION_PATH,
} from "../../../constants";
import { ArgentVersion } from "../../../types";
import { zeroPad } from "../../../utils";

export function getPrivateKeyFromSeed(seed: string) {
  const mnemonic = Mnemonic.fromPhrase(seed);
  const signer = HDNodeWallet.fromMnemonic(mnemonic);
  const masterNode = HDNodeWallet.fromSeed(signer.privateKey);
  const childNode = masterNode.derivePath(STARKNET_DERIVATION_PATH);

  const result = "0x" + ec.starkCurve.grindKey(childNode.privateKey).toString();

  return zeroPad(result);
}

export function getArgentAddress(key: string, argentVersion: ArgentVersion) {
  const { getSelectorFromName, calculateContractAddressFromHash } = hash;
  const starkKey = ec.starkCurve.getStarkKey(key);

  if (argentVersion === ArgentVersion.old2) {
    const constructorCallData = CallData.compile({
      implementation: ARGENT_X_ACCOUNT_CLASS_HASH_V0,
      selector: getSelectorFromName("initialize"),
      calldata: CallData.compile({ signer: starkKey, guardian: "0" }),
    });

    const result = calculateContractAddressFromHash(
      starkKey,
      ARGENT_X_PROXY_CLASS_HASH,
      constructorCallData,
      0,
    );

    return zeroPad(result);
  } else if (argentVersion === ArgentVersion.old1) {
    const constructorCallData = CallData.compile({
      owner: starkKey,
      guardian: 0n,
    });

    const result = calculateContractAddressFromHash(
      starkKey,
      ARGENT_X_ACCOUNT_CLASS_HASH_V1_0,
      constructorCallData,
      0,
    );

    return zeroPad(result);
  }

  return "пока не поддерживается";
}
