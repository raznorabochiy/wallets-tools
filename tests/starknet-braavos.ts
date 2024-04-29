import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/starknet/braavos/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/starknet/braavos/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/starknet/braavos/privates-to-addresses";
import { BraavosVersion } from "../types";

export default testSuite(({ describe }) => {
  describe("StarkNet Braavos", async ({ describe }) => {
    const privateKey =
      "0x01498cc3becc0917b2a18f2c639e169d35bae6d5e351a00028db8d02a07b7c30";

    describe("Actual", async ({ test }) => {
      const address =
        "0x04bea96a7c319799077395fd151361d20a89ae03eb096c585927235430018806";

      test("private from seed", async () => {
        expect(
          getPrivateFromSeed(SEED),
        ).toBe(privateKey);
      });

      // test("address from seed", async () => {
      //   expect(
      //     getAddressFromSeed(SEED, { braavosVersion: BraavosVersion.actual }),
      //   ).toBe(address);
      // });

      // test("address from private", async () => {
      //   expect(
      //     getAddressFromPrivate(privateKey, {
      //       braavosVersion: BraavosVersion.actual,
      //     }),
      //   ).toBe(address);
      // });
    });

    describe("Old", async ({ test }) => {
      const address =
        "0x01416afadc0d21fd548e1a706ba6bf07c7e81f62e179d7afd31996546475fd49";

      test("private from seed", async () => {
        expect(
          getPrivateFromSeed(SEED),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          getAddressFromSeed(SEED, { braavosVersion: BraavosVersion.old }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          getAddressFromPrivate(privateKey, {
            braavosVersion: BraavosVersion.old,
          }),
        ).toBe(address);
      });
    });
  });
});
