// questionPaperGenerator.js

const questionStore = require('./questionStore');

function generateQuestionPaper(totalMarks, difficultyDistribution) {
  const questionPaper = [];

  for (const difficulty in difficultyDistribution) {
    const percentage = difficultyDistribution[difficulty];
    const difficultyMarks = (percentage / 100) * totalMarks;

    const questions = questionStore.filter((question) => question.difficulty === difficulty);

    if (questions.length < difficultyMarks) {
      throw new Error(`Error generating question paper: Not enough questions for difficulty ${difficulty}`);
    }

    const selectedQuestions = questions.slice(0, difficultyMarks);
    questionPaper.push(...selectedQuestions);
  }

  return questionPaper;
}

module.exports = {
  generateQuestionPaper,
};
