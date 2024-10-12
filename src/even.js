import readlineSync from 'readline-sync';
import greeting from './cli.js';

const even = () => {
  const timesRepeat = 3;
  const maxNumber = 100;
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  // eslint-disable-next-line no-unused-vars, arrow-body-style
  const getCorrectAnswer = (num) => {
    return (num % 2 === 0) ? 'yes' : 'no';
  };
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < timesRepeat; i += 1) {
    const randomNum = getRandomInt(maxNumber);
    const correctAnswer = getCorrectAnswer(randomNum);

    console.log('Question: ', randomNum);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default even;
