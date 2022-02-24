import { flipACoin} from "./modules/coin.mjs";
import { coinFlips} from "./modules/coin.mjs";
import { coinFlip} from "./modules/coin.mjs";

import minimist from 'minimist'


const args = minimist(process.argv.slice(2))
args['call']
const call = args.call

if(call === "tails" || call === "heads"){
console.log(flipACoin(call));
}
else{
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]")
}