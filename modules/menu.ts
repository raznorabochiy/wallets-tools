import select, { Separator } from "@inquirer/select";
import {
  ArgentVersion,
  Blockchain,
  BraavosVersion,
  CosmosChain,
  StarknetWallet,
  TopLevel,
} from "../types";

export async function getTopLevel() {
  return select({
    message: "Действие:",
    choices: [
      {
        name: "1) Сгенерировать новые сид-фразы",
        value: TopLevel.generateSeeds,
      },
      {
        name: "2) Вычислить приватники из сид-фраз",
        value: TopLevel.seedsToPrivates,
      },
      {
        name: "3) Вычислить адреса из сид-фраз",
        value: TopLevel.seedsToAddresses,
      },
      {
        name: "4) Вычислить адреса из приватников",
        value: TopLevel.privatesToAddresses,
      },
    ],
  });
}

export async function getBlockchain() {
  return select({
    message: "Выберите блокчейн:",
    choices: [
      {
        name: "1) Aleo",
        value: Blockchain.aleo,
      },
      {
        name: "2) Aptos",
        value: Blockchain.aptos,
      },
      {
        name: "3) Cosmos",
        value: Blockchain.cosmos,
      },
      {
        name: "4) EVM",
        value: Blockchain.evm,
      },
      {
        name: "5) Sui",
        value: Blockchain.sui,
      },
      {
        name: "6) Solana",
        value: Blockchain.solana,
      },
      {
        name: "7) StarkNet",
        value: Blockchain.starknet,
      },
    ],
  });
}

export async function getStarkNetWallet() {
  return select({
    message: "Выберите тип кошелька StarkNet:",
    choices: [
      {
        name: "1) ArgentX",
        value: StarknetWallet.argent,
      },
      {
        name: "2) Braavos",
        value: StarknetWallet.braavos,
      },
    ],
  });
}

export async function getArgentVersion() {
  return select({
    message: "Выберите версию кошелька ArgentX:",
    choices: [
      {
        name: "1) Актуальная",
        value: ArgentVersion.actual,
        disabled: true,
      },
      {
        name: "2) Старая",
        value: ArgentVersion.old1,
      },
      {
        name: "3) Очень старая",
        value: ArgentVersion.old2,
      },
    ],
  });
}

export async function getBraavosVersion() {
  return select({
    message: "Выберите версию кошелька Braavos:",
    choices: [
      {
        name: "1) Актуальная",
        value: BraavosVersion.actual,
        disabled: true,
      },
      {
        name: "2) Старая",
        value: BraavosVersion.old,
      },
    ],
  });
}

export async function getCosmosChain() {
  return select({
    message: "Выберите тип cosmos-сети:",
    choices: [
      {
        name: "1) Agoric",
        value: CosmosChain.agoric,
      },
      {
        name: "2) Akash",
        value: CosmosChain.akash,
      },
      {
        name: "3) Axelar",
        value: CosmosChain.axelar,
      },
      {
        name: "4) Bostrom",
        value: CosmosChain.bostrom,
      },
      {
        name: "5) Celestia",
        value: CosmosChain.celestia,
      },
      {
        name: "6) Chihuahua",
        value: CosmosChain.chihuahua,
      },
      {
        name: "7) Cosmos Hub",
        value: CosmosChain.cosmos,
      },
      {
        name: "8) Cronos POS",
        value: CosmosChain.cro,
      },
      {
        name: "9) dYdX",
        value: CosmosChain.dydx,
      },
      {
        name: "10) Dymension",
        value: CosmosChain.dym,
      },
      {
        name: "11) Evmos",
        value: CosmosChain.evmos,
      },
      {
        name: "12) Gitopia",
        value: CosmosChain.gitopia,
      },
      {
        name: "13) Gravity Bridge",
        value: CosmosChain.gravity,
      },
      {
        name: "14) Injective",
        value: CosmosChain.inj,
      },
      {
        name: "15) IRISnet",
        value: CosmosChain.iaa,
      },
      {
        name: "16) Juno",
        value: CosmosChain.juno,
      },
      {
        name: "17) Kava",
        value: CosmosChain.kava,
      },
      {
        name: "18) KYVE",
        value: CosmosChain.kyve,
      },
      {
        name: "19) LikeCoin",
        value: CosmosChain.like,
      },
      {
        name: "20) Mars Hub",
        value: CosmosChain.mars,
      },
      {
        name: "21) Neutron",
        value: CosmosChain.neutron,
      },
      {
        name: "22) Noble",
        value: CosmosChain.noble,
      },
      {
        name: "23) OmniFlix",
        value: CosmosChain.omniflix,
      },
      {
        name: "24) Osmosis",
        value: CosmosChain.osmo,
      },
      {
        name: "25) Passage",
        value: CosmosChain.pasg,
      },
      {
        name: "26) Persistence",
        value: CosmosChain.persistence,
      },
      {
        name: "27) Quasar",
        value: CosmosChain.quasar,
      },
      {
        name: "28) Quicksilver",
        value: CosmosChain.quick,
      },
      {
        name: "29) Regen",
        value: CosmosChain.regen,
      },
      {
        name: "30) Saga",
        value: CosmosChain.saga,
      },
      {
        name: "31) Secret Network",
        value: CosmosChain.secret,
      },
      {
        name: "32) SEDA",
        value: CosmosChain.seda,
      },
      {
        name: "33) Sentinel",
        value: CosmosChain.sent,
      },
      {
        name: "34) Shentu",
        value: CosmosChain.shentu,
      },
      {
        name: "35) Sifchain",
        value: CosmosChain.sif,
      },
      {
        name: "36) Sommelier",
        value: CosmosChain.somm,
      },
      {
        name: "37) Stargaze",
        value: CosmosChain.stars,
      },
      {
        name: "38) Stride",
        value: CosmosChain.stride,
      },
      {
        name: "39) Terra",
        value: CosmosChain.terra,
      },
      {
        name: "40) Terra Classic",
        value: CosmosChain.terra,
      },
      {
        name: "41) UX",
        value: CosmosChain.umee,
      },
      new Separator(),
    ],
  });
}
