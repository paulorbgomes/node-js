const express = require("express");
const app = express();

const camadaServico = require("./retornarMensagem");

app.get("/", (req, res) => {
  let ano = req.query.ano;
  let mensagem = camadaServico.retornarMensagem(ano);
  res.json({ mensagem: mensagem });
});

app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node executado em " + data);
});
