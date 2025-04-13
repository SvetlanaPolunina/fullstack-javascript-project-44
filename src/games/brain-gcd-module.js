import runQuiz from '../index.js';

const brainGsd = () => {
  const getRound = () => {
    const maxNum = 100;
    const getRandomNum = (max) => Math.floor(Math.random() * max);
    const getGcd = (num1, num2) => {
      if (num2 === 0) {
        return num1;
      }
      return getGcd(num2, num1 % num2);
    };

    const firstNum = getRandomNum(maxNum);
    const secondNum = getRandomNum(maxNum);
    const gcd = getGcd(firstNum, secondNum);

    const question = `${firstNum} ${secondNum}`;
    const correctAnswer = gcd.toString();

    const round = { question, correctAnswer };

    return round;
  };

  const getQuiz = () => {
    const roundCount = 3;

    const quiz = [];
    for (let i = 0; i < roundCount; i += 1) {
      const round = getRound();
      quiz.push(round);
    }

    return quiz;
  };

  const quiz = getQuiz();
  const gameConditionsMessage = 'Find the greatest common divisor of given numbers.';

  runQuiz(quiz, gameConditionsMessage);
};

export default brainGsd;
