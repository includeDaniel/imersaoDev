function adicionarFilme() {
    var campoFilmeFavorito =  document.querySelector('#filme')
    console.log(campoFilmeFavorito)
    var filmeFavorito = campoFilmeFavorito.value
    
     if(filmeFavorito.endsWith(".jpg")){
       verificaFoto(filmeFavorito)
     } else {
       verificaVideo(filmeFavorito)
     }
     campoFilmeFavorito.value = ""
   }
   function verificaFoto(filme) {
       var listarFilmes = document.querySelector('#listarFilmes')
       var  elementoFilme = "<img src=" + filme + ">"
       listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme 
   }
   function verificaVideo(video) {
     var listarVideo = document.querySelector('#listarFilmes')
     var  elementoVideo = "<iframe href=" + video + "</iframe>"
     listaFilmes.innerHTML = listaFilmes.innerHTML + elementoVideo 
   }
   