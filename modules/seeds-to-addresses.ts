import { Blockchain, Options, StarknetWallet } from "../types";
import aleo from "../blockchains/aleo/seeds-to-addresses";
import aptos from "../blockchains/aptos/seeds-to-addresses";
import cosmos from "../blockchains/cosmos/seeds-to-addresses";
import evm from "../blockchains/evm/seeds-to-addresses";
import solana from "../blockchains/solana/seeds-to-addresses";
import starknetArgent from "../blockchains/starknet/argent/seeds-to-addresses";
import starknetBraavos from "../blockchains/starknet/braavos/seeds-to-addresses";
import sui from "../blockchains/sui/seeds-to-addresses";

async function seedsToAddresses(blockchain: Blockchain, options?: Options) {
  switch (blockchain) {
    case Blockchain.aleo:
      await aleo();
      break;
    case Blockchain.aptos:
      await aptos();
      break;
    case Blockchain.cosmos:
      await cosmos(options);
      break;
    case Blockchain.evm:
      await evm();
      break;
    case Blockchain.solana:
      await solana();
      break;
    case Blockchain.starknet:
      const starknetWallet = options?.starknetWallet;
      if (starknetWallet === StarknetWallet.argent) {
        await starknetArgent(options);
      } else if (starknetWallet === StarknetWallet.braavos) {
        await starknetBraavos(options);
      }
      break;
    case Blockchain.sui:
      await sui();
      break;
    default:
      break;
  }
}

export default seedsToAddresses;
