import { runQuiz, getRandomNum } from '../index.js';

const gameConditionsMessage = 'What number is missing in the progression?';

const getProgression = (numCount, firstNum, step) => {
  const progression = [];
  let curNum;
  for (let i = 0; i < numCount; i += 1) {
    curNum = firstNum + step * i;
    progression.push(curNum);
  }

  return progression;
};

const getQuestion = (progression, selectedIndex) => {
  const quizProgression = [...progression];
  quizProgression[selectedIndex] = '..';

  return quizProgression.join(' ');
};

const getCorrectAnswer = (progression, selectedIndex) => progression.at(selectedIndex).toString();

const getRound = () => {
  const minCount = 5;
  const maxCount = 15;
  const maxNum = 10;
  const maxStep = 10;

  const numCount = getRandomNum(maxCount - minCount) + minCount;
  const firstNum = getRandomNum(maxNum);
  const step = getRandomNum(maxStep);

  const progression = getProgression(numCount, firstNum, step);
  const selectedIndex = getRandomNum(numCount);

  const question = getQuestion(progression, selectedIndex);
  const correctAnswer = getCorrectAnswer(progression, selectedIndex);

  const round = { question, correctAnswer };

  return round;
};

const brainProgression = () => {
  runQuiz(getRound, gameConditionsMessage);
};

export default brainProgression;
