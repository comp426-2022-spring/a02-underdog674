import { coinFlips} from "./modules/coin.mjs";
import { coinFlip} from "./modules/coin.mjs";
import { countFlips} from "./modules/coin.mjs";
import minimist from 'minimist'


const args = minimist(process.argv.slice(2))
args['number']
const number = args.number

var apple = [];
if(typeof number === 'number' ){
apple = coinFlips(number);
}
else{
    apple = coinFlips(1);
}
console.log(apple);
console.log(countFlips(apple));