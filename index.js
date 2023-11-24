const { generateQuestionPaper } = require('./questionPaperGenerator');

// Function to print questions
function printQuestions(questions, title) {
  console.log(`\n${title}:`);
  questions.forEach((question, index) => {
    console.log(`Question ${index + 1}:`);
    console.log(`  Question: ${question.question}`);
    console.log(`  Topic: ${question.topic}`);
    console.log(`  Difficulty: ${question.difficulty}`);
    console.log(`  Marks: ${question.marks}`);
    console.log('----------------------');
  });
}

// Print all questions
const questionStore = require('./questionStore');
printQuestions(questionStore, 'All Questions');

// Example: Generate a question paper with 100 marks (20% Easy, 50% Medium, 30% Hard)
const totalMarks = 100;
const difficultyDistribution = {
  Easy: 20,
  Medium: 50,
  Hard: 30,
};

try {
  const generatedPaper = generateQuestionPaper(totalMarks, difficultyDistribution);
  printQuestions(generatedPaper, 'Generated Question Paper');
} catch (error) {
  console.error(error.message);
}



