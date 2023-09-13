//declare globals

var remainingTime = 0;
var score = 0;
var questionNumber = 0;
var timer;
var questionAnswerArea = "<h3>" + questions[questionNumber]+"<h3>";
var questions = [
    {
        title: "Which of the following commands can be used to increment a variable within a for loop?",
        choices: ["plus()", "extra()", "+()", "++()"],
        answer: "++()"
    },
    {
        title: "Which of the following is a method used to obtain random numbers?",
        choices: [".math()",".generate()",".create()","none of these()"],
        answer: "none of these()"
    }
]


function startQuiz() {
    remainingTime = 60;
    document.getElementById("remainingTime").innerHTML = remainingTime;

    timer = setInterval(function() {
        remainingTime--;
        document.getElementById("remainingTime").innerHTML = remainingTime;
        if (remainingTime <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
        clearInterval(timer);
        var questionAnswerArea = <h3>Game Over! Your score is '+ score / 20 +.'</h3>,
        <input type="text" id = "name">placeholder = "First name">
        <button onclick ="recordScore()">Record your score</button>;

        document.getElementById("questionAnswerArea").innerhtml = questionAnswerArea;
}

function next() {
    questionNumber++;
    if (questionNumber > questions.length - 1) {
        gameOver();
        return;
    }
    
    var questionAnswerArea = 

function gameOver()
function recordScore()


//declare question/answer variables

var questions = [{question:""answers:""selection:""},{question:""answers:""selection:""}]
