// Camada de Servico ... (separada da API REST)
function efetuarCalculoIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

exports.efetuarCalculoIMC = efetuarCalculoIMC;
