var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "Capital of pakistan is -----",
    choices : [ "select",
        "Lahore",
        "Islamabad",
        "Karachi"],
    correctAnswer : 1
},{
    question : "Capital of United states is -----",
    choices : [ "select",
        "Virginia",
        "WAshigton DC",
        "none of the above"],
    correctAnswer : 1
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {
    /*Write your code here */
    if(currentQuestion< questions.length-1)
    {
        var c = document.querySelector("input[type=radio ]:checked");
        if(c==null)
        {
            var mes =document.getElementById("quiz-message");
            mes.style.display="inline";
            mes.innerText='please select an answer';
            var ChoiceList=document.getElementById("choice-list");
            ChoiceList.innerHTML='';
        }
        else if (currentQuestion<questions.length-1){
            if(c.id==questions[currentQuestion].correctAnswer)
            {
                correctAnswers++;
            }
            var ChoiceListid=document.getElementById("choice-list");
            ChoiceListid.innerHTML='';
            currentQuestion++;
        }
        if(currentQuestion!=questions.length-1) {
            displayCurrentQuestion();
        }
        else
        {
            displayScore();
            var mess=document.getElementById("quiz-message");
            mess.style.display="none";
            currentQuestion++;
            var Next = document.getElementById("next-btn");
            Next.innerText='Reset';
        }

    }
    else {
        resetQuiz();

    }
}

function displayCurrentQuestion() {
    /*Write your code here */
    ques = document.getElementById('question');
    var opt = document.getElementById('choice-list');
    opt.innerText='';
    ques.innerText='';
    ques.innerText = questions[currentQuestion].question;
    for(var i =0; i<questions[currentQuestion].choices.length;i++)
    {
        opt.innerHTML += '<li><input type="radio" name="opt"></li>' + questions[currentQuestion].choices[i];
    }

}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}