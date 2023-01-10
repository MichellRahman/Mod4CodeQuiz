let questions = [
    {
        text: "Commonly used data types do not include:",
        choices: ["A) strings","B) booleans", "C) alerts", "D) numbers"],
        answer: "C) alerts"
    },
    {
        text: "Arrays in JavaScript can be used to store:",
        choices: ["A) numbers and strings","B) other arrays", "C) booleans", "D) all of the above"],
        answer: "D) all of the above"
    },
    {
        text: "A very useful tool during development and debugging for printing content to the debugger is:",
        choices: ["A) JavaScript","B) terminal/bash", "C) for loops", "D) console.log"],
        answer: "D) console.log"
    },
    {
        text: "String values must be be enclosed within _____ when being assigned to variables:",
        choices: ["A) commas","B) curly brackets", "C) quotes", "D) parenthesis"],
        answer: "C) quotes"
    },
];
var questionNumber = 0;
var score = 0;
var time = 60;
var interval;
localStorage.setItem("scores", "");

function start () {
    questionNumber = 0;
    score = 0;
    time = 60;
    document.getElementById("start").style.display="none";
    document.getElementById("quiz").style.display="block";
    interval = setInterval("updateTimer()", 1000);
    displayQuestion();
}
function updateTimer () {
    document.getElementById("time").innerHTML="Time: " + time;
    time -- ;
    if (time < 0) {
        clearInterval(interval);
        endQuiz();
    }
}
function displayQuestion () {
    document.getElementById("question").innerHTML=questions[questionNumber].text;
    document.getElementById("a").textContent=questions[questionNumber].choices[0];
    document.getElementById("b").textContent=questions[questionNumber].choices[1];
    document.getElementById("c").textContent=questions[questionNumber].choices[2];
    document.getElementById("d").textContent=questions[questionNumber].choices[3];
}
function checkAnswer() {
    var answer = this.textContent;
    if(answer == questions[questionNumber].answer){
        document.getElementById("feedback").innerHTML="correct";
        score ++;
    }
    else {
        document.getElementById("feedback").innerHTML="incorrect";
        time-=5;
    }
    questionNumber++;
    if(questionNumber < questions.length) {
        displayQuestion();
    }
    else {
        clearInterval(interval);
        endQuiz();
    }
}
function endQuiz() {
    document.getElementById("quiz").style.display="none";
    document.getElementById("done").style.display="block";
    document.getElementById("score").innerHTML="Score: " + score + "/" + questions.length;
    document.getElementById("initials").value="";
}
function submit () {
    var initials = document.getElementById("initials").value;
    var records = localStorage.getItem("scores") + "<br>" + initials + " " + score;
    localStorage.setItem("scores", records);
    document.getElementById("scoreboard").innerHTML= localStorage.getItem("scores");
    document.getElementById("done").style.display="none";
    document.getElementById("highScores").style.display="block";
    document.getElementById("feedback").innerHTML="";
    document.getElementById("time").innerHTML="Time: ";
    clearInterval(interval);
}
function back () {
    document.getElementById("highScores").style.display="none";
    document.getElementById("start").style.display="block";
}

function clear () {
    localStorage.setItem("scores", "");
    document.getElementById("scoreboard").innerHTML= "";
}
function view () {
    document.getElementById("highScores").style.display="block";
    document.getElementById("start").style.display="none";
    document.getElementById("quiz").style.display="none";
    document.getElementById("done").style.display="none";
    document.getElementById("time").innerHTML="Time: ";
    clearInterval(interval);
}
document.getElementById("startButton").addEventListener("click",start);
document.getElementById("a").addEventListener("click",checkAnswer);
document.getElementById("b").addEventListener("click",checkAnswer);
document.getElementById("c").addEventListener("click",checkAnswer);
document.getElementById("d").addEventListener("click",checkAnswer);
document.getElementById("submit").addEventListener("click",submit);
document.getElementById("back").addEventListener("click",back);
document.getElementById("clear").addEventListener("click",clear);
document.getElementById("view").addEventListener("click",view);



