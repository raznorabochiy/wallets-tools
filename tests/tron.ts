import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/tron/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/tron/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/tron/privates-to-addresses";

export default testSuite(({ describe }) => {
  const privateKey =
    "0xb090339fcd503ce538d47a1c3347632ce7f5ea66f6a1bc5cdaf84d1654ed7b31";
  const address = "TDcKzGpZXSi9vWqveWEoGGCcjteHQ2ZE6Y";

  describe("Tron", async ({ test }) => {
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
