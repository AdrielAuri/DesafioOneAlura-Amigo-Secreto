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

function verificarNome(){
   //trim é um método que remove espaços desnecessários de uma string como o começo e final de uma palavra ou frase
   if(nomeAmigo.trim() == ""){
       alert("Por favor, insira um nome no campo indicado.");
   } 
}
