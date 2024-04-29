import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/evm/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/evm/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/evm/privates-to-addresses";

export default testSuite(({ describe }) => {
  const privateKey =
    "0xa0c606ffe596a2e044692294d68075c8dfb4155d1a4b09ef3b38e175af10def6";
  const address = "0xe9132af3273C4c8545A9bf43F0eA02EB9AE4A5e9";

  describe("EVM", async ({ test }) => {
    test("private from seed", async () => {
      expect(getPrivateFromSeed(SEED)).toBe(privateKey);
    });

    test("address from seed", async () => {
      expect(getAddressFromSeed(SEED)).toBe(address);
    });

    test("address from private", async () => {
      expect(getAddressFromPrivate(privateKey)).toBe(address);
    });
  });
});
