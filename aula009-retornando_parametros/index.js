const express = require("express");
const app = express();

const calcularIMC = require("./funcaoCalcularIMC");

app.get("/", (req, res) => {
  let peso = req.query.peso;
  let altura = req.query.altura;

  let imc = calcularIMC.funcaoCalcularIMC(peso, altura);
  let status = calcularIMC.retornaStatusIMC(imc);

  res.json({ imc: imc, status: status });
});

app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node.js executado em: " + data);
});
