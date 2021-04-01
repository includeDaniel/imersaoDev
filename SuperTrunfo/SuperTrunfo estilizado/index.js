var cartaA = {
    nome: "MEW",
    imagem: "https://pokemon.gishan.cc/static/i/pokemon/mew.png",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100
    }
}

var cartaB = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",
    atributos: {
        ataque: 50,
        defesa: 65,
        magia: 68
    }
}

var cartaC = {
    nome: "Torchic",
    imagem: "https://images.nintendolife.com/b8fc9eeb2cf71/great-pokeballs-of-fire.large.jpg",
    atributos: {
        ataque: 60,
        defesa: 30,
        magia: 65
    }
}
var cartaD = {
    nome: "Charmander",
    imagem: "https://i.pinimg.com/originals/ef/2f/9f/ef2f9ff96b0f0601826e830167ce40ea.png",
    atributos: {
        ataque:  50,
        defesa: 44,
        magia: 60
    }
}
var cartaE = {
    nome: "Squirtle",
    imagem: "https://d3u67r7pp2lrq5.cloudfront.net/product_photos/42023475/007-starters-squirtle_400sq.jpg",
    atributos: {
        ataque: 35,
        defesa: 65,
        magia: 65
    }
}
var cartaF = {
    nome: "Treecko",
    imagem: "https://www.dlf.pt/png/list/13/132305_treecko-png.png",
    atributos: {
        ataque: 55,
        defesa: 20,
        magia: 50
    }
}
var cartaG = {
    nome: "Pinplup",
    imagem: "https://i.pinimg.com/originals/04/1e/75/041e7518ec2b102886d5a0ed950f01e3.gif",
    atributos: {
        ataque: 75,
        defesa: 20,
        magia: 60
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaA, cartaB, cartaC, cartaD, cartaE, cartaF, cartaG]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 7)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 7)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 7)
    }
    cartaJogador = cartas[numeroCartaJogador]

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    document.getElementById('btnJogarNovamente').disabled = false
    exibeCartaJogador()
}


function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  
  divCartaJogador.style.backgroundImage =`url(${cartaJogador.imagem})`
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type="radio" name="atributo" value='${atributo}'>${atributo} ${cartaJogador.atributos[atributo]} <br>`
   
    }
    var html = "<div id='opcoes' class='carta-status'>" 
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'

}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    } else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
    document.getElementById('btnJogar').disabled = true

}
function exibeCartaMaquina () {
  var divCartaMaquina = document.getElementById("carta-maquina")
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  
  divCartaMaquina.style.backgroundImage =`url(${cartaMaquina.imagem})`
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += `<p type="text" name="atributo" value='${atributo}'>${atributo} ${cartaMaquina.atributos[atributo]}</p>`
   
    }
    var html = "<div id='opcoes' class='carta-status'>"   
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'

}
function jogarNovamente() {
 
    location.reload()

}
