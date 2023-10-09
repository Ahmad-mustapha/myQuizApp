const questions = [
    {
        question : 'How do you write "Hello World" in an alert box?',
        options : [
            {option : 'alertBox("Hello World");', answer : false},
            {option : 'alert("Hello World");', answer : true},
            {option : 'msgBox("Hello World");', answer : false},
            {option : 'msgBox("Hello World");', answer : false}
        ]
    },
    {
        question : 'What is the correct way to write a JavaScript array?',
        options : [
            {option : 'var colors = (1:"red", 2:"green", 3:"blue")', answer : false},
            {option : 'var colors = "red", "green", "blue"', answer : false},
            {option : 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', answer : false},
            {option : 'var colors = ["red", "green", "blue"]', answer : true}
        ]
    },
    {
        question : 'How can you add a comment in a JavaScript?',
        options : [
            {option : 'This is a comment', answer : false},
            {option : '//This is a comment', answer : true},
            {option : '/This is comment', answer : false},
            {option : '!--This is a comment--', answer : false}
        ]
    },
    {
        question : 'How do you call a function named "myFunction"?',
        options : [
            {option : 'call myFunction()', answer : false},
            {option : 'myFunction', answer : false},
            {option : 'myFunction()', answer : true},
            {option : 'call function MyFunction', answer : false}
        ]
    },
    {
        question : 'What is the correct JavaScript syntax to change the content of the HTML element below?',
        options : [
            {option : 'document.getElementById("demo").innerHTML = "Hello World!";', answer : true},
            {option : '#demo.innerHTML = "Hello World!";', answer : false},
            {option : 'document.getElement("p").innerHTML = "Hello World!";', answer : false},
            {option : 'document.getElementByName("p").innerHTML = "Hello World!";', answer : false}
        ]
    },
    {
        question : 'How can you detect the client\'s browser name?',
        options : [
            {option : 'client.navName', answer : false},
            {option : 'myBrowser.name', answer : false},
            {option : 'browser.name', answer : false},
            {option : 'navigator.appName', answer : true}
        ]
    },
    {
        question : 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        options : [
            {option : 'if (i <= 5)', answer : false},
            {option : 'if (i !== 5)', answer : true},
            {option : 'if i ==! 5 then', answer : false},
            {option : 'if i not= 5', answer : false}
        ]
    },
    {
        question : 'Which operator is used to assign a value to a variable?',
        options : [
            {option : '-', answer : false},
            {option : '==', answer : false},
            {option : '===', answer : false},
            {option : '=', answer : true}
        ]
    },
    {
        question : 'Which event occurs when the user clicks on an HTML element?',
        options : [
            {option : 'onclick', answer : true},
            {option : 'onchange', answer : false},
            {option : 'onmouseover', answer : false},
            {option : 'onmouseclick', answer : false}
        ]
    },
    {
        question : 'How do you find the number with the highest value of x and y?',
        options : [
            {option : 'Math.ceil(x, y)', answer : false},
            {option : 'Math.min(x, y)', answer : false},
            {option : 'Math.maximum.(x, y)', answer : false},
            {option : 'Math.max(x, y)', answer : true}
        ]
    }
]
console.log(questions.length)
const h3Question = document.querySelector('h3')
const answerBtns = document.querySelector('.answerbtns')
console.log(answerBtns)
const nextQuestnBtn = document.querySelector('#next')
let currentQuestnIndex = 0
let score = 0
const quizContainer = document.querySelector('.quiz')
let shuffleQuestion;

function startQuiz(){
    score = 0
    currentQuestnIndex = 0
    nextQuestnBtn.innerHTML = 'Next'
    shuffleQuestions()
    showQuestion()
}  


let currentQuestn
let questionNum 
function showQuestion(){
    document.body.backgroundColor = '#eee' 
    resetquestn()
    currentQuestn = shuffleQuestion[currentQuestnIndex]
    questionNum = currentQuestnIndex + 1
    h3Question.innerHTML = questionNum + '. ' + currentQuestn.question


    currentQuestn.options.forEach(eachOption => {
        const button = document.createElement('button')
        button.innerHTML = eachOption.option
        button.classList.add('option')
        answerBtns.appendChild(button)
        if(eachOption.answer){
            button.dataset.answer = eachOption.answer
            // button.style.backgroundColor = 'red'
        }
        button.addEventListener('click', (e) =>{
            const selectedButton = e.target
            const isCorrect = selectedButton.dataset.answer === 'true'
            if(isCorrect){
                selectedButton.style.backgroundColor = 'green'
                score++
            }else{
                selectedButton.style.backgroundColor = 'red'
            }
            Array.from(answerBtns.children).forEach(button =>{
                if(button.dataset.answer === 'true'){
                    button.style.backgroundColor = 'green'
                    button.style.color = 'orange'
                }
                button.disabled = true
                button.style.color = 'orange'
            })
            nextQuestnBtn.style.display = 'block'
        })
    });
}

// this question brings up another question
function resetquestn(){
    nextQuestnBtn.style.display = 'none'
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild)
    }
}
function shuffleQuestions(){
    shuffleQuestion = questions.sort(() => Math.random() - .5)
    // console.log(shuffleQuestion)
}

// the below lines of code shows the score of the user

function showScore(){
    resetquestn()
    if(score === questions.length){
        quizContainer.classList.remove = '.quiz'
        document.body.style.backgroundImage = 'url(./galaxy.gif)'
    }
    else if(score <= 4){
        h3Question.innerHTML = `You scored ${score} out of ${questions.length}.You need to sharpen your javaScript skills to attain success`
    }
    else if(score > 5 <= 7){
        h3Question.innerHTML = `You scored ${score} out of ${questions.length}.Try harder next time`
    }
    nextQuestnBtn.innerHTML = 'Let\'s go again!'
    nextQuestnBtn.style.display = 'block'
}

//  this code handles the next question when the next button is being clicked
function handleNextQuestion(){
    currentQuestnIndex++
    if(currentQuestnIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}


// this code handles the next button when it is being click
nextQuestnBtn.addEventListener('click', ()=>{
    if(currentQuestnIndex < questions.length){
        handleNextQuestion()
    }
    else{
        startQuiz()
    }
})

startQuiz()
