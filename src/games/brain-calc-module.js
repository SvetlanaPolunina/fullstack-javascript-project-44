import runQuiz from '../index.js';

const brainCalc = () => {
  const getBrainCalcQuiz = (roundCount, maxNum, operators) => {
    const quiz = [];

    return quiz;
  };

  const roundCount = 3;
  const maxNum = 100;
  const operators = ['+', '-', '*'];
  const gameConditionsMessage = 'What is the result of the expression?';

  const brainCalcQuiz = getBrainCalcQuiz(roundCount, maxNum, operators);
  runQuiz(brainCalcQuiz, gameConditionsMessage);
};

export default brainCalc;
