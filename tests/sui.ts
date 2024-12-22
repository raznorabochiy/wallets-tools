import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/sui/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/sui/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/sui/privates-to-addresses";

export default testSuite(({ describe }) => {
  const privateKey =
    "suiprivkey1qpgq76v67ry5zfqf6xhwhe8vamu8pn0v8yz6paw7a00mulmzx2hdgv37wzs";
  const address =
    "0xb55f987c7edddbeecf567d0eebb4a092ab5db4b8b61dccdb0a9e728aa76d41f1";

  describe("Sui", async ({ test }) => {
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
