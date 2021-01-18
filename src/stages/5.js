const banco = require("../banco");
let estagioInterno = 0;

function execute(user, msg) {
  //banco.db[user].stage = 0;

  if (estagioInterno === 1) {
    banco.db[user].stage = 4;

    return stages.step[4].obj.execute(user, "");
  }
  if (msg === "1") {
    estagioInterno++;
    return ["Digite o valor que irá depositar: "];
  }
  return ["Escolha a forma de pagamento:\n*1* - Depósito"];
}

exports.execute = execute;