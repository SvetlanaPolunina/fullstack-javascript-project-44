import { runQuiz, getRandomNum } from '../index.js';

const gameConditionsMessage = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const getQuestion = (firstNum, secondNum) => `${firstNum} ${secondNum}`;

const getCorrectAnswer = (firstNum, secondNum) => getGcd(firstNum, secondNum).toString();

const getRound = () => {
  const maxNum = 30;

  const firstNum = getRandomNum(maxNum);
  const secondNum = getRandomNum(maxNum);

  const question = getQuestion(firstNum, secondNum);
  const correctAnswer = getCorrectAnswer(firstNum, secondNum);

  const round = { question, correctAnswer };

  return round;
};

const brainGsd = () => {
  runQuiz(getRound, gameConditionsMessage);
};

export default brainGsd;
