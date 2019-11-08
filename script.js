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



//****** */ CURRENT ISSUES TO RESOLVES
// Get render quiz to stop working at the end of questions.length
// get score alert to appear at that time
// The have user type in initials and save score and initials in local storage

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
    }

  ];

  var displayQuestions = document.querySelector("#q");
  var displayAnswers = document.querySelector("#a");
  var startB = document.querySelector("#startB");
  var result = document.querySelector("#result");
  var score = 0;
  var answers;


  // Starts quiz when button is pressed
  document.getElementById("startB").onclick = function (quiz){
      disableButton();
      renderQuiz();
       }

      
  

  var questionCounter = 0;
  var lastQ = questions.length - 1;

  function renderQuiz(){
      
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

      displayAnswers.appendChild(btn1);
      displayAnswers.appendChild(btn2);
      displayAnswers.appendChild(btn3);
      displayAnswers.appendChild(btn4);

      
  }

  // When user clicks button, function checks if the answer is right or wrong. And then preceeds to next question
  displayAnswers.addEventListener("click", function(event){
    if(event.target.textContent == questions[questionCounter].answer){
      alert("good");
      score++;
    }
    else{
      alert("bad");
    }

    questionCounter++;
    renderQuiz();
  })
   


//   disableButton will hide the start button once it has been clicked
  function disableButton(){
    document.getElementById("hide").style.display = "none";
}


  // var showScore = document.createElement("button");
  // showScore.textContent = "Calculate Score";
  // result.appendChild(showScore);



