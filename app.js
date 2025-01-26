let listaAmigos = [];
let nomeAmigo = "";
let amigoSelecionado = [];

function adicionarAmigo(){
     nomeAmigo = document.querySelector('input').value;
     verificarNome();
     if(nomeAmigo.trim() != ""){
        listaAmigos.push(nomeAmigo);

        document.querySelector('input').value = ""; //comando para limpar um campo do tipo <input> ou <textarea> após ser preenchido
        document.querySelector('#resultado').textContent = ""; //comando para limpar um campo de elementos que não são editáveis como <div>, <span> etc...
        adicionarLista();
     } 
}

