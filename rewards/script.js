let contactBarDisplayed = false;
let lastScrollPosition = 0;
let isContactFormOpen = false;
const userDataArray = [];

function smoothScrollDown() {
    const scrollStep = 1; // Шаг прокрутки (чем меньше, тем плавнее)
    const scrollInterval = 40; // Интервал времени в миллисекундах

    const scrollDown = () => {
        if (window.scrollY < document.body.clientHeight - window.innerHeight) {
            window.scrollBy(0, scrollStep);
            setTimeout(scrollDown, scrollInterval);
        }
    };

    scrollDown();
}

// Вызывать функцию для плавной прокрутки вниз, например, при загрузке страницы
smoothScrollDown();


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

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const contentHeight = document.querySelector('main').offsetHeight;
    const contactBar = document.getElementById('contactBar');
    const isScrollingDown = scrollY > lastScrollPosition;

    if (isScrollingDown && scrollY + windowHeight >= contentHeight - windowHeight) {
        if (!contactBarDisplayed) {
            contactBar.style.display = 'block';
            contactBar.classList.remove('fade-out');
            contactBarDisplayed = true;
        }
    } else {
        if (contactBarDisplayed) {
            contactBar.classList.add('fade-out');
            contactBarDisplayed = false;
        }
    }

    lastScrollPosition = scrollY;
});

document.getElementById('showContactFormButton').addEventListener('click', function () {
    const contactFormContainer = document.getElementById('contactFormContainer');
    contactFormContainer.style.display = 'block';
    isContactFormOpen = true;
});

document.getElementById('closeContactFormButton').addEventListener('click', function () {
    const contactFormContainer = document.getElementById('contactFormContainer');
    contactFormContainer.style.display = 'none';
    clearForm();
    isContactFormOpen = false;
});

document.getElementById('userContactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    addUserData(name, email);

    const notificationContent = document.getElementById('notificationContent');
    notificationContent.innerHTML = `Thank you, ${name}! We will contact you at ${email}.`;

    notificationContent.style.display = 'block';

    clearForm();

    const contactFormContainer = document.getElementById('contactFormContainer');
    contactFormContainer.style.display = 'none';

    setTimeout(function () {
        notificationContent.style.display = 'none';
    }, 5000);
});

function clearForm() {
    document.getElementById('userContactForm').reset();
}

function addUserData(name, email) {
    userDataArray.push({ name, email });
}

function filterUserDataByName(name) {
    return userDataArray.filter(user => user.name.toLowerCase() === name.toLowerCase());
}

setInterval(function () {
    console.log("Data saved:", userDataArray);
}, 5000);

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    // Обновляем значение ширины строки прогресса
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = scrollPercent + '%';
});
