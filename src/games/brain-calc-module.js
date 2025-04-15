import { runQuiz, getRandomNum } from '../index.js';

const gameConditionsMessage = 'What is the result of the expression?';

const getRandomItem = (coll) => {
  const randomIndex = Math.floor(Math.random() * coll.length);
  return coll[randomIndex];
};

const getQuestion = (firstNum, secondNum, operator) => `${firstNum} ${operator} ${secondNum}`;

const getCorrectAnswer = (firstNum, secondNum, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      throw new Error(`Hasn't got ${operator} operator`);
  }

  return result.toString();
};

const getRound = () => {
  const maxNum = 20;
  const operators = ['+', '-', '*'];

  const firstNum = getRandomNum(maxNum);
  const secondNum = getRandomNum(maxNum);
  const operator = getRandomItem(operators);

  const question = getQuestion(firstNum, secondNum, operator);
  const correctAnswer = getCorrectAnswer(firstNum, secondNum, operator);

  const round = { question, correctAnswer };

  return round;
};

const brainCalc = () => {
  runQuiz(getRound, gameConditionsMessage);
};

export default brainCalc;
