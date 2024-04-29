import { expect, testSuite } from "manten";
import { SEED } from "./fixtures";
import { getPrivateFromSeed } from "../blockchains/cosmos/seeds-to-privates";
import { getAddressFromSeed } from "../blockchains/cosmos/seeds-to-addresses";
import { getAddressFromPrivate } from "../blockchains/cosmos/privates-to-addresses";
import { CosmosChain } from "../types";

const DEFAULT_PRIVATE =
  "0xca1456d02c7d5a9a96ffcc63ee7c5ec47bd6ddcae63d6fcab4c0ade9f8873723";

export default testSuite(({ describe }) => {
  describe("Cosmos", async ({ describe }) => {
    describe("Agoric", async ({ test }) => {
      const address = "agoric1m4sdyqw5h5ezx00yazm0lyuy75gff5csnf2sug";
      const privateKey =
        "0xae6029d20af06ca046d89e3a00ab9d413484d1db205795b710582e54d0bc4d12";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.agoric }),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.agoric }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(privateKey, {
            cosmosChain: CosmosChain.agoric,
          }),
        ).toBe(address);
      });
    });

    describe("Akash", async ({ test }) => {
      const address = "akash15m8rufvz7dnw37zg35e5ssx9dde7v39ga0gme4";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.akash }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.akash }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.akash,
          }),
        ).toBe(address);
      });
    });

    describe("Axelar", async ({ test }) => {
      const address = "axelar15m8rufvz7dnw37zg35e5ssx9dde7v39g56n5tw";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.axelar }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.axelar }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.axelar,
          }),
        ).toBe(address);
      });
    });

    describe("Bostrom", async ({ test }) => {
      const address = "bostrom15m8rufvz7dnw37zg35e5ssx9dde7v39gn8307g";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.bostrom }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.bostrom }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.bostrom,
          }),
        ).toBe(address);
      });
    });

    describe("Celestia", async ({ test }) => {
      const address = "celestia15m8rufvz7dnw37zg35e5ssx9dde7v39gp75v6z";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.celestia }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.celestia }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.celestia,
          }),
        ).toBe(address);
      });
    });

    describe("Chihuahua", async ({ test }) => {
      const address = "chihuahua15m8rufvz7dnw37zg35e5ssx9dde7v39gnpgjpd";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, {
            cosmosChain: CosmosChain.chihuahua,
          }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, {
            cosmosChain: CosmosChain.chihuahua,
          }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.chihuahua,
          }),
        ).toBe(address);
      });
    });

    describe("Cosmos Hub", async ({ test }) => {
      const address = "cosmos15m8rufvz7dnw37zg35e5ssx9dde7v39gs59uq0";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.cosmos }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.cosmos }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.cosmos,
          }),
        ).toBe(address);
      });
    });

    describe("Cronos POS", async ({ test }) => {
      const address = "cro1479teyfhd06h49qjwaxurz2wqgt93xu32njt05";
      const privateKey =
        "0xabda42ca4909155ec916593cda5ad6cf8eadc3249cd4b03d3272030fe30647d5";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.cro }),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.cro }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(privateKey, {
            cosmosChain: CosmosChain.cro,
          }),
        ).toBe(address);
      });
    });

    describe("dYdX", async ({ test }) => {
      const address = "dydx15m8rufvz7dnw37zg35e5ssx9dde7v39gedtcqc";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.dydx }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.dydx }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.dydx,
          }),
        ).toBe(address);
      });
    });

    describe("Dymension", async ({ test }) => {
      const address = "dym1ayfj4ue883xg23dfhaplp6szawdwff0fjq9cd2";
      const privateKey =
        "0xa0c606ffe596a2e044692294d68075c8dfb4155d1a4b09ef3b38e175af10def6";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.dym }),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.dym }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(privateKey, {
            cosmosChain: CosmosChain.dym,
          }),
        ).toBe(address);
      });
    });

    describe("Evmos", async ({ test }) => {
      const address = "evmos1ayfj4ue883xg23dfhaplp6szawdwff0fzucsjv";
      const privateKey =
        "0xa0c606ffe596a2e044692294d68075c8dfb4155d1a4b09ef3b38e175af10def6";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.evmos }),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.evmos }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(privateKey, {
            cosmosChain: CosmosChain.evmos,
          }),
        ).toBe(address);
      });
    });

    describe("Gitopia", async ({ test }) => {
      const address = "gitopia15m8rufvz7dnw37zg35e5ssx9dde7v39gwvzt0v";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.gitopia }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.gitopia }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.gitopia,
          }),
        ).toBe(address);
      });
    });

    describe("Gravity Bridge", async ({ test }) => {
      const address = "gravity15m8rufvz7dnw37zg35e5ssx9dde7v39g5yhy98";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.gravity }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.gravity }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.gravity,
          }),
        ).toBe(address);
      });
    });

    describe("Injective", async ({ test }) => {
      const address = "inj1ayfj4ue883xg23dfhaplp6szawdwff0f25766u";
      const privateKey =
        "0xa0c606ffe596a2e044692294d68075c8dfb4155d1a4b09ef3b38e175af10def6";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.inj }),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.inj }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(privateKey, {
            cosmosChain: CosmosChain.inj,
          }),
        ).toBe(address);
      });
    });

    describe("IRISnet", async ({ test }) => {
      const address = "iaa15m8rufvz7dnw37zg35e5ssx9dde7v39g9k9dz7";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.iaa }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.iaa }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.iaa,
          }),
        ).toBe(address);
      });
    });

    describe("Juno", async ({ test }) => {
      const address = "juno15m8rufvz7dnw37zg35e5ssx9dde7v39gxxx88n";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.juno }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.juno }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.juno,
          }),
        ).toBe(address);
      });
    });

    describe("Kava", async ({ test }) => {
      const address = "kava1t583z3jlfwetzhnfy4cr8vhzxszq33srs36mag";
      const privateKey =
        "0x17368c0e34aa3540bb1abd9307b14e232941f306cfaad85fe8f13ecd3d5a2b0a";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.kava }),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.kava }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(privateKey, {
            cosmosChain: CosmosChain.kava,
          }),
        ).toBe(address);
      });
    });

    describe("KYVE", async ({ test }) => {
      const address = "kyve15m8rufvz7dnw37zg35e5ssx9dde7v39g86g2tt";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.kyve }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.kyve }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.kyve,
          }),
        ).toBe(address);
      });
    });

    describe("LikeCoin", async ({ test }) => {
      const address = "like15m8rufvz7dnw37zg35e5ssx9dde7v39grge7r5";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.like }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.like }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.like,
          }),
        ).toBe(address);
      });
    });

    describe("Mars", async ({ test }) => {
      const address = "mars15m8rufvz7dnw37zg35e5ssx9dde7v39gdfu945";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.mars }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.mars }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.mars,
          }),
        ).toBe(address);
      });
    });

    describe("Neutron", async ({ test }) => {
      const address = "neutron15m8rufvz7dnw37zg35e5ssx9dde7v39g5tv76g";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.neutron }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.neutron }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.neutron,
          }),
        ).toBe(address);
      });
    });

    describe("Noble", async ({ test }) => {
      const address = "noble15m8rufvz7dnw37zg35e5ssx9dde7v39gchs5cp";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.noble }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.noble }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.noble,
          }),
        ).toBe(address);
      });
    });

    describe("OmniFlix", async ({ test }) => {
      const address = "omniflix15m8rufvz7dnw37zg35e5ssx9dde7v39gd259h3";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.omniflix }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.omniflix }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.omniflix,
          }),
        ).toBe(address);
      });
    });

    describe("Osmo", async ({ test }) => {
      const address = "osmo15m8rufvz7dnw37zg35e5ssx9dde7v39gc0kvka";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.osmo }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.osmo }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.osmo,
          }),
        ).toBe(address);
      });
    });

    describe("Passage", async ({ test }) => {
      const address = "pasg15m8rufvz7dnw37zg35e5ssx9dde7v39gnvuxds";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.pasg }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.pasg }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.pasg,
          }),
        ).toBe(address);
      });
    });

    describe("Persistence", async ({ test }) => {
      const address = "persistence15m8rufvz7dnw37zg35e5ssx9dde7v39g7cr0wt";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, {
            cosmosChain: CosmosChain.persistence,
          }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, {
            cosmosChain: CosmosChain.persistence,
          }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.persistence,
          }),
        ).toBe(address);
      });
    });

    describe("Quasar", async ({ test }) => {
      const address = "quasar15m8rufvz7dnw37zg35e5ssx9dde7v39g7hlpd2";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.quasar }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.quasar }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.quasar,
          }),
        ).toBe(address);
      });
    });

    describe("Quicksilver", async ({ test }) => {
      const address = "quick15m8rufvz7dnw37zg35e5ssx9dde7v39gms4wea";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.quick }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.quick }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.quick,
          }),
        ).toBe(address);
      });
    });

    describe("Regen", async ({ test }) => {
      const address = "regen15m8rufvz7dnw37zg35e5ssx9dde7v39g0kwqkt";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.regen }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.regen }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.regen,
          }),
        ).toBe(address);
      });
    });

    describe("Saga", async ({ test }) => {
      const address = "saga15m8rufvz7dnw37zg35e5ssx9dde7v39gw8uw8f";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.saga }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.saga }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.saga,
          }),
        ).toBe(address);
      });
    });

    describe("Secret Network", async ({ test }) => {
      const address = "secret1vy4xdh3ytrduq67reqfh3wgm7pz7swmq0pkus4";
      const privateKey =
        "0x5f9017cf5cdd4db2f8acc67b9aea5def121e2872f581d2640bff062ae437d5e0";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.secret }),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.secret }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(privateKey, {
            cosmosChain: CosmosChain.secret,
          }),
        ).toBe(address);
      });
    });

    describe("SEDA", async ({ test }) => {
      const address = "seda15m8rufvz7dnw37zg35e5ssx9dde7v39gx6fyrw";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.seda }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.seda }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.seda,
          }),
        ).toBe(address);
      });
    });

    describe("Sentinel", async ({ test }) => {
      const address = "sent15m8rufvz7dnw37zg35e5ssx9dde7v39gt0n9yq";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.sent }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.sent }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.sent,
          }),
        ).toBe(address);
      });
    });

    describe("Shentu", async ({ test }) => {
      const address = "shentu15m8rufvz7dnw37zg35e5ssx9dde7v39gcqp9jj";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.shentu }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.shentu }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.shentu,
          }),
        ).toBe(address);
      });
    });

    describe("Sifchain", async ({ test }) => {
      const address = "sif15m8rufvz7dnw37zg35e5ssx9dde7v39g4f220y";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.sif }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.sif }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.sif,
          }),
        ).toBe(address);
      });
    });

    describe("Sommelier", async ({ test }) => {
      const address = "somm15m8rufvz7dnw37zg35e5ssx9dde7v39gug2s39";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.somm }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.somm }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.somm,
          }),
        ).toBe(address);
      });
    });

    describe("Stargaze", async ({ test }) => {
      const address = "stars15m8rufvz7dnw37zg35e5ssx9dde7v39gygjpt7";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.stars }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.stars }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.stars,
          }),
        ).toBe(address);
      });
    });

    describe("Stride", async ({ test }) => {
      const address = "stride15m8rufvz7dnw37zg35e5ssx9dde7v39gnl9q5r";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.stride }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.stride }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.stride,
          }),
        ).toBe(address);
      });
    });

    describe("Terra", async ({ test }) => {
      const address = "terra1dfcq02enm0r9aw9enqukp6s0f0kt78tk0uzur0";
      const privateKey =
        "0xb5c7090f6f6ac60d3279167c8ee775f27181c3ef3f2c0fa74ecba237b5184287";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.terra }),
        ).toBe(privateKey);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.terra }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(privateKey, {
            cosmosChain: CosmosChain.terra,
          }),
        ).toBe(address);
      });
    });

    describe("UX", async ({ test }) => {
      const address = "umee15m8rufvz7dnw37zg35e5ssx9dde7v39gzzcrya";

      test("private from seed", async () => {
        expect(
          await getPrivateFromSeed(SEED, { cosmosChain: CosmosChain.umee }),
        ).toBe(DEFAULT_PRIVATE);
      });

      test("address from seed", async () => {
        expect(
          await getAddressFromSeed(SEED, { cosmosChain: CosmosChain.umee }),
        ).toBe(address);
      });

      test("address from private", async () => {
        expect(
          await getAddressFromPrivate(DEFAULT_PRIVATE, {
            cosmosChain: CosmosChain.umee,
          }),
        ).toBe(address);
      });
    });
  });
});
