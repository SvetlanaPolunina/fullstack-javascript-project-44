/* eslint 'import/prefer-default-export': 'off' */

import readlineSyng from 'readline-sync';

const askUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSyng.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export { askUserName };
