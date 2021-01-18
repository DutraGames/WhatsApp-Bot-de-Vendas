const banco = require("../banco");

function execute(user, msg) {
  if (msg === "N") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado.😢"];
  }

  if (msg === "S") {
    banco.db[user].stage = 3;
    return ["Digite o enail por favor :"];
  }

  let resumo = "  RESUMO DE SEU PEDIDO: \n";
  let total = 0;
  banco.db[user].itens.forEach((value) => {
    console.log(value);
    resumo += `${value.descricao} ----------------  ${value.preco} \n`;

    total += value.preco;
  });

  resumo += "-------------------------\n";
  resumo += ` Total R$ ${total}`;

  return [resumo, "Para confirmar digite *S* ou para cancelar digite *N* "];
}

exports.execute = execute;
