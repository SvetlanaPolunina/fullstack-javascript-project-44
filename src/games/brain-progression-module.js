import { runQuiz, getRandomNum } from '../index.js';

const gameConditionsMessage = 'What number is missing in the progression?';

const getQuestion = () => '';

const getCorrectAnswer = () => '';

const getRound = () => {
  const maxNum = 10;

  const question = getQuestion();
  const correctAnswer = getCorrectAnswer();

  const round = { question, correctAnswer };

  return round;
};

const brainProgression = () => {
  runQuiz(getRound, gameConditionsMessage);
};

export default brainProgression;
