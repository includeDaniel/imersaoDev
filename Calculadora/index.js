

let operacao = parseInt(prompt("Digite 1 para divisão, 2 para multiplicação, 3 para soma e 4 para subtração"))
let primeiroValor = parseInt(prompt("Digite  primeiro valor:"))
let segundoValor = parseInt(prompt("Digite o segundo valor"))

  switch (operacao) {
    case 1:
      let resultadoDivisao = primeiroValor / segundoValor
      alert(" " + primeiroValor + " / " + segundoValor  + " = " + resultadoDivisao + "  ")
      break;
    case 2:
      let resultadoMultiplicacao = primeiroValor * segundoValor
      alert(" " + primeiroValor + " x " + segundoValor  + " = " + resultadoMultiplicacao + "")
      break;
    case 3:
      let resultadoSoma = primeiroValor + segundoValor
      alert(" " + primeiroValor + " + " + segundoValor  + " = " + resultadoSoma + "") 
      break;
    case 4:
      let resultadoSubtracao = primeiroValor - segundoValor
      alert(" " + primeiroValor + " - " + segundoValor  + " = " + resultadoSubtracao + "")
      break;
    default:  
      alert("<h2>Tente Novamente</h2>")
  }

