import readlineSync from 'readline-sync';
import greeting from './cli.js';

const even = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export default even;
