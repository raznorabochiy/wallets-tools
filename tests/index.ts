import { describe } from "manten";

await describe("All", async ({ runTestSuite }) => {
  await runTestSuite(import("./aleo"));
  await runTestSuite(import("./aptos"));
  await runTestSuite(import("./cosmos"));
  await runTestSuite(import("./evm"));
  await runTestSuite(import("./solana"));
  await runTestSuite(import("./starknet-argent"));
  await runTestSuite(import("./starknet-braavos"));
  await runTestSuite(import("./sui"));
});
