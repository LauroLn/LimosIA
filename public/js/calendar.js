const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const menu = {
        "Seg": {
          name: "Arroz, Feijão e Frango Grelhado",
          text: `
            <div class="ingredient-card">Arroz branco cozido: 80g</div>
            <div class="ingredient-card">Feijão cozido: 100g</div>
            <div class="ingredient-card">Filé de frango grelhado: 120g</div>
          `,
          image: "/images/segunda.jpg"
        },
        "Ter": {
          name: "Macarrão à Bolonhesa",
          text: `
            <div class="ingredient-card">Macarrão cozido: 100g</div>
            <div class="ingredient-card">Carne moída: 60g</div>
            <div class="ingredient-card">Molho de tomate: 150g</div>
          `,
          image: "/images/terca.jpeg"
        },
        "Qua": {
          name: "Sopa de Legumes com Frango",
          text: `
            <div class="ingredient-card">Caldo de legumes: 200ml</div>
            <div class="ingredient-card">Frango desfiado: 80g</div>
            <div class="ingredient-card">Cenoura: 50g</div>
            <div class="ingredient-card">Abobrinha: 30g</div>
            <div class="ingredient-card">Batata: 20g</div>
          `,
          image: "/images/quarta.jpeg"
        },
        "Qui": {
          name: "Frango Assado com Quinoa",
          text: `
            <div class="ingredient-card">Frango assado: 200g</div>
            <div class="ingredient-card">Quinoa: 150g</div>
            <div class="ingredient-card">Abobrinha: 100g</div>
            <div class="ingredient-card">Alface: 40g</div>
            <div class="ingredient-card">Pepino: 50g</div>
          `,
          image: "/images/quinta.avif"
        },
        "Sex": {
          name: "Carne de Porco com Purê de Batata",
          text: `
            <div class="ingredient-card">Carne de porco: 180g</div>
            <div class="ingredient-card">Purê de batata: 150g</div>
            <div class="ingredient-card">Couve-flor: 100g</div>
            <div class="ingredient-card">Cenoura: 50g</div>
            <div class="ingredient-card">Ervilhas: 30g</div>
          `,
          image: "/images/sexta.jpeg"
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
