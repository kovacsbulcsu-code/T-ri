  let questions = [
  {
    question: "Mikor koronázták meg I. Károly Róbertet Magyarország királyává?",
    answers: [
      { text: "1321", correct: false },
      { text: "1308", correct: true },
      { text: "1335", correct: false },
      { text: "1342", correct: false }
    ]
  },
  {
    question: "Mettől meddig számolta fel I. Károly Róbert a kiskirályokat Magyarországon?",
    answers: [
      { text: "1308–1342", correct: false },
      { text: "1321–1342", correct: false },
      { text: "1308–1321", correct: true },
      { text: "1335–1351", correct: false }
    ]
  },
  {
    question: "Mettől meddig uralkodott I. Károly Róbert Magyarország királyaként?",
    answers: [
      { text: "1342–1382", correct: false },
      { text: "1308–1342", correct: true },
      { text: "1351–1387", correct: false },
      { text: "1387–1437", correct: false }
    ]
  },
  {
    question: "Mikor vezette be I. Károly Róbert Magyarországon a kapuadót?",
    answers: [
      { text: "1351", correct: false },
      { text: "1336", correct: true },
      { text: "1335", correct: false },
      { text: "1345", correct: false }
    ]
  },
  {
    question: "Mikor volt a visegrádi királytalálkozó I. Károly Róbert uralkodása alatt?",
    answers: [
      { text: "1342", correct: false },
      { text: "1351", correct: false },
      { text: "1335", correct: true },
      { text: "1336", correct: false }
    ]
  },
  {
    question: "Mikor lett Nagy Lajos Lengyelország királya?",
    answers: [
      { text: "1351", correct: false },
      { text: "1370", correct: true },
      { text: "1345", correct: false },
      { text: "1382", correct: false }
    ]
  },
  {
    question: "Mikor ölték meg Andrást, Nagy Lajos testvérét?",
    answers: [
      { text: "1351", correct: false },
      { text: "1342", correct: false },
      { text: "1345", correct: true },
      { text: "1370", correct: false }
    ]
  },
  {
    question: "Mettől meddig uralkodott Nagy Lajos Magyarország királyaként?",
    answers: [
      { text: "1458–1490", correct: false },
      { text: "1308–1342", correct: false },
      { text: "1342–1382", correct: true },
      { text: "1387–1437", correct: false }
    ]
  },
  {
    question: "Mikor vezette be Nagy Lajos az ősiség törvényét?",
    answers: [
      { text: "1335", correct: false },
      { text: "1367", correct: false },
      { text: "1351", correct: true },
      { text: "1342", correct: false }
    ]
  },
  {
    question: "Mettől meddig uralkodott Luxemburgi Zsigmond Magyarország királyaként?",
    answers: [
      { text: "1342–1382", correct: false },
      { text: "1458–1490", correct: false },
      { text: "1387–1437", correct: true },
      { text: "1308–1342", correct: false }
    ]
  },
  {
    question: "Mikor foglalta el az Oszmán Birodalom Drinápolyt Nagy Lajos uralkodása idején?",
    answers: [
      { text: "1389", correct: false },
      { text: "1354", correct: true },
      { text: "1396", correct: false },
      { text: "1370", correct: false }
    ]
  },
  {
    question: "Mikor volt a rigómezei csata, ahol a szerbek vereséget szenvedtek Nagy Lajos alatt?",
    answers: [
      { text: "1402", correct: false },
      { text: "1389", correct: true },
      { text: "1396", correct: false },
      { text: "1401", correct: false }
    ]
  },
  {
    question: "Mikor volt a nikápolyi csata Luxemburgi Zsigmond idején?",
    answers: [
      { text: "1401", correct: false },
      { text: "1389", correct: false },
      { text: "1396", correct: true },
      { text: "1402", correct: false }
    ]
  },
  {
    question: "Mikor volt az ankarai csata Luxemburgi Zsigmond uralkodása alatt?",
    answers: [
      { text: "1396", correct: false },
      { text: "1402", correct: true },
      { text: "1401", correct: false },
      { text: "1389", correct: false }
    ]
  },
  {
    question: "Mikor tartották a temesvári országgyűlést Luxemburgi Zsigmond idején?",
    answers: [
      { text: "1402", correct: false },
      { text: "1397", correct: true },
      { text: "1396", correct: false },
      { text: "1401", correct: false }
    ]
  },
  {
    question: "Mettől meddig uralkodott Hunyadi Mátyás Magyarország királyaként?",
    answers: [
      { text: "1387–1437", correct: false },
      { text: "1458–1490", correct: true },
      { text: "1440–1457", correct: false },
      { text: "1468–1483", correct: false }
    ]
  },
  {
    question: "Mikor vette vissza Hunyadi Mátyás Jajcavárát és a magyar koronát?",
    answers: [
      { text: "1476", correct: false },
      { text: "1463", correct: true },
      { text: "1468", correct: false },
      { text: "1475", correct: false }
    ]
  },
  {
    question: "Mikor aratott győzelmet Hunyadi Mátyás Vázlónál?",
    answers: [
      { text: "1476", correct: false },
      { text: "1475", correct: true },
      { text: "1468", correct: false },
      { text: "1483", correct: false }
    ]
  },
  {
    question: "Mikor foglalta el Hunyadi Mátyás Szabács várát?",
    answers: [
      { text: "1475", correct: false },
      { text: "1476", correct: true },
      { text: "1483", correct: false },
      { text: "1468", correct: false }
    ]
  },
  {
    question: "Mikor kötött Hunyadi Mátyás 5 évre békét a törökökkel?",
    answers: [
      { text: "1468", correct: false },
      { text: "1483", correct: true },
      { text: "1476", correct: false },
      { text: "1475", correct: false }
    ]
  },
  {
    question: "Mikor indított háborút Hunyadi Mátyás Csehországért?",
    answers: [
      { text: "1475", correct: false },
      { text: "1468", correct: true },
      { text: "1483", correct: false },
      { text: "1476", correct: false }
    ]
  },
  {
    question: "Mikor volt kompromisszumos béke Hunyadi Mátyás és Jagelló Ulászló között?",
    answers: [
      { text: "1485", correct: false },
      { text: "1479", correct: true },
      { text: "1486", correct: false },
      { text: "1476", correct: false }
    ]
  },
  {
    question: "Mikor foglalta el Hunyadi Mátyás Bécset?",
    answers: [
      { text: "1486", correct: false },
      { text: "1485", correct: true },
      { text: "1479", correct: false },
      { text: "1483", correct: false }
    ]
  },
  {
    question: "Mikor lett Miksa német-római császár Hunyadi Mátyás idején?",
    answers: [
      { text: "1485", correct: false },
      { text: "1486", correct: true },
      { text: "1479", correct: false },
      { text: "1483", correct: false }
    ]
  },
  {
    question: "Mikor házasodott meg Hunyadi Mátyás Beatrixszal?",
    answers: [
      { text: "1476", correct: true },
      { text: "1486", correct: false },
      { text: "1475", correct: false },
      { text: "1483", correct: false }
    ]
  },
  {
    question: "Mikor hozta Hunyadi Mátyás a nádori törvényeket?",
    answers: [
      { text: "1485", correct: false },
      { text: "1486", correct: true },
      { text: "1479", correct: false },
      { text: "1476", correct: false }
    ]
  },
  {
    question: "Mettől meddig uralkodott Habsburg Albert Magyarország királyaként?",
    answers: [
      { text: "1440–1444", correct: false },
      { text: "1437–1439", correct: true },
      { text: "1440–1457", correct: false },
      { text: "1458–1490", correct: false }
    ]
  },
  {
    question: "Mettől meddig uralkodott I. Ulászló Magyarország királyaként?",
    answers: [
      { text: "1440–1457", correct: false },
      { text: "1440–1444", correct: true },
      { text: "1437–1439", correct: false },
      { text: "1444–1453", correct: false }
    ]
  },
  {
    question: "Mettől meddig uralkodott V. László Magyarország királyaként?",
    answers: [
      { text: "1440–1444", correct: false },
      { text: "1440–1457", correct: true },
      { text: "1458–1490", correct: false },
      { text: "1437–1439", correct: false }
    ]
  },
  {
    question: "Mettől meddig tartott a hosszú hadjárat Hunyadi János idején?",
    answers: [
      { text: "1444–1453", correct: false },
      { text: "1442–1444", correct: true },
      { text: "1440–1444", correct: false },
      { text: "1448–1453", correct: false }
    ]
  },
  {
    question: "Mikor volt a várnai csata, ahol I. Ulászló király meghalt?",
    answers: [
      { text: "1448", correct: false },
      { text: "1444", correct: true },
      { text: "1453", correct: false },
      { text: "1456", correct: false }
    ]
  },
  {
    question: "Mettől meddig volt Hunyadi János kormányzó Magyarországon?",
    answers: [
      { text: "1440–1457", correct: false },
      { text: "1444–1453", correct: true },
      { text: "1448–1456", correct: false },
      { text: "1453–1456", correct: false }
    ]
  },
  {
    question: "Mikor volt a második rigómezei csata, magyar vereséggel?",
    answers: [
      { text: "1444", correct: false },
      { text: "1448", correct: true },
      { text: "1453", correct: false },
      { text: "1456", correct: false }
    ]
  },
  {
    question: "Mikor foglalták el a törökök Konstantinápolyt Hunyadi János idején?",
    answers: [
      { text: "1448", correct: false },
      { text: "1453", correct: true },
      { text: "1456", correct: false },
      { text: "1444", correct: false }
    ]
  },
  {
    question: "Mikor volt a nándorfehérvári diadal Hunyadi János idején?",
    answers: [
      { text: "1453", correct: false },
      { text: "1456", correct: true },
      { text: "1448", correct: false },
      { text: "1444", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Következő";
    questions = shuffleArray(questions);
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
});
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){        
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();

    const percentage = Math.round((score / questions.length) * 100).toFixed(2);
    questionElement.innerHTML = `A végeredmény: ${score} / ${questions.length}<br>Elért százalék: ${percentage}%`;
    nextButton.innerHTML = "Újra";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion(); 
    }else{
        showScore();
    }
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();