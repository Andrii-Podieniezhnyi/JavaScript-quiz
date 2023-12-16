import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
import { getDatabase, ref, get, push, update } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js';
import { questions } from "./questions.js";


const firebaseConfig = {
    apiKey: "AIzaSyCOkdoumRNXWYAOx2C04c1uVxAEbJjy7yY",
    authDomain: "js-quiz-407313.firebaseapp.com",
    databaseURL: "https://js-quiz-407313-default-rtdb.firebaseio.com",
    projectId: "js-quiz-407313",
    storageBucket: "js-quiz-407313.appspot.com",
    messagingSenderId: "553230342677",
    appId: "1:553230342677:web:c5076ad9f3ae28edd8cc1c"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);



let $ = document;

const time = $.querySelector('.time');
const questionBox = $.querySelector('.question');
const answerCotainer = $.querySelector('.answer-cotainer');
const firstQuez = $.querySelector('.first');
const lastQuez = $.querySelector('.last');
const nextQuestion = $.querySelector('.next-Question');
const statusTime = $.querySelector('.status-time');
const endQuez = $.querySelector('.end-Quez');
const restartQuez = $.querySelector('.restart-quez');
const resultRight = $.querySelector('.result-right');
const ofQuestion = $.querySelector('.of-question');
const containerQuestion = $.querySelector('.container');
const resultBox = $.querySelector('.result-box');
const resultImage = $.querySelector('.result-image');
const message = $.querySelector('.message-text');
const scoreboardContainer = $.querySelector('.scoreboard_container');
const scoreboard = $.querySelector('.scoreboard')
const scoreboardBtn = $.querySelector('.scoreboard__btn');
const regForm = $.querySelector('.registration_form');




let firstQuezCount = 1;
let lastQuezCount = 1;
let rightQuez = 0;
let timer;
let index = 0;
let timeCount = 20;




// Реєстрація учасника

let userKey;
    
quizForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Зупинка дефолтної поведінки форми

  
  const userName = document.getElementById('userName').value;
  const userPath = ref(database, 'users');

  
  push(userPath, {
    name: userName
  }).then((snapshot) => {
    console.log('Дані успішно оновлені або додані');
    userKey = snapshot.key;
        console.log(userKey);


  }).catch((error) => {
    console.error('Помилка оновлення або додавання даних:', error);
  });


    regForm.classList.add('hide-reg_form');
    containerQuestion.classList.remove('disable_question_container');
    createTemplate(selectedQuestions);
    $.querySelector('.autor').style.display = 'none';
});
  




function saveQuizResult(result) {
    if (userKey) {
        const userResultsRef = ref(database, `users/${userKey}`);
        update(userResultsRef, {
            result: result
        }).then(() => {
            console.log('Результат квізу збережено для користувача з ключем', userKey);
        }).catch((error) => {
            console.error('Сталася помилка при збереженні результату квізу:', error);
        });
    } else {
        console.error('Ключ користувача не існує');
    }
}




