// API REST ...
const express = require("express");
const app = express();

const calculadoraIMC = require("./calculadoraIMC");

app.get("/", (req, res) => {
  let altura = req.query.altura;
  let peso = req.query.peso;

  let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);

  res.json({ imc: imc });
});

app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor Node iniciado em: " + data);
});
