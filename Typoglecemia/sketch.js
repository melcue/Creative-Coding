////////////////////////////////////////////////////////////
// Survey state
// NOTE: Because of timing I only populated the responses array accordingly
let inProgress = true;
let currentQuestionIndex = 0;
let currentQuestionDisplayed = false;
let responses = [];
////////////////////////////////////////////////////////////
// Top-level initialization code

document.getElementById("submitAnswer").addEventListener("click", submitAnswer);
document.getElementById("start").addEventListener("click", startSurvey);
document.getElementById("nextQ").addEventListener("click", nextButton);

//element variables
let submit = document.getElementById("submitAnswer");
let headers = document.getElementById("numQuestion");
let e = document.getElementById("small");
let nextQuestion = document.getElementById("nextQ");
let startButton = document.getElementById("start");
let s = document.getElementById("sentence");
let q = document.getElementById("question");
let opt1 = document.getElementById("answer1");
let opt2 = document.getElementById("answer2");
let radio1 = document.getElementById("option1");
let radio2 = document.getElementById("option2");
let questionNum = document.getElementById("numQuestion");
const radioOptions = document.getElementsByName("radioOption");
// clears certain parts of the container
nextQuestion.style.display = "none";
submit.style.display = "none";
radio1.style.display = "none";
radio2.style.display = "none";
e.style.display = "none";
// global variables
let type = SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]; //randomizes the 
let answer;
let correct;
let numAnswer;
let cAnswer;
let sentTypo;
let ans1;
let ans2;
let question;
let sent;
let displayTime;
let submitTime;
let timeLapsed;

////////////////////////////////////////////////////////////
// Event handlers
function startSurvey() {
  currentQuestionDisplayed = true;
  // removes start button and shows all of the previously hidden elements
  startButton.style.display = "none";
  submit.style.display = "block";
  e.style.display = "block";
  radio1.style.display = "block";
  radio2.style.display = "block";
  // clears the container every time is called so the sentences do not overlap
  s.textContent = "";
  q.textContent = "";
  opt1.textContent = "";
  opt2.textContent = "";
  questionNum.textContent = "";
  // initializes survey variables
  numAnswer = tasks[currentQuestionIndex].correctAnswer;
  cAnswer = tasks[currentQuestionIndex].answers[numAnswer];
  sentTypo = injectTyposIntoSentence(type, tasks[currentQuestionIndex].sentence);
  ans1 = tasks[currentQuestionIndex].answers[0];
  ans2 = tasks[currentQuestionIndex].answers[1];
  question = tasks[currentQuestionIndex].question;
  sent = tasks[currentQuestionIndex].sentence;
  // changes the value of the radio options so the answer variable in submitAnswer works accordingly
  radio1.value = tasks[currentQuestionIndex].answers[0];
  radio2.value = tasks[currentQuestionIndex].answers[1];
  // creates the desired text in the container
  s.innerText = sentTypo;
  q.innerText = question;
  opt1.innerText = ans1;
  opt2.innerText = ans2;
  questionNum.innerText = "Page " + (currentQuestionIndex + 1) + "/10";
  currentQuestionIndex++;
  displayTime = Date.now();
}
// this function runs if the number of questions is less than 10 if it is not it shows the thank you message
function nextButton() {
   currentQuestionDisplayed = true;
  if (currentQuestionIndex < 10) {
    nextQuestion.style.display = "none"; // deletes the button as soon as it is clicked
    startSurvey();
  } else {
    inProgress = false;
    headers.style.display = "none";
    nextQuestion.style.display = "none";
    submit.style.display = "none";
    e.style.display = "none";
    radio1.style.display = "none";
    radio2.style.display = "none";
    opt1.style.display = "none";
    opt2.style.display = "none";
    q.style.display = "none";
    s.textContent = "";
    s.textContent = "You reached the end.Thank you for responding!";
  }
}

function submitAnswer() {
  submitTime = Date.now(); // tracks timeLapsed
  timeLapsed = submitTime - displayTime;
  nextQuestion.style.display = "block";
  for (const radioOption of radioOptions) {
    if (radioOption.checked) {
      answer = radioOption.value;
    }
  }
  // checks that the answer provided by the user is correct and changes the variable accordingly 
  if (answer === cAnswer) {
    correct = true;
  } else {
    correct = false;
  }
  // populates the responses array accordingly
  responses.push({
    sentence: sent,
    typo: type,
    typoSentence: sentTypo,
    question: question,
    selectedAnswer: answer,
    correct: correct,
    displayTime: displayTime,
    timeLapsed: timeLapsed,
    fontFamily:"Courier New",
    fontSize: "20px",
  });
  console.log(`Answer selected: ${answer}`);
  console.log(responses);
}
