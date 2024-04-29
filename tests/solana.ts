import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/solana/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/solana/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/solana/privates-to-addresses";

export default testSuite(({ describe }) => {
  const privateKey =
    "59koyjQT8F1NUnu9qkBrPL7bwFuqzQNtxLowRK2NSTBwSpHhaz4GZCZRAkep8BeyshCADRrqvRJspPVzndFBdY8e";
  const address = "4La3YVybT6v2C89si2Jtys3SKLnkUCV8a4xDhFc9s7gz";

  describe("Solana", async ({ test }) => {
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
