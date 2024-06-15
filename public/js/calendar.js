const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const menu = {
"Seg": {
name: "Feijão com Arroz e Filé de Frango",
text: `
<div class="ingredient-card">140 gramas de feijão</div>
<div class="ingredient-card">250 gramas de arroz</div>
<div class="ingredient-card">100 gramas de filé de frango</div>
<div class="ingredient-card">40 gramas de alface</div>
<div class="ingredient-card">50 gramas de tomate</div>`,
image: "/images/prato.jpg"
},
"Ter": {
name: "Macarrão com Carne Moída",
text: `
<div class="ingredient-card">150 gramas de macarrão</div>
<div class="ingredient-card">100 gramas de carne moída</div>
<div class="ingredient-card">50 gramas de queijo</div>
<div class="ingredient-card">30 gramas de cenoura</div>
<div class="ingredient-card">60 gramas de brócolis</div>`,
image: "/images/prato.jpg"
},
"Qua": {
name: "Peixe com Batata Doce",
text: `
<div class="ingredient-card">120 gramas de peixe</div>
<div class="ingredient-card">200 gramas de batata doce</div>
<div class="ingredient-card">100 gramas de arroz integral</div>
<div class="ingredient-card">50 gramas de espinafre</div>
<div class="ingredient-card">30 gramas de tomate</div>`,
image: "/images/prato.jpg"
},
"Qui": {
name: "Frango Assado com Quinoa",
text: `
<div class="ingredient-card">200 gramas de frango assado</div>
<div class="ingredient-card">150 gramas de quinoa</div>
<div class="ingredient-card">100 gramas de abobrinha</div>
<div class="ingredient-card">40 gramas de alface</div>
<div class="ingredient-card">50 gramas de pepino</div>`,
image: "/images/prato.jpg"
},
"Sex": {
name: "Carne de Porco com Purê de Batata",
text: `
<div class="ingredient-card">180 gramas de carne de porco</div>
<div class="ingredient-card">150 gramas de purê de batata</div>
<div class="ingredient-card">100 gramas de couve-flor</div>
<div class="ingredient-card">50 gramas de cenoura</div>
<div class="ingredient-card">30 gramas de ervilhas</div>`,
image: "/images/prato.jpg"
}
};

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDay = null;

function renderCalendar(month, year) {
const daysContainer = document.getElementById("calendar-days");
daysContainer.innerHTML = "";

const monthYear = document.getElementById("month-year");
monthYear.innerText = `${monthNames[month]} ${year}`;

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

for (let i = 0; i < firstDay; i++) {
const emptyCell = document.createElement("div");
daysContainer.appendChild(emptyCell);
}

for (let i = 1; i <= daysInMonth; i++) {
const dayCell = document.createElement("div");
const dayOfWeek = weekdays[(firstDay + i - 1) % 7];
dayCell.innerText = i;
if (dayOfWeek === "Dom" || dayOfWeek === "Sáb") {
dayCell.style.pointerEvents = "none";
dayCell.style.color = "c0c0c0";
} else {
dayCell.addEventListener("click", () => selectDay(i, dayOfWeek));
if (selectedDay === i) {
dayCell.classList.add("selected");
}
}
daysContainer.appendChild(dayCell);
}
}

function selectDay(day, weekday) {
const days = document.querySelectorAll(".calendar-days div");
days.forEach(dayCell => dayCell.classList.remove("selected"));

const selectedCell = Array.from(days).find(dayCell => dayCell.innerText == day);
selectedCell.classList.add("selected");

const dishName = document.getElementById("dish-name");
const dayText = document.getElementById("day-text");
const dayImage = document.getElementById("day-image");

if (menu[weekday]) {
dishName.innerText = menu[weekday].name;
dayText.innerHTML = menu[weekday].text;
dayImage.src = menu[weekday].image;
} else {
dishName.innerText = "";
dayText.innerHTML = "Menu não disponível.";
dayImage.src = "/images/prato.jpg";
}

selectedDay = day;
}

document.getElementById("prev-month").addEventListener("click", () => {
currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
renderCalendar(currentMonth, currentYear);
});

document.getElementById("next-month").addEventListener("click", () => {
currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);
