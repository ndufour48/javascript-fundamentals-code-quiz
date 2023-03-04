

// 0. OVERALL STRUCTURE: 
// In index.html file, create array with 5 question objects. 
// Store questions as an array of objects in a separate file named questions.js
// Create code that will ask user questions, one after another. 
// Multiple-Choice: Set up 3 choices for each and set a variable for correct answer.
// Check user's answer choice against correct answer.
// Provide user with an alert stating if it was correct or incorrect.
// Keep track of the user score/progress.
// When questions end or timer reaches 0, game ends
// When game ends, add a form where user can save initials and store/display final score
// Add buttons to go back/refresh and a button to clear high scores.

// KEY STEPS:
// 1. When user clicks the start button, then a timer starts and I am presented with a question

    // KEY VARIABLES: Declare variables 
    var startBtn = document.getElementById("startBtn");
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.querySelector("#quizContainer");
    var quizQuestions = document.getElementById("quizQuestions");
    var answerChoices = document.getElementById("answerChoices");
    // var answerChoiceA = document.getElementById("A");
    // var answerChoiceB = document.getElementById("B");
    // var answerChoiceC = document.getElementById("B");
    // var correctChoice = document.getElementById("correctChoice");
    // var scoreDisplay = document.getElementById("userScore");
    // var finalTimeDisplay = document.getElementById("quizTimeFinal");
    // var quizResults = document.getElementById("#quizResults");
    // var submit = document.getElementById("#submit");

// QUESTIONS ARRAY:
// Store questions and choices as an array of objects in a separate file named questions.js

// let questionOnePage = document.getElementById('question-1');

var questionsArray = [
    {
        question: "Question 1: ?",
        imageSrc: "",
        answerChoice: ["", "", "", ""],
        answer: 1
    }, 
    {
        question: "Question 2: ?",
        imageSrc: "",
        answerChoice: ["", "", "", ""],
        answer: 3
    },
    {
        question: "Question 3: ?",
        imageSrc: "",
        answerChoice: ["", "", "", ""],
        answer: 3
    }, 
    {
        question: "Question 4: ?",
        imageSrc: "",
        answerChoice: ["", "", "", ""],
        answer: 1
    },
    {
        question: "Question 5: ?",
        answerChoice: ["", "", "", ""],
        answer: 0
    }  
];

// SCORE: Set score = 0 at the start of the game and set time-related valiables.
    var score = 0;
    var secondsRemaining = 75;
    var countdownTimer = document.getElementById("countdownTimer");
    var i = 0;
    // var nextQuestions = 0;

// START EVENT LISTENER: Add event listeners for when user clicks Start button to start countdown timer and quiz. 

startBtn.addEventListener("click", function (){

// COUNTDOWN TIMER FUNCTION: Use function to set countdown timer, interval and clear interval
function setCountdownTimer() {
    var secondsRemaining = 75;

    var countdownTimerInterval = setInterval(function() {
      countdownTimer.textContent = secondsRemaining + " seconds remaining";
      secondsRemaining--;

      if (secondsRemaining === 0) {
        countdownTimer.textContent = "";
        clearInterval(countdownTimerInterval);
      }
    }, 1000);
  }
    setCountdownTimer();

// START CODE QUIZ FUNCTION: Add start quiz function //
function startCodeQuiz() {
        homeContainer.style.display ="none";
        quizContainer.style.display = "block";
    }
    // setQuizQuestions();
    setCountdownTimer();
    startCodeQuiz();
    },

// QUESTIONS FUNCTION: Set questions display function //
// function setQuizQuestions() {
//     for (let i = 0; i < answerChoices.length; i++) {
//         questionHeading.textContent = answerChoices.question; 
//         answerChoiceA.textContent = answerChoices[i].choices[0]; 
//         answerChoiceB.textContent = answerChoices[i].choices[1]; 
//         answerChoiceC.textContent = answerChoices[i].choices[2]; 
//     }
// }

// 2. When user answers a question: then user is presented with another question
// start quiz questions and display multiple-choice answers for user to choose from -> store answers
// Add a function to direct the user to the next question using event delegation (event.target.value) and if else statements
// add event listener to call this function to go to next question

// Function to continue to the next question
// function nextQuestions(event) {
//     if (event.target.value === quizQuestions[nextQuestions].correctChoice) {
//         score++;
//         displayText.innerHTML = "Nailed it! Nice work!"
//     } else {
//         displayText.innerHTML = "Incorrect! Better luck next time!"
//         secondsRemaining -= 3;
//         countdownTimer.innerHTML= "Time: "+ secondsRemaining;
//     }
//     if (nextQuestions < quizQuestions.length -1) {
//         nextQuestions++;
//     } else {
//         clearInterval(countdownTimerInterval);
//     }
//     setQuizQuestions();

// 3. When user answers a question correctly, increase the score
// Use if, else statements
// If userChoice is correct, increase score (with score ++) 
// If userChoice is incorrect, subtract seconds from timer (using -= )
// Clear elements and update score count

// 4. When all questions are answered or the timer reaches 0, then the game is over
// use event delegation and a for loop with condition for all questions answered
// for (i = 0; i < max question count, i++) { 
// add condition of if timer reaches 0 to end game
// render score during quiz         

// 5. When the game is over, then user can save initials and score
// Direct user to Results and Submit page
// Apply "Setters and Getters" methods
// Set arrays for user input
// Create a function that stores user's input (initials) in localStorage 
// "Setters": Store array (localStorage.setItem) and Use JSON method (JON.string) to convert object into string from the user input array

// Direct user to Highscores page
// Create a Highscores function and set arrays that store user input in localStorage
// "Getters": Store array (localStorage.getItem) and use JSON method (JON.parse) to convert string into object for high scores list data 
// Then use a for loop of these arrays
// Create a high scores list element and append it
// Add an event listener for the submit button which submits and adds to score.
// Display or alert total at the end (alert("You got " + score + "/" + questions.length);

// Store in localStorage and re-render
    // Add buttons and functions to go back/refresh and a function and button to clear high scores.
        // Use function with location.reload() method to refresh page
        function refreshQuiz(){
            window.location.reload();
            console.log(refreshQuiz);
            },

        // Use function with location.reload() and localStorage.clear() methods to clear high scores
        function clearQuiz(){
            window.location.reload();
            localStorage.clear();
            console.log(clearQuiz);
            })