
var startBtn = document.getElementById("start-btn");
var mainBox = document.querySelector(".main-box");
var timerBox = document.querySelector(".timer");
var scoreLast = document.querySelector(".score-last")

var scoreDiv = document.createElement("div");
var questionBox = document.createElement("div");
var timeDiv = document.createElement("div");



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
        title: "Which one is for nextline?",
        choices: ["<p>", "<br>", "<h1>", "<section>"],
        answer: "<br>"
    },
    {
        title: "Which function do create random number between 0-1?",
        choices: ["Math.ceiling", "Math.random", "setAtribute", "Math.floor"],
        answer: "Math.random"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: ["if i = 0", "if i == 0 then", "if (i == 0)", "if i =0 then"],
        answer: "if (i == 0)"
    }

];

var score = 0;
var secondsLeft = 15 * questions.length;
var index = 0;


startBtn.addEventListener("click", function () {
    setTime();
    displayAll();
})



function displayAll() {
    if (index < questions.length) {
        displayNextQuestion();
    }

}

function displayNextQuestion() {

    startBtn.style.visibility = "hidden";
    mainBox.innerHTML = "";
    if (index >= questions.length) {
        return;
    }
    questionBox.textContent = questions[index].title;
    mainBox.appendChild(questionBox);

    for (var j = 0; j < 4; j++) {
        var answerBox = document.createElement("button");
        answerBox.setAttribute("class", "answerOption");
        answerBox.textContent = questions[index].choices[j];
        answerBox.setAttribute("data-ch1", questions[index].choices[j]);
        answerBox.addEventListener("click", function () {
            var my_index_val = index - 1;
            console.log("This is :", this.innerText)

            if (this.innerText === questions[my_index_val].answer) {
                score = score + 100
            }
            else {
                secondsLeft = secondsLeft - 15
            }
            if (index < questions.length) {
                displayNextQuestion();
            }
            else {
                sendMessage();
            }
        })
        mainBox.appendChild(answerBox);
    }
    index++;

}

var timerInterval = null;

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeDiv.textContent = secondsLeft;
        timerBox.appendChild(timeDiv);
        if (secondsLeft <= 0) {
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    clearInterval(timerInterval);

    timeDiv.textContent = " ";

    var seconds_left_value = secondsLeft;
    if (seconds_left_value < 0) {
        seconds_left_value = 0
    }
    scoreDiv.textContent = "Your score is " + (score + seconds_left_value);
    scoreLast.appendChild(scoreDiv);

}
