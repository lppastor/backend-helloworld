import express from "express";

const app = express();

app.listen(2500, () => {
  console.log("rodando servidor de app");
});

app.get("/", (req, res) => res.send("Olá Mundo"));
