const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = "subscribers.json";

const readSubscribers = () => {
    if (!fs.existsSync(FILE_PATH)) return [];
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
};

const saveSubscriber = (email) => {
    const subscribers = readSubscribers();
    if (subscribers.includes(email)) return false; // Evita duplicados

    subscribers.push(email);
    fs.writeFileSync(FILE_PATH, JSON.stringify(subscribers, null, 2));
    return true;
};

app.post("/subscribe", (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
        return res.status(400).json({ message: "Correo inválido" });
    }

    if (saveSubscriber(email)) {
        res.json({ message: "¡Te has suscrito con éxito!" });
    } else {
        res.status(400).json({ message: "Este correo ya está registrado" });
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});