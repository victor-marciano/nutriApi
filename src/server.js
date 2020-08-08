import express from "express";
import { config } from "dotenv";
config();

import Database from "./config/Database";
Database.init();

import viewRoute from "./routes/view";
import apiRoute from "./routes/api";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(viewRoute);
app.use(apiRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor executando na porta http://localhost:${port}`);
});
