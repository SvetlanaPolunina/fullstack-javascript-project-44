import { runQuiz, getRandomNum } from '../index.js';

const gameConditionsMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestion = (num) => num.toString();

const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const getRound = () => {
  const maxNum = 100;

  const num = getRandomNum(maxNum);

  const question = getQuestion(num);
  const correctAnswer = getCorrectAnswer(num);

  const round = { question, correctAnswer };

  return round;
};

const brainPrime = () => runQuiz(getRound, gameConditionsMessage);

export default brainPrime;
