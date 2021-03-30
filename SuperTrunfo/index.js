var cartaA = {
    nome: "Seiya de Pegasos",
    atributos: {
      ataque: 80,
      defesa: 60,
      magia: 90
    }
  }
  
  var cartaB = {
    nome: "Bulbasauro",
    atributos: {
      ataque: 70,
      defesa: 65,
      magia: 85
    }
  }
  
  var cartaC = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  var cartaD = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  var cartaE = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  var cartaF = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  var cartaG = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  var cartaH = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  var cartaI = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  var cartaJ = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  var cartaK = {
    nome: "Lorde Darth Vader",
    atributos: {
      ataque: 88,
      defesa: 62,
      magia: 90,
    }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaA, cartaB, cartaC, cartaD, cartaE, cartaF, cartaG, cartaH, cartaI, cartaJ, cartaK]
  


  function exibirCarta(id, carta) {

    var area = document.getElementById(id)

    area.innerHTML = `
      <div class="carta-conteudo">
        <h3>${carta.nome}</h3>
        <ul>
            <li>Ataque <i>${carta.atributos.ataque}</i> </li>
            <li>Defesa <i>${carta.atributos.defesa}</i> </li>
            <li>Magia <i>${carta.atributos.magia}</i> </li>
        </ul>
      </div>   
    `;

  }



  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina =  cartas[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogado = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    document.getElementById('btnJogarNovamente').disabled = false
    exibirOpcoes()
    exibirCarta('minhaCarta', cartaJogador)
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos) { 
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'> " + atributo
    }
    opcoes.innerHTML = opcoesTexto
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++) {
      if(radioAtributo[i].checked) {
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar() {

    exibirCarta('cartaMaquina', cartaMaquina)

    var atributoSelecionado = obtemAtributoSelecionado()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      alert('Venceu a máquina')
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert("Você perdeu para a máquina")
      }else{
        alert("Empatou!")
      }
      document.getElementById('btnJogar').disabled = true
      document.getElementById('btnJogarNovamente').disabled = false
    
  }
  function jogarNovamente() {
 
      location.reload()

  }
