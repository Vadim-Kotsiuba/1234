let currentQuestion = 0;
const questions = [
    {
        question: "Хто ти в світі Fantasy?",
        answers: ["Маг", "Герой", "Дракон", "Ельф", "Орк"],
        result: [
            "Ти – Маг! Ти володієш могутньою магією і захищаєш мир.",
            "Ти – Герой! Ти завжди в бою, готовий до пригод.",
            "Ти – Дракон! Ти великий і могутній, твоя сила вражає.",
            "Ти – Ельф! Легкий і швидкий, ти носиш мудрість і красу в світі.",
            "Ти – Орк! Ти сильно борешся за свою свободу і силу."
        ]
    },
    {
        question: "Яка твоя улюблена стихія?",
        answers: ["Вогонь", "Вода", "Земля", "Повітря", "Темрява"],
        result: [
            "Ти вогняний маг! Ти володієш силою вогню, що знищує все на своєму шляху.",
            "Ти водяний маг! Спокійний і гармонійний, ти керуєш водними потоками.",
            "Ти маг землі! Ти стійкий і сильний, здатний управляти землею.",
            "Ти повітряний маг! Летючий і швидкий, ти володієш свободою і легкістю.",
            "Ти маг темряви! Таємничий і потужний, ти володієш силою нічного світу."
        ]
    },
    {
        question: "Яка твоя улюблена зброя?",
        answers: ["Меч", "Лук", "Чарівна паличка", "Два клинка", "Щит"],
        result: [
            "Ти володієш мечем! Вірний і відважний, ти завжди на передовій.",
            "Ти майстер лука! Ти точний і спокійний, ти завжди вдалий стрілець.",
            "Ти користуєшся чарівною паличкою! Ти маг, який вміє використовувати артефакти.",
            "Ти боець з двома клинками! Рішучий і швидкий, ти борешся з двома зброями.",
            "Ти використовуєш щит! Ти захищаєш себе і своїх друзів у бою."
        ]
    },
    {
        question: "Як ти ставишся до природи?",
        answers: ["Я люблю її", "Я прагну контролювати її", "Я не звертаю увагу", "Я хочу змінити її", "Я боюся природи"],
        result: [
            "Ти любиш природу! Ти поважаєш її і хочеш жити в гармонії з нею.",
            "Ти хочеш контролювати природу! Ти прагнеш використовувати її ресурси для своїх цілей.",
            "Ти не звертаєш увагу на природу! Ти більше думаєш про інші аспекти життя.",
            "Ти хочеш змінити природу! Ти хочеш використовувати свої сили для трансформації навколишнього середовища.",
            "Ти боїшся природи! Ти уникаєш природних явищ і хочеш жити у захищеному місці."
        ]
    },
    {
        question: "Ти віддаєш перевагу якому стилю життя?",
        answers: ["Самотній", "З друзями", "У команді", "Один на один з ворогом", "Лідер групи"],
        result: [
            "Ти самотній. Ти можеш покладатися тільки на себе, твої сили — у незалежності.",
            "Ти з друзями. Ти любиш підтримку і допомогу від близьких.",
            "Ти у команді. Ти здатен працювати в колективі для досягнення спільної мети.",
            "Ти один на один з ворогом. Ти зосереджений і можеш вирішити все самостійно.",
            "Ти лідер групи. Ти береш на себе відповідальність і ведеш інших до перемоги."
        ]
    }
];
let answers = [];
function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const answersContainer = document.getElementById("answers");
    questionContainer.style.animation = "fadeOutUp 0.5s forwards";
    answersContainer.style.animation = "fadeOutUp 0.5s forwards";
    setTimeout(() => {
        if (currentQuestion < questions.length) {
            const question = questions[currentQuestion];
            document.getElementById("question-text").textContent = question.question;
            const buttons = document.querySelectorAll(".answer");
            buttons.forEach((button, index) => {
                button.textContent = question.answers[index];
            });
            questionContainer.style.animation = "fadeIn 1s forwards";
            answersContainer.style.animation = "fadeInUp 1s forwards";
        }
    }, 500);
}
function chooseAnswer(answerIndex) {
    const resultText = questions[currentQuestion].result[answerIndex - 1];
    answers.push(resultText);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}
function showFinalResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("result").style.display = "block";
    let finalResult = "Ти завершив квіз! Ось твої результати:\n\n";
    answers.forEach((answer, index) => {
        finalResult += `Питання ${index + 1}: ${answer}\n`;
    });
    document.getElementById("result-text").textContent = finalResult;
}
function restartQuiz() {
    currentQuestion = 0;
    answers = [];
    document.getElementById("result").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("answers").style.display = "block";
    loadQuestion();
}
window.onload = loadQuestion;
