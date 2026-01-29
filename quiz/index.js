const quiz = [
    {
        question: "What is JavaScript?",
        options: ["Logic building", "DB create", "Structure", "Formatting"],
        answer: 0
    },
    {
       question: "What is HTML?",
        options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Multi Language"
        ],
        answer: 1
    },
    {
        question: "What is DOM?",
        options: [
            "Document Oriented Model",
            "Document Object Model",
            "DB created",
            "Structure"
        ],
        answer: 1
    },
    {
        question: "Which language is mainly used for web styling?",
        options: [
            "HTML",
            "PHP",
            "CSS",
            "Python"
        ],
        answer: 0
    },
    {
        question: "What does JS stand for?",
        options: [
            "Java System",
            "Java Source",
            "Just Script",
            "JavaScript"
        ],
        answer: 3
    },
    {
        question: "Which language is used for server-side scripting?",
        options: [
            "CSS",
            "PHP",
            "HTML",
            "XML"
        ],
        answer: 1
    },
    {
        question: "What is the correct file extension for JavaScript?",
        options: [
            ".java",
            ".script",
            ".js",
            ".jsx"
        ],
        answer: 2
    },
    {
       question: "Which of the following is a programming language?",
        options: [
            "HTTP",
            "FTP",
            "URL",
            "Python"
        ],
        answer: 3
    },
    {
      question: "Which language is commonly used for Android development?",
        options: [
            "Swift",
            "Kotlin",
            "Ruby",
            "PHP"
        ],
        answer: 1
    },
    {
          question: "What does SQL stand for?",
            options: [
            "Simple Query Language",
            "Structured Query Language",
            "Standard Question Language",
            "Sequential Query Language"
        ],
        answer: 1
    }
  
];


let index = 0;

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let submit = document.querySelector('#submit');

//Timer for the time remaining
let time = 10 * 60; // 10 minutes in seconds
let timer = document.getElementById("timer");
let timerInterval;


///get radio value useing change event
const answers = new Array(quiz.length).fill(null)

const inputRadio = document.getElementsByName('option')
// console.log(inputRadio)


//all output store into answers array
inputRadio.forEach((ele) => {
    // console.log(ele)
    ele.addEventListener('change', (e) => {
        // console.log(e.target.value)
        // answers.push(e.target.value)
        answers[index] = Number(e.target.value)

    })

})

function showQuestion() 
{
    document.querySelector('#question').textContent = quiz[index].question;
    document.querySelector('#option1').textContent = quiz[index].options[0];
    document.querySelector('#option2').textContent = quiz[index].options[1];
    document.querySelector('#option3').textContent = quiz[index].options[2];
    document.querySelector('#option4').textContent = quiz[index].options[3];


    //checked radio button
    inputRadio.forEach((ele) => {
        if (ele.value == answers[index]) {
            ele.checked = true;
        } else {
            ele.checked = false;
        }
    });


    // Prev button
    if (index == 0) 
    {
        prev.style.display = "none";
    } 
    else 
    {
        prev.style.display = "inline-block";
    }

    if (index == quiz.length - 1) 
    {
        next.style.display = "none";   
        submit.style.display = "inline-block"; 
    } 
    else 
    {
        next.style.display = "inline-block";
        submit.style.display = "none";
    }
}
next.addEventListener('click', () => {
    if (index < quiz.length - 1) 
    {
        index++;
        showQuestion();
    }
});

prev.addEventListener('click', () => {
    if (index > 0) 
    {
        index--;
        showQuestion();
    }
});


//Timer Function
function startTimer() {
    timerInterval = setInterval(() => {
        time--;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        let displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timer.innerHTML = displayTime;

        if (time <= 60) {
            timer.classList.add("text-danger");
        }

        if (time === 0) {
            clearInterval(timerInterval);
            showScore();
        }

    }, 1000);
}


// SUBMIT BUTTON
submit.addEventListener("click", () => {
    clearInterval(timerInterval);
    showScore();
});


function showScore() {
    let score = 0;

    answers.forEach((ele, i) => {
        if (ele === quiz[i].answer) {
            score++;
        }
    });

    // Calculate percentage
    let percentage = Math.round((score / quiz.length) * 100);

    // Show Grade
    let grade = "";
    if (score >= 9) {
        grade = "Excellent";
    } else if (score >= 5) {
        grade = "Good";
    } else {
        grade = "Need Serious Practice";
    }

    let progressClass = '';
    if (percentage >= 80) {
        progressClass = 'bg-success';
    } else if (percentage >= 50) {
        progressClass = 'bg-warning';
    } else {
        progressClass = 'bg-danger';
    }

    document.body.innerHTML = `
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card col-lg-6 shadow">
            <div class="card-header bg-primary text-white text-center">
                Final Quiz Score
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">Your Score</h5>
                <p class="card-text display-4">${score} / ${quiz.length}</p>
                <p class="card-text h4">Percentage: ${percentage}%</p>
                <p class="card-text h5 fw-bold">Grade: ${grade}</p>

              
            
            </div>
        </div>
    </div>
    `;
}


showQuestion();
startTimer()