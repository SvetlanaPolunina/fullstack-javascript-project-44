import runQuiz from '../index.js';

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

  const roundCount = 3;
  const maxNum = 100;
  const gameConditionsMessage = 'Answer "yes" if the number is even, otherwise answer "no"';

  const brainEvenQuiz = getBrainEvenQuiz(roundCount, maxNum);
  runQuiz(brainEvenQuiz, gameConditionsMessage);
};

export default brainEven;
