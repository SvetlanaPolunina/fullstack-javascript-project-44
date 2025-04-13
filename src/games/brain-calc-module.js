import { getQuiz, runQuiz } from '../index.js';

const brainCalc = () => {
  const getRound = () => {
    const maxNum = 100;
    const operations = ['+', '-', '*'];
    const getRandomNum = (max) => Math.floor(Math.random() * max);
    const getRandomItem = (coll) => {
      const randomIndex = Math.floor(Math.random() * coll.length);
      return coll[randomIndex];
    };

    const firstNum = getRandomNum(maxNum);
    const secondNum = getRandomNum(maxNum);
    const operation = getRandomItem(operations);

    const question = `${firstNum} ${operation} ${secondNum}`;
    let result;
    switch (operation) {
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
        throw new Error(`Hasn't got ${operation} operation`);
    }

    const correctAnswer = result.toString();
    const round = { question, correctAnswer };

    return round;
  };

  const gameConditionsMessage = 'What is the result of the expression?';
  const quiz = getQuiz(getRound);
  runQuiz(quiz, gameConditionsMessage);
};

export default brainCalc;
