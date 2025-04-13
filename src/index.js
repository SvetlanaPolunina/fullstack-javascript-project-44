import readlineSyng from 'readline-sync';

const runQuiz = (quiz, name, gameConditionsMessage) => {
  const roundCount = quiz.length;
  console.log(gameConditionsMessage);

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

export default runQuiz;
