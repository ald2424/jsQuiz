// TASKS:
// When user clicks view score, the score is calculated and displayed on screen (not as an alert)
// Add timer
// if user gets question right, depending on how many seconds it takes depends on points earned
// if user gets question wrong, time is taken away from timer (10 seconds or so)
// quiz ends either after all questions are answered or timer runs out
// User can chose to have their initials saved with their score in local storage
// Add view high scores button to start of quiz
// Take css style out of button tags and add class to style.css
// Create seperate folders for js and css
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
    }

  ];

  var displayQuestions = document.querySelector("#q");
  var displayAnswers = document.querySelector("#a");
  var startB = document.querySelector("#startB");
  var result = document.querySelector("#result");
  var secondsDisplay = document.querySelector("#seconds");
  var score = 0;
  var answers;
  var count = 30;

  // Starts quiz when button is pressed
  document.getElementById("startB").onclick = function (quiz){
      disableButton();
      var t = document.getElementById("showTime");
      t.style.display = "block";
   
      // Starts timer
      var interval = setInterval(function(){
        document.getElementById('seconds').innerHTML=count;
        count--;
        if (count === 0){
          clearInterval(interval);
         
          showResults();
        }
      }, 1000);


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



