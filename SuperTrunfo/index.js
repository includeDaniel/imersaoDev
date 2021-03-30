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
    nome: "Naruto",
    atributos: {
      ataque: 99,
      defesa: 100,
      magia: 100,
    }
  }
  var cartaE = {
    nome: "Sasuke",
    atributos: {
      ataque: 100,
      defesa: 80,
      magia: 72,
    }
  }
  var cartaF = {
    nome: "Rick and Morty",
    atributos: {
      ataque: 2,
      defesa: 4,
      magia: 100,
    }
  }
  var cartaG = {
    nome: "Power ranger vermelho",
    atributos: {
      ataque: 95,
      defesa: 86,
      magia: 0,
    }
  }
  var cartaH = {
    nome: "Hulk",
    atributos: {
      ataque: 100000,
      defesa: 100,
      magia: 0,
    }
  }
  var cartaI = {
    nome: "Capitao america",
    atributos: {
      ataque: 95,
      defesa: 75,
      magia: 0,
    }
  }
  var cartaJ = {
    nome: "Kaguya",
    atributos: {
      ataque: 0,
      defesa: 50,
      magia: 10000,
    }
  }
  var cartaK = {
    nome: "Goku",
    atributos: {
      ataque: 8000,
      defesa: 8000,
      magia: 8000,
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
    var numeroCartaMaquina = parseInt(Math.random() * 11)
    cartaMaquina =  cartas[numeroCartaMaquina]
    
    var numeroCartaJogador = parseInt(Math.random() * 11)
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogado = parseInt(Math.random() * 11)
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
