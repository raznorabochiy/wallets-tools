import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/fuel/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/fuel/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/fuel/privates-to-addresses";

export default testSuite(({ describe }) => {
  const privateKey =
    "0xf6d4f5115e4471f4e7465e7ef01919491d852b705849056a35122ecf0dc7b144";
  const address =
    "0x757863F6b4C21aEB0e2Aa3efDaDF866471FF0EfEde4f25873E05680ad31Fe0d0";

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
