document.getElementById("exemplo-um").innerHTML = "Inserir texot no exemplo um";

function exempoDois() {
    var nomeElemento = document.getElementsByName("curso");
    console.log(nomeElemento);

    //ler tamanho do nodelist
    console.log("Tamanho do nodelist: " + nomeElemento.length);

    //Ler elementos do nodelist
    console.log("Elemento da posição 0: " + nomeElemento[0]['value']);
    console.log("Elemento da posição 1: " + nomeElemento[1]['value']);
    console.log("Elemento da posição 2: " + nomeElemento[2]['value']);

    for (i = 0; i < nomeElemento.length; i++) {
        console.log("Posição " + i + ": " + nomeElemento[i]['value']);
    }

}


function exemploTres() {
    var nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag);

    //ler tamanho do HTMLCollection
    console.log("Tamanho do HTMLCollection: " + nomeTag.length);

    //Ler elementos do HTMLCollection
    console.log("Elemento da posição 0: " + nomeTag[0]['innerText']);
    console.log("Elemento da posição 1: " + nomeTag[1]['innerText']);
    console.log("Elemento da posição 2: " + nomeTag[2]['innerText']);

    for (i = 0; i < nomeTag.length; i++) {
        console.log("Posição " + i + ": " + nomeTag[i]['innerText']);
    }


}

function exempoQuatro() {
    var nomeTagLista = document.getElementsByTagName("li");
    console.log(nomeTagLista);
    //ler tamanho do HTMLCollection
    console.log("Tamanho do HTMLCollection: " + nomeTagLista.length);

    //Ler elementos do HTMLCollection
    console.log("Elemento da posição 0: " + nomeTagLista[0]['innerHTML']);
    console.log("Elemento da posição 1: " + nomeTagLista[1]['innerHTML']);
    console.log("Elemento da posição 2: " + nomeTagLista[2]['innerHTML']);

    for (i = 0; i < nomeTagLista.length; i++) {
        console.log("Posição " + i + ": " + nomeTagLista[i]['innerText']);
    }


}

function exemploCinco() {
    var nomeClasse = document.getElementsByClassName("produto");
    console.log(nomeClasse);
    //ler tamanho do HTMLCollection
    console.log("Tamanho do HTMLCollection: " + nomeClasse.length);

    //Ler elementos do HTMLCollection
    console.log("Elemento da posição 0: " + nomeClasse[0]['innerHTML']);
    console.log("Elemento da posição 1: " + nomeClasse[1]['innerHTML']);
    console.log("Elemento da posição 2: " + nomeClasse[2]['innerHTML']);

    for (i = 0; i < nomeClasse.length; i++) {
        console.log("Posição " + i + ": " + nomeClasse[i]['innerText']);
    }


}