// Генеруємо 20 випадкових індексів
function generateRandomIndexes(totalQuestions, quantity) {
    const indexes = [];
    while (indexes.length < quantity) {
        const randomIndex = Math.floor(Math.random() * totalQuestions);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes;
}

// Отримуємо 20 випадкових питань
const randomIndexes = generateRandomIndexes(questions.length, 20);
const selectedQuestions = randomIndexes.map(index => questions[index]);











function createTemplate(selectedQuestions) {
    answerCotainer.innerHTML = ''
    questionBox.innerHTML = ''

    let quezTemplate = `<p>What will be the output of the code below?</p><p><span class='console'>console</span><span class='dot'>.</span><span class='log'>log</span>${selectedQuestions[index].question}</p>`

    let answerOption = `<p class="answer">${selectedQuestions[index].options[0]}</p>
    <p class="answer">${selectedQuestions[index].options[1]}</p>
    <p class="answer">${selectedQuestions[index].options[2]}</p>
    <p class="answer">${selectedQuestions[index].options[3]}</p>`

    questionBox.insertAdjacentHTML('beforeend', quezTemplate);
    answerCotainer.insertAdjacentHTML('beforeend', answerOption);

    firstQuez.innerHTML = index + 1;
    lastQuez.innerHTML = selectedQuestions.length;

    timerContHandler()
    let answer = $.querySelectorAll('.answer');

    
    for (let i = 0; i < answer.length; i++) {
        answer[i].addEventListener('click', function() {
            checkAnswer(this);
        });
    }
    
}


function checkAnswer(answer) {

    clearInterval(timer)
    let answerClick = answer.innerHTML;
    let answerMain = selectedQuestions[index].answer;
    let allAnswerChild = answerCotainer.children.length;
    nextQuestion.classList.add('show-next');

    if (answerClick === answerMain) {
        answer.classList.add('rightAnswer');
        rightQuez++
        updateScore(rightQuez);
    } else {
        answer.classList.add('noAnswer');
        for (let i = 0; i < allAnswerChild; i++) {
            if (answerCotainer.children[i].innerHTML === answerMain) {
                answerCotainer.children[i].classList.add('rightAnswer')
            }
        }
    }
    for (let i = 0; i < allAnswerChild; i++) {
        answerCotainer.children[i].classList.add('disable');
    }
}



function timerContHandler() {
    timer = setInterval(function () {
        timeCount--
        time.innerHTML = timeCount;

        if (timeCount < 10) {
            time.innerHTML = '0' + timeCount;
        }
        if (timeCount == 0) {
            clearInterval(timer);
            statusTime.style.background = 'rgb(199, 36, 14 , .8)';
            nextQuestion.classList.add('show-next');

            let answerMain = selectedQuestions[index].answer;
            let allAnswerChild = answerCotainer.children.length;

            for (let i = 0; i < allAnswerChild; i++) {
                if (answerCotainer.children[i].innerHTML === answerMain) {
                    answerCotainer.children[i].classList.add('rightAnswer');
                }
            }

            for (let i = 0; i < allAnswerChild; i++) {
                answerCotainer.children[i].classList.add('disable');
            }

        } else {
            statusTime.style.background = 'rgb(145, 53, 250)';
        }
    }, 1000)
}

function nextQuestionHandler() {
    index++
    timeCount = 21;
    
    setTimeout(timer, 1000);

    if (index == 20) {
        nextQuestion.classList.remove('show-next')
        endQuez.classList.add('show-end');
    } else {
        nextQuestion.classList.remove('show-next');
        createTemplate(selectedQuestions);
    }
}

function updateScore(right) {

    if (right == 20) {
        resultImage.setAttribute('src', 'images/trophy.gif')
        message.innerHTML = 'Congrats!'
    } else if (right > 1 && right < 20) {
        resultImage.setAttribute('src', 'images/explose.gif')
        message.innerHTML = 'Nice'
    } else if (right == 1) {
        resultImage.setAttribute('src', 'images/explose.gif')
        message.innerHTML = 'Sorry'
    } else {
        resultImage.setAttribute('src', 'images/explose.gif')
        message.innerHTML = 'You did not get any points!'
    }

    resultRight.innerHTML = rightQuez
    ofQuestion.innerHTML = selectedQuestions.length

}

function showResultQuez() {
    containerQuestion.classList.add('hide-question');
    resultBox.classList.add('show-result');
    saveQuizResult(resultRight.innerHTML);
}

function showScoreboard() {
    resultBox.classList.remove('show-result');
    scoreboardContainer.classList.remove('hide-scoreboard_container'); 
    const usersRef = ref(database, 'users');

    // Отримання всіх даних з розділу 'users'
    get(usersRef).then((snapshot) => {
        // Отримання всіх користувачів (snapshot.val() містить всі дані)
        const users = snapshot.val();

        // Сортування користувачів за кількістю балів (результатом квізу)
        const sortedUsers = Object.entries(users).sort(([, userDataA], [, userDataB]) => {
            const resultA = userDataA.result ? userDataA.result || 0 : 0;
            const resultB = userDataB.result ? userDataB.result || 0 : 0;
            return resultB - resultA; // Сортування у зворотньому порядку (від найвищого до найнижчого результату)
        });

        // Створення HTML для таблиці з нумерацією та відсортованими даними
        let tableHTML = '<table border="1"><tr><th>#</th><th>Name</th><th>Result</th></tr>';

        // Додавання рядків до таблиці з відсортованими даними
        sortedUsers.forEach(([userId, userData], index) => {
            const userName = userData.name;
            const userResult = userData.result ? userData.result || 'No result' : 'No result';

            // Додавання рядка до таблиці з номером, ім'ям та результатом
            tableHTML += `<tr><td>${index + 1}</td><td>${userName}</td><td>${userResult}</td></tr>`;
        });

        tableHTML += '</table>';

        // Виведення таблиці на сторінку
        scoreboard.innerHTML = tableHTML;

    }).catch((error) => {
        console.error('Сталася помилка при отриманні даних користувачів:', error);
    });

    
}

function restartQuezHandler() {
    location.reload()
}

nextQuestion.addEventListener('click', nextQuestionHandler);
endQuez.addEventListener('click', showResultQuez);
restartQuez.addEventListener('click', restartQuezHandler);
scoreboardBtn.addEventListener('click', showScoreboard);

if ($.querySelector('.back_to_result-box') != null) {
    $.querySelector('.back_to_result-box').addEventListener('click', () => {
        scoreboardContainer.classList.add('hide-scoreboard_container');
        resultBox.classList.add('show-result');
    })    
}