import { flipACoin} from "./modules/coin.mjs";
import { coinFlips} from "./modules/coin.mjs";
import { coinFlip} from "./modules/coin.mjs";

import minimist from 'minimist'


const args = minimist(process.argv.slice(2))

const call = args.string
call['string']

console.log(flipACoin(call));
