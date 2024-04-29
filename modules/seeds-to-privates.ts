import { Blockchain, Options, StarknetWallet } from "../types";
import aleo from "../blockchains/aleo/seeds-to-privates";
import aptos from "../blockchains/aptos/seeds-to-privates";
import cosmos from "../blockchains/cosmos/seeds-to-privates";
import evm from "../blockchains/evm/seeds-to-privates";
import solana from "../blockchains/solana/seeds-to-privates";
import starknetArgent from "../blockchains/starknet/argent/seeds-to-privates";
import starknetBraavos from "../blockchains/starknet/braavos/seeds-to-privates";
import sui from "../blockchains/sui/seeds-to-privates";

async function seedsToPrivates(blockchain: Blockchain, options?: Options) {
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
        await starknetArgent();
      } else if (starknetWallet === StarknetWallet.braavos) {
        await starknetBraavos();
      }
      break;
    case Blockchain.sui:
      await sui();
      break;
    default:
      break;
  }
}

export default seedsToPrivates;
