//Acessando através de ID
document.getElementById("exemplo-um").innerHTML = "Inserir texot no exemplo um";

//Acessando através do nome dos elementos
function exempoDois(){
    var nomeElemento = document.getElementsByName("curso");
    console.log(nomeElemento);
}

//Acessando através da Tag
function exemploTres(){
    var nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag);
}

//Acassando através da classe
function exempoQuatro(){
    var nomeTagLista = document.getElementsByTagName("li");
    console.log(nomeTagLista);
}