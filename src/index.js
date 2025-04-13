import readlineSyng from 'readline-sync';
import askUserName from './cli.js';

const getQuiz = (getRound) => {
  const roundCount = 3;

  const quiz = [];
  for (let i = 0; i < roundCount; i += 1) {
    const round = getRound();
    quiz.push(round);
  }

  return quiz;
};

const runQuiz = (quiz, gameConditionsMessage) => {
  const name = askUserName();

  console.log(gameConditionsMessage);

  const roundCount = quiz.length;
  for (let i = 0; i < roundCount; i += 1) {
    const { question, correctAnswer } = quiz.at(i);

    console.log(`Question: ${question}`);
    const answer = readlineSyng.question('Your answer: ').trim();

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
  return 0;
};

export { getQuiz, runQuiz };
