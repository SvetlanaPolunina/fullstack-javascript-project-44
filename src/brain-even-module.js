import readlineSyng from 'readline-sync';
import { askUserName } from './cli.js';

const brainEven = () => {
  const roundCount = 3;
  const quiz = [
    { question: 1, correctAnswer: 'no' },
    { question: 2, correctAnswer: 'yes' },
    { question: 3, correctAnswer: 'no' },
  ];
  const name = askUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < roundCount; i += 1) {
    const { question, correctAnswer } = quiz.at(i);

    console.log(`Question: ${question}`);
    const answer = readlineSyng.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default brainEven;
