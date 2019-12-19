var score = 0;
var secondsLeft = 5; //parseInt(questions.length)
var index = 0;

var startBtn = document.getElementById("start-btn");
var mainBox = document.querySelector(".main-box");
var timerBox = document.querySelector(".timer");
var scoreLast = document.querySelector(".score-last")

var scoreDiv = document.createElement("div");
var questionBox = document.createElement("div");
var timeDiv = document.createElement("div");
var answerBox1 = document.createElement("button");
var answerBox2 = document.createElement("button");
var answerBox3 = document.createElement("button");
var answerBox4 = document.createElement("button");


answerBox1.setAttribute("class", "option");
answerBox2.setAttribute("class", "option");
answerBox3.setAttribute("class", "option");
answerBox4.setAttribute("class", "option");


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
    ///etc.
];



quizAll();


function quizAll() {
    toStart();
    displayAll();
}


function toStart() {
    startBtn.addEventListener("click", function () {
        setTime();
    })
}


function displayAll() {
    this.addEventListener("click", function () {

        if (index < questions.length) {
            displayAn(index);
        }
    })
}

function displayAn(e) {
    function test() {
        alert("options");
        console.log(this.getAttribute("data-ch1"))
        // if(this.getAttribute("data-ch1") === ){
        // score++;
        // }

    }
    startBtn.style.visibility = "hidden";
    document.getElementById("description").textContent = " ";
    questionBox.textContent = questions[e].title;
    mainBox.appendChild(questionBox);
    answerBox1.textContent = questions[e].choices[0];
    answerBox1.setAttribute("data-ch1", questions[e].choices[0]);
    // answerBox1.setAttribute("onclick", test());
    answerBox1.onclick = test;
    mainBox.appendChild(answerBox1);
    answerBox2.textContent = questions[e].choices[1];
    mainBox.appendChild(answerBox2);
    answerBox3.textContent = questions[e].choices[2];
    mainBox.appendChild(answerBox3);
    answerBox4.textContent = questions[e].choices[3];
    mainBox.appendChild(answerBox4);
    index++;
}



function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeDiv.textContent = secondsLeft;
        timerBox.appendChild(timeDiv);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeDiv.textContent = " ";

    scoreDiv.textContent = "Your score is " + (parseInt(score) + parseInt(secondsLeft));
    scoreLast.appendChild(scoreDiv);

}
