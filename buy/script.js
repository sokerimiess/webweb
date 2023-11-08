const ticketQuantityInput = document.getElementById('ticketQuantity');
const selectQuantityButton = document.getElementById('selectQuantity');
const purchaseButton = document.getElementById('purchaseButton');
const totalPrice = document.getElementById('totalPrice');
const seatMap = document.getElementById('seatMap');
const paymentContainer = document.getElementById('paymentContainer');
const selectedSeatsContainer = document.getElementById('selectedSeats');
const selectedSeatsList = document.getElementById('selectedSeatsList');


const rows = 5; // Общее количество рядов
const seatsPerRow = 6; // Количество мест в каждом ряду
const ticketPrice = 10; // Стоимость одного билета, можно изменить


let selectedSeats = [];
let total = 0;

// Генерация плана зала
function generateSeatMap() {
    for (let row = 1; row <= rows; row++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        for (let seat = 1; seat <= seatsPerRow; seat++) {
            const seatElement = document.createElement('div');
            seatElement.classList.add('seat');
            seatElement.textContent = `Ряд ${row}, Место ${seat}`;
            rowElement.appendChild(seatElement);
            seatElement.addEventListener('click', () => selectSeat(seatElement));
        }
        seatMap.appendChild(rowElement);
    }
}


selectQuantityButton.addEventListener('click', () => {
    const quantity = parseInt(ticketQuantityInput.value);
    if (!isNaN(quantity) && quantity > 0) {
        generateSeatMap();
        selectQuantityButton.style.display = 'none';
        seatMap.style.display = 'grid';
        totalPrice.style.display = 'block';
        paymentContainer.style.display = 'block';
        purchaseButton.style.display = 'block';
    }
});

function selectSeat(seatElement) {
    if (seatElement.classList.contains('selected')) {
        seatElement.classList.remove('selected');
        selectedSeats = selectedSeats.filter(seat => seat !== seatElement);
        total -= ticketPrice;
    } else if (selectedSeats.length < parseInt(ticketQuantityInput.value)) {
        seatElement.classList.add('selected');
        selectedSeats.push(seatElement);
        total += ticketPrice;
    }
    totalPrice.textContent = `Сумма к оплате: $${total}`;
    updateSelectedSeatsList();
}

function updateSelectedSeatsList() {
    selectedSeatsList.textContent = selectedSeats.map(seat => seat.textContent).join(', ');
}

purchaseButton.addEventListener('click', () => {
    if (selectedSeats.length === parseInt(ticketQuantityInput.value)) {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardName = document.getElementById('cardName').value;
        const cardCode = document.getElementById('cardCode').value;

        if (cardNumber && cardName && cardCode) {
            // Выполнение покупки билетов
            alert('Билеты успешно куплены!');
        } else {
            alert('Пожалуйста, введите данные карты.');
        }
    } else {
        alert('Пожалуйста, выберите необходимое количество билетов.');
    }
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