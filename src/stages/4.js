const banco = require("../banco");

function execute(user, msg) {
  banco.db[user].stage = 0;
  return [
    "Obrigada pela preferência!!😁😁",
    "Aguarde, seu pedido chegará em breve!",
    "Mais informações ligue para 0000-0000",
  ];
}

exports.execute = execute;
