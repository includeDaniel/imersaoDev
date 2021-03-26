var valorEmDolarTexto = prompt("Qual o valor em dolar q voce quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.67
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)