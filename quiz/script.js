const quizForm = document.getElementById("quiz-form");
const resultModal = document.getElementById("result-modal");
const answersModal = document.getElementById("answers-modal");
const showAnswersButton = document.getElementById("show-answers");
const closeResultModalButton = document.getElementById("close-result-modal");
const closeAnswersModalButton = document.getElementById("close-answers-modal");

const questions = document.querySelectorAll(".question");

const correctAnswers = ["a", "a", "a", "b", "a", "a", "b", "a"];

quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [
        quizForm.q1.value,
        quizForm.q2.value,
        quizForm.q3.value,
        quizForm.q4.value,
        quizForm.q5.value,
        quizForm.q6.value,
        quizForm.q7.value,
        quizForm.q8.value,
    ];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score++;
        }
    });

    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `${score} / 8`;

    resultModal.style.display = "block";
});

showAnswersButton.addEventListener("click", () => {
    questions.forEach((question, index) => {
        const options = question.querySelectorAll("input");
        options.forEach((option) => {
            option.disabled = true;
            if (option.value === correctAnswers[index]) {
                option.parentNode.classList.add("correct-answer");
            } else if (option.checked) {
                option.parentNode.classList.add("wrong-answer");
            }
        });
    });
    answersModal.style.display = "block";
});

closeResultModalButton.addEventListener("click", () => {
    resultModal.style.display = "none";
});

closeAnswersModalButton.addEventListener("click", () => {
    answersModal.style.display = "none";
});

function createStars() {
    const stars = document.querySelector('.stars');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${1 + Math.random() * 2}s`;
        star.style.animationDelay = `${-Math.random() * 2}s`;

        stars.appendChild(star);
    }
}

createStars();