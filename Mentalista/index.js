
function Mentalista() {

	var max = 5	
	var min = 15
	var numeroSecreto = Math.floor(Math.random() * (max - min + 1) + min)
	var tentativas = 3

	while (tentativas > 0 ) {
		var chute = parseInt(prompt("Digite um número entre 0 e 10"))
		if(numeroSecreto == chute) {
				alert("Acertou")
				break;
		} else if(chute > numeroSecreto) {
				alert("O número secreto é menor")
				tentativas-- 
		}	else if(chute < numeroSecreto) {
				alert("O número secreto é maior")
				tentativas--
		}
		
	}

	if (chute != numeroSecreto) {
		alert("Suas tentativas acabaram o número secreto era  " + numeroSecreto)
	}
}