import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/aleo/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/aleo/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/aleo/privates-to-addresses";

export default testSuite(({ describe }) => {
  const privateKey =
    "APrivateKey1zkp5NUJnifPjMbnKC9V7FNmeB22SrTgA5EYABATQ8c6FS53";
  const address =
    "aleo1xurs00ed7py73vm3mex6k2w8d9wptf82zekaq0caxy76pmclh5pqszp9fq";

  describe("Aleo", async ({ test }) => {
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
