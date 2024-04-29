import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/starknet/argent/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/starknet/argent/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/starknet/argent/privates-to-addresses";
import { ArgentVersion } from "../types";

export default testSuite(({ describe }) => {
  const privateKey =
    "0x02d0bd388645f96f3e89850758af9893e41cc2f3a62e0763634cb729b3575fe6";

  describe("StarkNet Argent", async ({ describe }) => {
    describe("Actual", async ({ test }) => {
      const address =
        "0x037AF8f33F7Da2b5c709BF6Cac32EC9CB601BE6A081108F6e5CF65f047D480f6";

      test("private from seed", async () => {
        expect(
          getPrivateFromSeed(SEED),
        ).toBe(privateKey);
      });

      // test("address from seed", async () => {
      //   expect(
      //     getAddressFromSeed(SEED, { argentVersion: ArgentVersion.actual }),
      //   ).toBe(address);
      // });

      // test("address from private", async () => {
      //   expect(
      //     getAddressFromPrivate(privateKey, {
      //       argentVersion: ArgentVersion.actual,
      //     }),
      //   ).toBe(address);
      // });
    });

    describe("Old 1", async ({ test }) => {
      const address =
        "0x00b994b9c07b3a2aa047d72eb5026b11c6c4ed278299060b7f6ae33437183ada";

      test("private from seed", async () => {
        expect(
          getPrivateFromSeed(SEED),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          getAddressFromSeed(SEED, { argentVersion: ArgentVersion.old1 }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          getAddressFromPrivate(privateKey, {
            argentVersion: ArgentVersion.old1,
          }),
        ).toBe(address);
      });
    });

    describe("Old 2", async ({ test }) => {
      const address =
        "0x019ae2d99c5027c306400066012548466499aba6e4bd291bd43e79cab8be35d0";

      test("private from seed", async () => {
        expect(
          getPrivateFromSeed(SEED),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          getAddressFromSeed(SEED, { argentVersion: ArgentVersion.old2 }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          getAddressFromPrivate(privateKey, {
            argentVersion: ArgentVersion.old2,
          }),
        ).toBe(address);
      });
    });
  });
});
