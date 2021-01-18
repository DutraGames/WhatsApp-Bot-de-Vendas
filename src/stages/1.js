  
const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg) {
  if (msg === "N" ) {
    banco.db[user].stage = 0;
    return ["Pedido cancelado.😢"];
  }

  if (msg === "S") {
    banco.db[user].stage = 2;
    return ["Estamos fechando seu pedido, ok?"];
  }

  if (!cardapio.menu[msg]) {
    return [
      "Código inválido, digite corretamente",
      "Digite *S* para finalizar ou *N* para cancelar",
    ];
  }

  banco.db[user].itens.push(cardapio.menu[msg]);

  return [
    `Item (${cardapio.menu[msg].descricao}) adiconado com sucesso`,
    "Digite *S* para finalizar ou *N* para cancelar",
  ];
}

exports.execute = execute;