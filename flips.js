import { coinFlips} from "./modules/coin.mjs";
import { coinFlip} from "./modules/coin.mjs";
import { countFlips} from "./modules/coin.mjs";
import minimist from 'minimist'


const args = minimist(process.argv.slice(2))
args['number']
const number = args.number

var apple = [];
apple = coinFlips(number);
console.log(apple);
console.log(countFlips(apple));