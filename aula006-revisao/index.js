// PREPARACAO DO EXPRESS ...
const express = require("express");
const app = express();

// REQUISICOES ...
app.get("/", (req, res) => {
  res.json({ mensagem: "Hello, World!" });
});

// MONITORAMENTO DAS REQUISICOES ...
app.listen(8080, () => {
  let data = new Date();
  console.log("Servidor node iniciado em: " + data);
});
