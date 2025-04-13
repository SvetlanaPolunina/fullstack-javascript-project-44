import readlineSyng from 'readline-sync';
import { askUserName } from '../cli.js';

const brainEven = () => {
  const getBrainEvenQuiz = (roundCount, maxNum) => {
    const getRandomNum = (max) => Math.floor(Math.random() * max);
    const isEven = (num) => num % 2 === 0;
    const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

    const quiz = [];
    for (let i = 0; i < roundCount; i += 1) {
      const question = getRandomNum(maxNum);
      const correctAnswer = getCorrectAnswer(question);
      const round = { question, correctAnswer };
      quiz.push(round);
    }

    return quiz;
  };

  const runQuiz = (quiz, name, gameConditionsMessage) => {
    const roundCount = quiz.length;
    console.log(gameConditionsMessage);

    for (let i = 0; i < roundCount; i += 1) {
      const { question, correctAnswer } = quiz.at(i);

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

  const roundCount = 3;
  const maxNum = 100;
  const gameConditionsMessage = 'Answer "yes" if the number is even, otherwise answer "no"';

  const brainEvenQuiz = getBrainEvenQuiz(roundCount, maxNum);
  const name = askUserName();
  runQuiz(brainEvenQuiz, name, gameConditionsMessage);
};

export default brainEven;
