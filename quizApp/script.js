const questionTag = document.querySelector(".question");
const fourAnwers = document.querySelector(".answers");
const nextBtn = document.querySelector(".next-btn");

const questions = [
  {
    question: "kabul is the capital of : ",
    answers: [
      { text: "Afghanistan", correct: true },
      { text: "Pakistan", correct: false },
      { text: "India", correct: false },
      { text: "Iran", correct: false },
    ],
  },

  {
    question: "Afghanistan is located in  : ",
    answers: [
      { text: "America", correct: false },
      { text: "Asia", correct: true },
      { text: "Africa", correct: false },
      { text: "Eroupe", correct: false },
    ],
  },

  {
    question: "Cananda is located in: ",
    answers: [
      { text: "America", correct: true },
      { text: "Asia", correct: false },
      { text: "Africa", correct: false },
      { text: "Eroupe", correct: false },
    ],
  },
  {
    question: "What is bigest country in the world.... ? ",
    answers: [
      { text: "India", correct: false },
      { text: "Afganistan", correct: false },
      { text: "Canada", correct: false },
      { text: "Rasia", correct: true },
    ],
  },
  {
    question: "The most puplation of the world are in ....  ",
    answers: [
      { text: "America", correct: false },
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Pakistan", correct: false },
    ],
  },
];

/// start quiz
let currentQuestionNo = 0;
let score = 0;
function StartQuiz() {
  currentQuestionNo = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuistions();
}
///// show quistions function
function showQuistions() {
  resetQuestion();
  let currentQuestion = questions[currentQuestionNo];
  let questionNo = currentQuestionNo + 1;
  questionTag.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.map((item) => {
    const answerBtn = document.createElement("button");
    answerBtn.innerHTML = item.text;
    answerBtn.classList.add("answer-btn");
    fourAnwers.appendChild(answerBtn);
    /// add btn dataset to get true and false
    if (item.correct) {
      answerBtn.dataset.correct = item.correct;
    }
    answerBtn.addEventListener("click", checkAnswer);
  });
}

///// reset question is used to remove the previous question
function resetQuestion() {
  nextBtn.style.display = "none";
  while (fourAnwers.firstChild) {
    fourAnwers.removeChild(fourAnwers.firstChild);
  }
}

//// checkAnswer function , to see answer is correct or not
function checkAnswer(e) {
  let selectedBtn = e.target;
  if (selectedBtn.dataset.correct) {
    selectedBtn.classList.add("correctAnswer");
    score++;
  } else {
    selectedBtn.classList.add("inCorrectAnswer");
  }

  Array.from(fourAnwers.children).forEach((btn) => {
    if (btn.dataset.correct) {
      btn.classList.add("correctAnswer");
    }
    btn.disabled = true;
  });
  nextBtn.style.display = "block";
}

//  next button fucntion , we want to show another question if exists.
nextBtn.addEventListener("click", () => {
  if (currentQuestionNo < questions.length) {
    nextQuestion();
  } else {
    StartQuiz();
  }
});

//// next question fucntion , to show the next question.
function nextQuestion() {
  currentQuestionNo++;
  if (currentQuestionNo < questions.length) {
    showQuistions();
  } else {
    showScore();
  }
}

/// show score function shows the result of quiz.
function showScore() {
  resetQuestion();
  if (score < 3) {
    questionTag.innerHTML = `Sorry! you failed , you do not answered enough questions. to pass, answer more than 2 questions.`;
    nextBtn.style.display = "block";
    nextBtn.innerHTML = "Try Again";
  } else {
    questionTag.innerHTML = ` Wow congritulations! You answered correct ${score} out of  ${questions.length}, you passed it. you can replay it.`;
    nextBtn.style.display = "block";
    nextBtn.innerHTML = "RePlay";
  }
}

StartQuiz();
