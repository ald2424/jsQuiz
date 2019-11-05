// after the user clicks start quiz, the title and choices of the first object array appears
// the choices are set up at buttons
// once the player chooses an answer, the result (correct or wrong) will display based on the answer key in the object array
// The next object array appears
// One the user completed the quiz, the results will appear
// Go back and add timer after these steps are completed



var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choice: ["strings", "booleans", "alerts", "numbers"],
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

  document.getElementById("startB").onclick = function (quiz){
      disableButton();
      for(var i = 0; i < questions.length; i++){
          var currentQ = questions[i].title;
          var currentA = questions[i].choices;
          displayQuestions.innerHTML = currentQ;
          displayAnswers.innerHTML = currentA;
    
      }
  }

  //   disableButton will hide the start button once it has been clicked
  function disableButton(){
    document.getElementById("hide").style.display = "none";
}

