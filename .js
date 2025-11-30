// Simple Quiz Game - Lab Assignment 4
// Made by: Gurveen Kaur

// Step 1: Array of questions and answers
const quizQuestions = [
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "CSS is used for?", answer: "styling" },
    { question: "Which language runs in the browser?", answer: "javascript" },
    { question: "What symbol is used for comments in JS?", answer: "//" },
    { question: "Which tag is used for the largest heading in HTML?", answer: "<h1>" }
];

// Step 2: Function to run the quiz
function runQuiz() {
    let score = 0; // Step 3: Start score with 0

    // Step 4: Loop through all questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // Step 5: Ask the user the question
        let userAnswer = prompt(quizQuestions[i].question);

        // If user presses cancel
        if (userAnswer === null) {
            alert("Quiz stopped.");
            return;
        }

        // Step 6: Clean the user input
        userAnswer = userAnswer.toLowerCase().trim();

        // Step 7: Check answer
        if (userAnswer === quizQuestions[i].answer) {
            score++; // increase score
            alert("Correct! 👍");
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // Step 9: Final score display
    alert("Quiz Complete!\nYour Score: " + score + " / " + quizQuestions.length);
}

// Step 10: Run quiz in console
runQuiz();