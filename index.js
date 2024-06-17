import express from "express";
import mongoose from "mongoose";
import CardapioController from "./controllers/CardapioController.js";
import EstoqueController from "./controllers/EstoqueController.js";
import UsersController from "./controllers/UsersController.js";
import ControleController from "./controllers/ControleControllers.js";
import session from "express-session";
import Auth from "./middleware/Auth.js";
import ControleService from "./services/ControleService.js";

const app = express();

app.use(session({
    secret: "limosiasecret",
    cookie: { maxAge: 3600000 },
    saveUninitialized: false,
    resave: false
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/limosia");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use("/", EstoqueController);
app.use("/", CardapioController);
app.use("/", UsersController);
app.use("/", ControleController);

app.get("/", Auth, async (req, res) => {
    try {
        const relatorios = await ControleService.SelectRelatorios();
        const pratosDesperdicados = {};
        const relatorioss = await ControleService.SelectRelatoriosOrdenados();
        const lastEntries = {};
        const desperdicioPorPrato = await ControleService.getDesperdicioPorPrato();
        const labels = ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6", "Semana 7"];
        const datasets = desperdicioPorPrato.map(item => ({
            label: item.prato,
            data: item.desperdicios.map(d => d.desperdicio),
            fill: false,
            borderColor: getRandomColor(),
            tension: 0.1
        }));

        // Somando os pratos desperdiçados por tipo para todos os dias da semana
        relatorios.forEach((relatorio) => {
            if (relatorio.Pratododia) {
                const prato = relatorio.Pratododia;
                if (!pratosDesperdicados[prato]) {
                    pratosDesperdicados[prato] = 0;
                }
                pratosDesperdicados[prato] += relatorio.PratosDesperdicados;
            }
        });

        relatorioss.forEach(entry => {
            const day = entry.diaSemana;
            if (!lastEntries[day] || new Date(entry.dataCriacao) > new Date(lastEntries[day].dataCriacao)) {
                lastEntries[day] = entry;
            }
        });

        // Preparando os dados para o gráfico
        const xValues = Object.keys(pratosDesperdicados).map(value => value.replace(/&#39;/g, "'"));
        const yValues = Object.values(pratosDesperdicados);
        const days = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"];
        const comidaConsumida = [];
        const comidaDesperdicada = [];

        days.forEach(day => {
            if (lastEntries[day]) {
                comidaConsumida.push(lastEntries[day].PratosConsumidos);
                comidaDesperdicada.push(lastEntries[day].PratosDesperdicados);
            } else {
                comidaConsumida.push(0);
                comidaDesperdicada.push(0);
            }
        });

        res.render("index", {
            relatorios,
            pratosDesperdicados,
            xValues,
            yValues,
            days,
            comidaConsumida,
            comidaDesperdicada,
            labels,
            datasets
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao carregar a página inicial.");
    }
});

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
