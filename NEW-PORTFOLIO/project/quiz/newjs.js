const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Load stored questions or fallback to hardcoded ones
const defaultQuestions = [
          {
        question: "Which tag is used for inserting the largest heading in HTML?",
        answers: [
            { text: "&lt;h1&gt;", correct: true },
            { text: "&lt;h6&gt;", correct: false },
            { text: "&lt;head&gt;", correct: false },
            { text: "&lt;header&gt;", correct: false },
        ]
    },
    {
        question: "Which HTML element is used to define an unordered list?",
        answers: [
           {text: "&lt;ol&gt;", correct: false},
           {text: "&lt;li&gt;", correct: false},
           {text: "&lt;list&gt;", correct: false},
           {text: "&lt;ul&gt;", correct: true},
        ]
     },
     {
        question: "Which of the following is the correct way to comment in HTML?",
        answers: [
         
           {text: "// This is a comment", correct: false},
           {text: "/* This is a comment */", correct: false},
           {text: " &lt;!-- This is a comment --&gt;", correct: true},
           {text: "# This is a comment", correct: false},
        ]
     },
     {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
           
           {text: "class", correct: false},
           {text: "style", correct: true},
           {text: "id", correct: false},
           {text: "css", correct: false},
        ]
     },
     {
        question: "What is the correct HTML element for inserting a line break?",
        answers: [
           {text: " &lt;lb&gt;", correct: false},
           {text: " &lt;break&gt;", correct: false},
           {text: " &lt;line&gt;", correct: false},
           {text: "&lt;br&gt;", correct: true},
        ]
     },
     {
        question: "Which tag is used to display images in HTML?",
        answers: [
           
           {text: " &lt;picture&gt;", correct: false},
           {text: " &lt;src&gt;", correct: false},
           {text: " &lt;img&gt;", correct: true},
           {text: " &lt;image&gt;", correct: false},
        ]
     },
     {
        question: "What is the purpose of the `alt` attribute in the `<img>` tag?",
        answers: [
           {text: "Provides alternative text if the image can't be displayed", correct: true},
           {text: "Links to another image", correct: false},
           {text: "Defines the image size", correct: false},
           {text: "Defines the image format", correct: false},
        ]
     },
     {
        question: "What does HTML stand for?",
        answers: [
           {text: "HyperText Markup Language", correct: true},
           {text: "Home Tool Markup Language", correct: false},
           {text: "Hyperlinks and Text Markup Language", correct: false},
           {text: "Hyper Technology Markup Language", correct: false},
        ]
     },
     {
        question: "Which tag is used to create a table row in HTML?",
        answers: [
           
           {text: " &lt;td&gt; ", correct: false},
           {text: " &lt;table&gt;", correct: false},
           {text: " &lt;row&gt;", correct: false},
           {text: " &lt;tr&gt;", correct: true},
        ]
     },
     {
        question: "Which of the following is used to define a function in Python?",
        answers: [
            {text: "function", correct: false},
            {text: "def", correct: true},
            {text: "fun", correct: false},
            {text: "define", correct: false},
        ]
    },
    {
        question: "What is the correct syntax to output the type of a variable in Python?",
        answers: [
            {text: "print(typeOf(x))", correct:false},
            {text: "print(typeof x)", correct:false},
            {text: "print(type(x))", correct:true},
            {text: "print(type of x)", correct:false},
        ],
    },
    
 

  

    {
        question: "Which of these data types is immutable in Python?",
        answers: [
            {text: "list", correct:false},
            {text: "dictionary", correct:false},
            {text: "tuple", correct:true},
            {text: "set", correct:false},
        ],
    },
    {
        question: "Which of the following can be used to create an empty set in Python?",
        answers: [
            {text: "{}", correct:false},
            {text: "[]", correct:false},
            {text: "set()", correct:true},
            {text: "empty()", correct:false},
        ],
    },
    {
        question: "Which of the following is a correct syntax for a conditional statement in Python?",
        answers: [
            {text: "if x > y then:", correct:false},
            {text: "if x > y:", correct:true},
            {text: "if (x > y)", correct:false},
            {text: "if x > y {", correct:false},
        ],
    },
    {
        question: "What is the correct way to declare a list in Python?",
        answers: [
            {text: "list = (1, 2, 3)", correct:false},
            {text: "list = [1, 2, 3]", correct:true},
            {text: "list = {1, 2, 3}", correct:false},
            {text: "list = <1, 2, 3>", correct:false},
        ],
    },
    {
        question: "What is the result of the expression 3 * 2 ** 2 in Python?",
        answers: [
            {text: "12", correct:true},
            {text: "18", correct:false},
            {text: "9", correct:false},
            {text: "6", correct:false},
        ],
    },
    {
        question: "How do you insert a comment in Python?",
        answers: [
            {text: "// This is a comment", correct:false},
            {text: "/* This is a comment */", correct:false},
            {text: "# This is a comment", correct:true},
            {text: "-- This is a comment", correct:false},
        ],
    },
    {
        question: "Which of the following is not a keyword in Python?",
        answers: [
            {text: "lambda", correct:false},
            {text: "pass", correct:false},
            {text: "eval", correct:true},
            {text: "yield", correct:false},
        ],
    },
    {
        question: "What is the output of print(2 == 2.0) in Python?",
        answers: [
            {text: "False", correct:false},
            {text: "True", correct:true},
            {text: "None", correct:false},
            {text: "Error", correct:false},
        ],
    },
   
        {
            question: "Which property is used to change the background color of an element in CSS?",
            answers: [
                {text: "color", correct:false},
                {text: "background-color", correct:true},
                {text: "bgcolor", correct:false},
                {text: "background", correct:false},
            ],
        },
        {
            question: "Which CSS property is used to control the text size?",
            answers: [
                {text: "font-style", correct:false},
                {text: "text-size", correct:false},
                {text: "font-size", correct:true},
                {text: "size", correct:false},
            ],
        },
        {
            question: "How do you make the text bold in CSS?",
            answers: [
                {text: "font-style: bold;", correct:false},
                {text: "font-weight: bold;", correct:true},
                {text: "text-decoration: bold;", correct:false},
                {text: "font-weight: bolder;", correct:false},
            ],
        },
        {
            question: "Which of the following CSS rules is used to center an element horizontally?",
            answers: [
                {text: "margin: center;", correct:false},
                {text: "align: center;", correct:false},
                {text: "margin: 0 auto;", correct:true},
                {text: "text-align: center;", correct:false},
            ],
        },
        {
            question: "What is the default value of the `position` property in CSS?",
            answers: [
                {text: "absolute", correct:false},
                {text: "fixed", correct:false},
                {text: "relative", correct:false},
                {text: "static", correct:true},
            ],
        },
        
        {
            question: "How do you declare a JavaScript variable?",
            answers: [
                {text: "var myVariable;", correct:true},
                {text: "variable myVariable;", correct:false},
                {text: "v myVariable;", correct:false},
                {text: "declare myVariable;", correct:false},
            ],
        },
        {
            question: "Which operator is used to assign a value to a variable in JavaScript?",
            answers: [
                {text: "=", correct:true},
                {text: "==", correct:false},
                {text: "===", correct:false},
                {text: "::", correct:false},
            ],
        },
        {
            question: "How do you write an 'if' statement in JavaScript?",
            answers: [
                {text: "if i == 5 then", correct:false},
                {text: "if (i == 5)", correct:true},
                {text: "if i = 5 then", correct:false},
                {text: "if i == 5", correct:false},
            ],
        },
        {
            question: "Which function is used to parse a string to an integer in JavaScript?",
            answers: [
                {text: "Number()", correct:false},
                {text: "parseInt()", correct:true},
                {text: "parseFloat()", correct:false},
                {text: "String()", correct:false},
            ],
        },
        {
            question: "What is the result of '2' + 2 in JavaScript?",
            answers: [
                {text: "4", correct:false},
                {text: "'22'", correct:true},
                {text: "Error", correct:false},
                {text: "NaN", correct:false},
            ],
        },
    
        {
            question: "Which tag is used to create a hyperlink in HTML?",
            answers: [
                {text: "&lt;link&gt;", correct:false},
                {text: "&lt;a&gt;", correct:true},
                {text: "&lt;href&gt;", correct:false},
                {text: "&lt;hyperlink&gt;", correct:false},
            ],
        },
        {
            question: "Which HTML tag is used to define an internal stylesheet?",
            answers: [
                {text: "&lt;css&gt;", correct:false},
                {text: "&lt;style&gt;", correct:true},
                {text: "&lt;script&gt;", correct:false},
                {text: "&lt;link&gt;", correct:false},
            ],
        },
        {
            question: "Which attribute is used to define the source of an image in HTML?",
            answers: [
                {text: "src", correct:true},
                {text: "href", correct:false},
                {text: "alt", correct:false},
                {text: "link", correct:false},
            ],
        },
        {
            question: "Which tag is used to create a table row in HTML?",
            answers: [
                {text: "&lt;td&gt;", correct:false},
                {text: "&lt;table&gt;", correct:false},
                {text: "&lt;row&gt;", correct:false},
                {text: "&lt;tr&gt;", correct:true},
            ],
        },
        {
            question: "Which HTML element is used for the largest heading?",
            answers: [
                {text: "&lt;heading&gt;", correct:false},
                {text: "&lt;h6&gt;", correct:false},
                {text: "&lt;h1&gt;", correct:true},
                {text: "&lt;title&gt;", correct:false},
            ],
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            answers: [
                {text: "&lt;lb&gt;", correct:false},
                {text: "&lt;br&gt;", correct:true},
                {text: "&lt;break&gt;", correct:false},
                {text: "&lt;hr&gt;", correct:false},
            ],
        },
        {
            question: "How can you create an ordered list in HTML?",
            answers: [
                {text: "&lt;ul&gt;", correct:false},
                {text: "&lt;ol&gt;", correct:true},
                {text: "&lt;list&gt;", correct:false},
                {text: "&lt;dl&gt;", correct:false},
            ],
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            answers: [
                {text: "class", correct:false},
                {text: "style", correct:true},
                {text: "id", correct:false},
                {text: "font", correct:false},
            ],
        },
        {
            question: "What does the &lt;em&gt; tag in HTML stand for?",
            answers: [
                {text: "emphasis", correct:true},
                {text: "embed", correct:false},
                {text: "element", correct:false},
                {text: "empty", correct:false},
            ],
        },
        {
            question: "Which tag is used to define a navigation link in HTML5?",
            answers: [
                {text: "&lt;nav&gt;", correct:true},
                {text: "&lt;menu&gt;", correct:false},
                {text: "&lt;link&gt;", correct:false},
                {text: "&lt;href&gt;", correct:false},
            ],
        },
        
        
        {
            question: "Which property is used to change the text color in CSS?",
            answers: [
                {text: "color", correct:true},
                {text: "font-color", correct:false},
                {text: "text-color", correct:false},
                {text: "background-color", correct:false},
            ],
        },
        {
            question: "Which CSS property controls the spacing between lines of text?",
            answers: [
                {text: "letter-spacing", correct:false},
                {text: "line-spacing", correct:false},
                {text: "line-height", correct:true},
                {text: "text-indent", correct:false},
            ],
        },
        {
            question: "What is the correct way to include external CSS in an HTML document?",
            answers: [
                {text: "&lt;style src='mystyles.css'&gt;", correct:false},
                {text: "&lt;link href='mystyles.css' rel='stylesheet'&gt;", correct:true},
                {text: "&lt;css src='mystyles.css'&gt;", correct:false},
                {text: "&lt;script href='mystyles.css'&gt;", correct:false},
            ],
        },
        {
            question: "Which property is used to make the text italic in CSS?",
            answers: [
                {text: "font-style", correct:true},
                {text: "font-weight", correct:false},
                {text: "text-decoration", correct:false},
                {text: "text-transform", correct:false},
            ],
        },
        {
            question: "How do you add a comment in CSS?",
            answers: [
                {text: "// This is a comment", correct:false},
                {text: "&lt;!-- This is a comment --&gt;", correct:false},
                {text: "/* This is a comment */", correct:true},
                {text: "# This is a comment", correct:false},
            ],
        },
        {
            question: "Which CSS property is used to change the font of text?",
            answers: [
                {text: "font-style", correct:false},
                {text: "font-family", correct:true},
                {text: "font-size", correct:false},
                {text: "font-weight", correct:false},
            ],
        },
        {
            question: "Which CSS property is used to control the layout of a webpage?",
            answers: [
                {text: "display", correct:true},
                {text: "position", correct:false},
                {text: "float", correct:false},
                {text: "align", correct:false},
            ],
        },
        {
            question: "Which value of the `position` property will position an element relative to the viewport?",
            answers: [
                {text: "static", correct:false},
                {text: "absolute", correct:false},
                {text: "relative", correct:false},
                {text: "fixed", correct:true},
            ],
        },
        {
            question: "How do you center an element horizontally using CSS?",
            answers: [
                {text: "text-align: center;", correct:false},
                {text: "margin: 0 auto;", correct:true},
                {text: "padding: center;", correct:false},
                {text: "display: center;", correct:false},
            ],
        },
        {
            question: "What is the CSS property used to create space between the border and the content of an element?",
            answers: [
                {text: "padding", correct:true},
                {text: "margin", correct:false},
                {text: "border-spacing", correct:false},
                {text: "gap", correct:false},
            ],
        },
        
        
        {
            question: "How do you write 'Hello World' in an alert box in JavaScript?",
            answers: [
                {text: "msgBox('Hello World');", correct:false},
                {text: "alert('Hello World');", correct:true},
                {text: "alertBox('Hello World');", correct:false},
                {text: "msg('Hello World');", correct:false},
            ],
        },
        {
            question: "Which method is used to find the length of a string in JavaScript?",
            answers: [
                {text: "length()", correct:false},
                {text: "strlength()", correct:false},
                {text: "len()", correct:false},
                {text: "length", correct:true},
            ],
        },
        {
            question: "How do you declare a JavaScript variable?",
            answers: [
                {text: "var myVariable;", correct:true},
                {text: "variable myVariable;", correct:false},
                {text: "v myVariable;", correct:false},
                {text: "declare myVariable;", correct:false},
            ],
        },
        {
            question: "What will `typeof null` return in JavaScript?",
            answers: [
                {text: "null", correct:false},
                {text: "undefined", correct:false},
                {text: "object", correct:true},
                {text: "string", correct:false},
            ],
        },
        {
            question: "Which function is used to parse a string to an integer in JavaScript?",
            answers: [
                {text: "Number()", correct:false},
                {text: "parseInt()", correct:true},
                {text: "parseFloat()", correct:false},
                {text: "String()", correct:false},
            ],
        },
        {
            question: "Which JavaScript operator is used to compare both value and type?",
            answers: [
                {text: "==", correct:false},
                {text: "===", correct:true},
                {text: "=", correct:false},
                {text: "!=", correct:false},
            ],
        },
        {
            question: "What is the result of '2' + 2 in JavaScript?",
            answers: [
                {text: "4", correct:false},
                {text: "'22'", correct:true},
                {text: "Error", correct:false},
                {text: "NaN", correct:false},
            ],
        },
        {
            question: "Which type of Programming does Python support?",
            answers: [
                {text: " object-oriented programming", correct:false},
                {text: " structured programming", correct:false},
                {text: "functional programming", correct:false},
                {text: "all of the mentioned", correct:true},
            ],
        },
        {
            question: "What JavaScript method is used to convert an object into a JSON string?",
            answers: [
                {text: " JSON.parse()", correct:false},
                {text: " JSON.stringify()", correct:true},
                {text: "eval()", correct:false},
                {text: "toString()", correct:false},
            ],
        },
        {
            question: "What is the purpose of the preventDefault() method in JavaScript?",
            answers: [
                {text: " To prevent a form from submitting", correct:true},
                {text: " To stopt event propagation", correct:false},
                {text: "To redirect to the other page", correct:false},
                {text: "To alert the user", correct:false},
            ],
        },
        {
            question: "let fruits = ['apple', 'banana', 'cherry']; <br> fruits.forEach((fruit, index) =>{ <br>console.log(`${index}: ${fruit}`); });  <br> <br> What is the purpose of the 'forEach()' method in the code? ",
            answers: [
                {text: " To filter the array", correct:false},
                {text: " To map the array", correct:false},
                {text: "To iterate over the array", correct:true},
                {text: "To sort the array", correct:false},
            ],
        },
        {
            question: "person={name:'John Doe', <br> age: 30}; <br> let persontJSON = JSON.stringify(person); <br> console.log(persontJSON); <br> <br> What is the ouput of 'console.log(personJSON)?' ",
            answers: [
                {text: " {name: 'John Doe, age:30}", correct:false},
                {text:' " {name: "John Doe", "age":30}" ', correct:true},
                {text:' [{name: "John Doe", "age":30}] ', correct:false},
                {text: " Undefined", correct:false},
               
            ],
        },




     // ... Other questions
];

const questions = defaultQuestions;

// Fisher-Yates shuffle function to randomize array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    // Shuffle questions and answers
    shuffleArray(questions);
    questions.forEach(question => shuffleArray(question.answers));

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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";

   
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)";
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)";
}

document.addEventListener("DOMContentLoaded", function() {
    startQuiz();
});
// export { startQuiz };






