import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/aptos/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/aptos/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/aptos/privates-to-addresses";

export default testSuite(({ describe }) => {
  const privateKey =
    "0x12778a0829f3e2fc5906ac5c55b2d39b572a42db9dc0fa0d137b71bafcaa5b67";
  const address =
    "0xf7e1eafd30c8644a17e3082b567caa04e36fab44a29c29e624bfc5ff7e652091";

  describe("Aptos", async ({ test }) => {
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
