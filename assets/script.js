// 1. When user clicks the start button, then a timer starts and I am presented with a question

    // KEY VARIABLES: Declare variables 
    var startBtn = document.getElementById("startBtn");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var choices = document.getElementById("choices");
    var answerChoice = document.getElementById("answerChoice");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");
    var scoreDisplay = document.getElementById("userScore");
    var finalTimeDisplay = document.getElementById("quizFinalTime");
    var quizResults = document.getElementById("#quizResults");
    var submit = document.getElementById("#submit");

// QUESTIONS ARRAY:

var questionsArray = [
{
    question: "Question 1: ?",
    imageSrc: "",
    answerChoice: ["a1", "b1", "c1", "d1"],
    correctAnswer: 1
}, 
{
    question: "Question 2: ?",
    imageSrc: "",
    answerChoice: ["a2", "b2", "c2", "d2"],
    correctAnswer: 3
},
{
    question: "Question 3: ?",
    imageSrc: "",
    answerChoice: ["a3", "b3", "c3", "d3"],
    correctAnswer: 0
}, 
{
    question: "Question 4: ?",
    imageSrc: "",
    answerChoice: ["a4", "b4", "c4", "d4"],
    correctAnswer: 2
},
{
    question: "Question 5: ?",
    answerChoice: ["a5", "b5", "c5", "d5"],
    correctAnswer: 1
}];


// SCORE: Set score = 0 at the start of the game and set time-related valiables.
var score = 0;
var secondsRemaining = 75;
var followingQuestions = 0;
var quizTotalTime;
let i = 0;

// // START EVENT LISTENER: Add event listeners for when user clicks Start button to start countdown timer and quiz. 

// startBtn.addEventListener("click", function () {

// COUNTDOWN TIMER FUNCTION: Use function to set countdown timer, interval and clear interval
function setCountdownTimer() {
    let countdown = setInterval(() => {
        secondsRemaining--;
        countdownTimer.innerHTML = `Timer: ${secondsRemaining}`;
    
        if (secondsRemaining === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}:

// START EVENT LISTENER: Add event listeners for when user clicks Start button to start countdown timer and quiz questions. 
startBtn.addEventListener('click', function() {
    homeContainer.style.display ="none";
    quizContainer.style.display = "block";
    setCountdownTimer();
    setQuizQuestions();
}),


// QUESTIONS FUNCTION: Set function to display questions
// Start display quiz questions and display multiple-choice answers for user to choose from 

function setQuizQuestions() {
    questionHeading.textContent = questionsArray[i].question;
    answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
    answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
    answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
    answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
    };

// 2. When user answers a question: then user is presented with another question
// Add event listener to call this function to go to next question
// Add a function to direct the user to the next question using event delegation (event.target.value) and if else statements
// Apply "Setters and Getters" methods

// 3. When user answers a question correctly, increase the score
// Alert/Display message to user stating if theyir answer is correct or incorrect
    // Store user answer choices. Clear elements and update score count.

    answerChoiceA.addEventListener('click', function(event) {
event.stopPropagation();
let correctChoice = "";
correctChoice = questionsArray[i].answer;
console.log(correctChoice);
if (i < questionsArray.length -1) {
    i++
    alert("Correct")
}
if (event.target.textContent === correctChoice) {  
    setQuizQuestions();
    score++;
} else {
    setQuizQuestions();
    secondsRemaining -= 5;
}
console.log(score);
    });
    
    answerChoiceB.addEventListener('click', function(event) {
        event.stopPropagation();
        let correctChoice = "";
        correctChoice = questionsArray[i].answerChoice;
        console.log(correctChoice);
        if (i < questionsArray.length -1) {
            i++
        }
        if (event.target.textContent === correctChoice) { 
            setQuizQuestions();
            score++;
            alert("Correct! Nailed it!");
        } else {
            setQuizQuestions();
            secondsRemaining -= 5;
            alert("Incorrect! Better luck in the next one!");
        }
        console.log(score);
    });
    
    answerChoiceC.addEventListener('click', function(event) {
        event.stopPropagation();
        let correctChoice = "";
        correctChoice = questionsArray[i].answerChoice;
        console.log(correctChoice);
        if (i < questionsArray.length -1) {
            i++
        }
        if (event.target.textContent === correctChoice) { 
            setQuizQuestions();
            score++;
            alert("Correct! Nailed it!");
        } else {
            setQuizQuestions();
            secondsRemaining -= 5;
        }
        console.log(score);
    });
    
    answerChoiceD.addEventListener('click', function(event) {
        event.stopPropagation();
        let correctChoice = "";
        correctChoice = questionsArray[i].answerChoice;
        console.log(correctChoice);
        if (i < questionsArray.length -1) {
            i++
        }
        if (event.target.textContent === correctChoice) { 
            setQuizQuestions();
            score++;
            alert("Correct! Nailed it!");
        } else {
            setQuizQuestions();
            secondsRemaining -= 5;
            alert("Incorrect! Better luck in the next one!");
        }
        console.log(score);
    });

// 4. When all questions are answered or the timer reaches 0, then the game is over
// use event delegation 
// add condition of if timer reaches 0 to end game
// render score during quiz         

// // 5. When the game is over, then user can save initials and score
  // Direct user to Results and Submit page
  // clearInterval(timerInterval);
  scoreContainer();

  // SCORE PROGRESS
function scoreContainer(){
homeContainer.styledisplay = "none";
quizContainer.style.display = "none";
scoreDisplay.innerHTML = "You scored " + score + " points!";
FinalTimeDisplay.innerHTML = "Code Quiz completed in " + quizTotalTime + " seconds";
}

// Set arrays for user input
// Create a function that stores user's input (initials) in localStorage 
// "Setters": Store array (localStorage.setItem) and Use JSON method (JON.string) to convert object into string from the user input array


//     // Direct user to Highscores page
//     // Create a Highscores function and set arrays that store user input in localStorage
//     // "Getters": Store array (localStorage.getItem) and use JSON method (JON.parse) to convert string into object for high scores list data 
//     // Then use a for loop of these arrays
//     // Create a high scores list element and append it
//     // Add an event listener for the submit button which submits and adds to score.
//     // Display or alert total at the end (alert("You got " + score + "/" + questions.length);

//     // Store in localStorage and re-render
//         // Add buttons and functions to go back/refresh and a function and button to clear high scores.
