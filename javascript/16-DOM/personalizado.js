//Acessando através de ID
document.getElementById("exemplo-um").innerHTML = "Inserir texot no exemplo um";
//Acessa um seletor
//Recebe um elemento

//Acessando através do nome dos elementos
function exempoDois(){
    var nomeElemento = document.getElementsByName("curso");
    //Recebe vários elementos
    console.log(nomeElemento);
}

//Acessando através da Tag
function exemploTres(){
    var nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag);
}

function exempoQuatro(){
    var nomeTagLista = document.getElementsByTagName("li");
    console.log(nomeTagLista);
}

//Acessar através da classe
function exemploCinco(){
    var nomeClasse = document.getElementsByClassName("produto");
    console.log(nomeClasse);
}