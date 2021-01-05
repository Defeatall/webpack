import { mul, count } from './test';
import '../css/index.css';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(mul(2, 3),count(3,2));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
