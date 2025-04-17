import { runQuiz, getRandomNum } from '../index.js';

const gameConditionsMessage = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getQuestion = (num) => num.toString();

const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const getRound = () => {
  const maxNum = 100;

  const num = getRandomNum(maxNum);

  const question = getQuestion(num);
  const correctAnswer = getCorrectAnswer(num);

  const round = { question, correctAnswer };

  return round;
};

const brainEven = () => runQuiz(getRound, gameConditionsMessage);

export default brainEven;
