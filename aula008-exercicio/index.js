const express = require("express");
const app = express();

const converterMoeda = require("./converterRealDolar");

app.get("/", (req, res) => {
  let real = req.query.real;
  let dolar = converterMoeda.converterRealDolar(real);
  res.json({ dolar: dolar.toFixed(2) });
});

app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node executado em " + data);
});
