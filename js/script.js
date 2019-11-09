// TASKS:
// Once quiz is over, veiw score button appears <--Hide button until quiz is over OR make button after quiz is
// When user clicks view score, the score is calculated and displayed on screen (not as an alert)
// Add timer
// If the user gets the question wrong, the timer loses 10 seconds
// The faster the user answers, the higher the score (Need to figure out the math here)
// quiz ends either after all questions are answered or timer runs out
// User can chose to have their initials saved with their score in local storage
// Add view high scores button to start of quiz
// **** BONUS **** instead of start button, create three quizzes - easy, medium, and hard for user to select from


var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title:"It is best practice to add Javascript tag to the ____ of the HTML page.",
    choices: ["top of the head tag", "bottom of the head tag", "top of the body tag", "bottom of the body tag"],
    answer: "bottom of the body tag"
  },
  {
    title: "Which of these represents 'x' as a function: ",
    choices: ["var x = 10", "x = true", "alert(x)", "x()"],
    answer: "x()"
  },
  {
    title: "which of these is NOT a type of loop:",
    choices: ["for loop","until loop", "while loop", "do while loop"],
    answer:"until loop"
  },

];


var displayQuestions = document.querySelector("#q");
var displayAnswers = document.querySelector("#a");
var startB = document.querySelector("#startB");
var result = document.querySelector("#result");
var timerEl = document.querySelector("#timer");
var score = 0;
var answers;



var secondsLeft = 0;
var ended = false;
function setTimer(){
  secondsLeft = 50;
  var timerInt = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = "Time: " + secondsLeft;
    if (ended == true){
      clearInterval(timerInt);
    }
    if (secondsLeft == 0){
      clearInterval(timerInt);
      showResults();
    }
  }, 1000);
}



// Starts quiz when button is pressed
document.getElementById("startB").onclick = function (quiz){
    disableButton();
    setTimer();
    renderQuiz();
     }

    


var questionCounter = 0;
var lastQ = questions.length - 1;

function renderQuiz(){
    
if(questionCounter <= lastQ){
     // Displays question and displays answers in the form of buttons
    var currentQ = questions[questionCounter].title;
    displayQuestions.innerHTML = currentQ;

    var btn1 = document.getElementById("btn0");
    var btn2 = document.getElementById("btn1");
    var btn3 = document.getElementById("btn2");
    var btn4 = document.getElementById("btn3");

    btn1.textContent = questions[questionCounter].choices[0];
    btn2.textContent = questions[questionCounter].choices[1];
    btn3.textContent = questions[questionCounter].choices[2];
    btn4.textContent = questions[questionCounter].choices[3];

    btn1.style.display = "inline";
    btn2.style.display = "inline";
    btn3.style.display = "inline";
    btn4.style.display = "inline";

    displayAnswers.appendChild(btn1);
    displayAnswers.appendChild(btn2);
    displayAnswers.appendChild(btn3);
    displayAnswers.appendChild(btn4);

}
else{
  ended = true;
  showResults();
}
}

// When user clicks button, function checks if the answer is right or wrong. And then preceeds to next question
displayAnswers.addEventListener("click", function(event){
  if(event.target.textContent == questions[questionCounter].answer){
    alert("good");
    score++;
  }
  else{
    secondsLeft = secondsLeft - 10;
    alert("bad");
  }

  questionCounter++;
  renderQuiz();
})
 


//   disableButton will hide the start button once it has been clicked
function disableButton(){
  document.getElementById("hide").style.display = "none";
}

// function hides quiz questions and choices and makes a calculate score button appear
function showResults(){
displayAnswers.style.display = "none";
displayQuestions.style.display = "none";
var showScore = document.getElementById("score");
var txt = document.getElementById("result");
txt.textContent = "Quiz Complete! Press button to see your score."
showScore.style.display = "block";
showScore.textContent = "Calculate Score";
result.appendChild(showScore);
}

// Runs when calculate score button is pressed
document.getElementById("score").onclick = function (quiz){
alert(score);
}