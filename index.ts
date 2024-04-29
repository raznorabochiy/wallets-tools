import { input } from "@inquirer/prompts";
import { SEEDS_COUNT_DEFAULT } from "./constants";
import {
  getArgentVersion,
  getBlockchain,
  getBraavosVersion,
  getCosmosChain,
  getStarkNetWallet,
  getTopLevel,
} from "./modules/menu";
import privatesToAddresses from "./modules/privates-to-addresses";
import { generateSeeds } from "./modules/seeds";
import seedsToAddresses from "./modules/seeds-to-addresses";
import seedsToPrivates from "./modules/seeds-to-privates";
import { Blockchain, StarknetWallet, TopLevel } from "./types";

async function getInputsForPrivates() {
  const blockchain = await getBlockchain();

  const cosmosChain = (blockchain === Blockchain.cosmos)
    ? await getCosmosChain()
    : undefined;

  const starknetWallet = (blockchain === Blockchain.starknet)
    ? await getStarkNetWallet()
    : undefined;

  return {
    blockchain,
    cosmosChain,
    starknetWallet,
  };
}

async function getInputsForAddresses() {
  const result = await getInputsForPrivates();
  const argentVersion = (result.starknetWallet === StarknetWallet.argent)
    ? await getArgentVersion()
    : undefined;

  const braavosVersion = (result.starknetWallet === StarknetWallet.braavos)
    ? await getBraavosVersion()
    : undefined;

  return {
    ...result,
    argentVersion,
    braavosVersion,
  };
}

const topLevel = await getTopLevel();

switch (topLevel) {
  case TopLevel.generateSeeds:
    const seedsCountAnswer = await input({
      message: "Введите количество?",
      default: SEEDS_COUNT_DEFAULT.toString(),
    });
    const seedsCount = parseInt(seedsCountAnswer) || SEEDS_COUNT_DEFAULT;
    generateSeeds(seedsCount);
    break;
  case TopLevel.seedsToPrivates: {
    const { blockchain, ...options } = await getInputsForPrivates();
    await seedsToPrivates(blockchain, options);
    break;
  }
  case TopLevel.seedsToAddresses: {
    const { blockchain, ...options } = await getInputsForAddresses();
    await seedsToAddresses(blockchain, options);
    break;
  }
  case TopLevel.privatesToAddresses: {
    const { blockchain, ...options } = await getInputsForAddresses();
    await privatesToAddresses(blockchain, options);
    break;
  }
  default:
    break;
}
