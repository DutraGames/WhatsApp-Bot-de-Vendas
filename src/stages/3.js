const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "N") {
    banco.db[user].stage = 0;
    return ["Pedido cancelado.😢"];
  }

  if (msg === "S") {
    banco.db[user].stage = 5;

    return stages.step[5].obj.execute(user, "");
  }
  return [
    `Confirme o email: \n ${msg}`,
    "Digite *S* para continuar ou *N* para cancelar",
  ];
}

exports.execute = execute;
