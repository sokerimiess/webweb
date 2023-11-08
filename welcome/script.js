let isContactFormOpen = false;
const userDataArray = [];

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

let contactBarDisplayed = false;
let lastScrollPosition = 0;

function handleContactBarVisibility() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const contentHeight = document.body.clientHeight; // Получаем высоту всей страницы
    const contactBar = document.getElementById('contactBar');

    if (scrollY + windowHeight >= contentHeight) {
        // Пользователь достиг конца страницы
        if (!contactBarDisplayed) {
            contactBar.style.transform = 'translateY(0)';
            contactBar.style.opacity = '1';
            contactBarDisplayed = true;
        }
    } else {
        // Пользователь находится не в конце страницы
        if (contactBarDisplayed) {
            contactBar.classList.add('fade-out');
            contactBarDisplayed = false;
        }
    }

    lastScrollPosition = scrollY;
}

window.addEventListener('scroll', handleContactBarVisibility);

// Периодически сохраняем данные
setInterval(function () {
    // Simulate data saving
    console.log("Data saved:", userDataArray);
}, 5000);

function handleScrollElements() {
    const scrollElements = document.querySelectorAll('.scroll-fade-in');
    const delays = {
        '.text-container': 200, // Нет задержки для текста
        '.yoda-container': 500, // Задержка 1 секунда для элемента yoda
        '.robot': 3000, // Задержка 3 секунды для элемента robot
        '.fon': 2500, // Задержка 3 секунды для элемента robot
        '.quiz': 500, // Задержка 3 секунды для элемента robot
    };

    scrollElements.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible && !element.classList.contains('active')) {
            setTimeout(function () {
                element.classList.add('active');
            }, delays['.' + element.classList[0]]);
        }
    });
}

window.addEventListener('scroll', function () {
    handleContactBarVisibility();
    handleScrollElements();
});

const showContactFormButton = document.getElementById('showContactFormButton');

// Добавим обработчик события клика к кнопке
showContactFormButton.addEventListener('click', function () {
    const contactFormContainer = document.getElementById('contactFormContainer');
    contactFormContainer.style.display = 'block';
    isContactFormOpen = true;
});

// JavaScript to handle the contact form
const contactFormContainer = document.getElementById('contactFormContainer');
const closeContactFormButton = document.getElementById('closeContactFormButton');

closeContactFormButton.addEventListener('click', function () {
    contactFormContainer.style.display = 'none';
});