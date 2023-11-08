document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const resultModal = document.getElementById("resultModal");
    const resultText = document.getElementById("resultText");
    const resultImage = document.getElementById("resultImage");

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

    const closeModal = () => {
        resultModal.style.display = "none";
    };

    document.querySelector(".close").addEventListener("click", closeModal);

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    document.getElementById("submitBtn").addEventListener("click", function () {
        const formData = new FormData(quizForm);
        let score = 0;

        for (const entry of formData) {
            const question = entry[0];
            const answer = entry[1];

            if (question === "q1" && answer === "luke") {
                score++;
            } else if (question === "q2" && answer === "vader") {
                score++;
            } else if (question === "q3" && answer === "yoda") {
                score++;
            }
        }

        let result = "";

        if (score >= 2) {
            result = "Вы - Джедай!";
            resultImage.innerHTML = '<img src="../tools/jedi.png" alt="Джедай">';
        } else {
            result = "Вы - Ситх!";
            resultImage.innerHTML = '<img src="../tools/sith.png" alt="Ситх">';
        }

        resultText.textContent = result;
        resultModal.style.display = "block";
    });
});
