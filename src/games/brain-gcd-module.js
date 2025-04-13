import runQuiz from '../index.js';

const brainGsd = () => {
  const getRaund = () => {

  };

  const getQuiz = (gameCondition) => {
    const roundCount = 3;

    const quiz = [];
    for (let i = 0; i < roundCount; i += 1) {
      const round = getRaund();
      quiz.push(round);
    }

    return quiz;
  };

  // quiz = getQuiz();
  const quiz = [];
  const gameConditionsMessage = 'Find the greatest common divisor of given numbers.';

  runQuiz(quiz, gameConditionsMessage);
};

export default brainGsd;
