import runQuiz from '../index.js';

const brainCalc = () => {
  const getBrainCalcQuiz = (roundCount, maxNum, operations) => {
    const getRound = (maxNum, operations) => {
      const getRandomNum = (max) => Math.floor(Math.random() * max);
      const getRandomOperation = (operations) => {
        const randomIndex = Math.floor(Math.random() * operations.length);
        return operations[randomIndex];
      };
      const firstNum = getRandomNum(maxNum);
      const secondNum = getRandomNum(maxNum);
      const operation = getRandomOperation(operations);

      const question = `${firstNum} ${operation} ${secondNum}`;
      console.log(question);
      let expression;
      switch (operation) {
        case '+':
          expression = firstNum + secondNum;
          break;
        case '-':
          expression = firstNum - secondNum;
          break;
        case '*':
          expression = firstNum * secondNum;
          break;
        default:
          throw new Error(`Hasn't got ${operation} operation`);
      }
      const correctAnswer = expression.toString(10);
      const round = { question, correctAnswer };

      return round;
    };

    const quiz = [];
    for (let i = 0; i < roundCount; i += 1) {
      const round = getRound(maxNum, operations);
      quiz.push(round);
    }

    return quiz;
  };

  const gameParam = {
    roundCount: 3,
    maxNum: 100,
    operations: ['+', '-', '*'],
    conditionsMessage: 'What is the result of the expression?',
  };

  const quiz = getBrainCalcQuiz(gameParam.roundCount, gameParam.maxNum, gameParam.operations);
  runQuiz(quiz, gameParam.conditionsMessage);
};

export default brainCalc;
