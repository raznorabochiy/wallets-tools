export enum TopLevel {
  generateSeeds,
  seedsToPrivates,
  seedsToAddresses,
  privatesToAddresses,
}

export enum Blockchain {
  aleo,
  aptos,
  cosmos,
  evm,
  solana,
  starknet,
  sui,
}

export enum StarknetWallet {
  argent,
  braavos,
}

export enum ArgentVersion {
  actual,
  old1,
  old2,
}

export enum BraavosVersion {
  actual,
  old,
}

export enum CosmosChain {
  agoric = "agoric",
  akash = "akash",
  axelar = "axelar",
  bostrom = "bostrom",
  celestia = "celestia",
  chihuahua = "chihuahua",
  cosmos = "cosmos",
  cro = "cro",
  dydx = "dydx",
  dym = "dym",
  evmos = "evmos",
  gitopia = "gitopia",
  gravity = "gravity",
  inj = "inj",
  iaa = "iaa",
  juno = "juno",
  kava = "kava",
  kyve = "kyve",
  like = "like",
  mars = "mars",
  neutron = "neutron",
  noble = "noble",
  omniflix = "omniflix",
  osmo = "osmo",
  pasg = "pasg",
  persistence = "persistence",
  quasar = "quasar",
  quick = "quick",
  regen = "regen",
  saga = "saga",
  secret = "secret",
  seda = "seda",
  sent = "sent",
  shentu = "shentu",
  sif = "sif",
  somm = "somm",
  stars = "stars",
  stride = "stride",
  terra = "terra",
  umee = "umee",
}

export type Options = {
  cosmosChain?: CosmosChain;
  starknetWallet?: StarknetWallet;
  argentVersion?: ArgentVersion;
  braavosVersion?: BraavosVersion;
};
