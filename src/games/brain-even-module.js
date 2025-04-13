import { getQuiz, runQuiz } from '../index.js';

const brainEven = () => {
  const getRound = () => {
    const maxNum = 100;
    const getRandomNum = (max) => Math.floor(Math.random() * max);
    const isEven = (num) => num % 2 === 0;
    const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

    const num = getRandomNum(maxNum);
    const question = num.toString();
    const correctAnswer = getCorrectAnswer(num);
    const round = { question, correctAnswer };

    return round;
  };

  const gameConditionsMessage = 'Answer "yes" if the number is even, otherwise answer "no"';

  const quiz = getQuiz(getRound);
  runQuiz(quiz, gameConditionsMessage);
};

export default brainEven;
