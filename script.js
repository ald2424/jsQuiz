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
// Fixing buttons - try pre-making four buttons in html and only changing the text content in js
// If that doesn't work, figure out how to delete buttons when the questioncounter goes up
// Use set attribute to create id for button button.setAttribute("id", ("button" + index));

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
      for(var i = 0; i < questions[questionCounter].choices.length; i++){
        answers = document.createElement("button");
        //  answers.textContent = questions[questionCounter].choices[i];
        answers.setAttribute("id", ("btn" + i));
         displayAnswers.appendChild(answers);
       }

      
  }

  var questionCounter = 0;
  var lastQ = questions.length - 1;

  function renderQuiz(){
      
       // Displays question and displays answers in the form of buttons
      var currentQ = questions[questionCounter].title;
      displayQuestions.innerHTML = currentQ;

      // for(var i = 0; i < questions[questionCounter].choices.length; i++){
      // answers.textContent = questions[questionCounter].choices[i];
      // displayAnswers.appendChild(answers);
      // }
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



