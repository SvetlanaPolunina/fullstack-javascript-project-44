import readlineSyng from 'readline-sync';
import askUserName from './cli.js';

const getRandomNum = (max) => Math.floor(Math.random() * max);

const runQuiz = (getQuiz, gameConditionsMessage) => {
  const roundCount = 3;

  const name = askUserName();

  console.log(gameConditionsMessage);

  for (let i = 0; i < roundCount; i += 1) {
    const { question, correctAnswer } = getQuiz();

    console.log(`Question: ${question}`);
    const answer = readlineSyng.question('Your answer: ').trim();

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default { runQuiz, getRandomNum };
