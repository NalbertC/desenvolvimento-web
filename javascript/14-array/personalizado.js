var frutas = ["Abacate", "Abacaxi", "Amora", "Açaí", "Cereja", "Figo"];

//Contar a quantidade no array
console.log("Quantidade e tipos de frutas: " + frutas.length);

//Acessar o primeiro item do array 
console.log("O primeiro tipo de fruta: " + frutas[0]);
 
//Acessar um item do array
console.log("Acessar um item do array: " + frutas[2]);

//Acessar o ultimo item do array
console.log("Último item do array: " + frutas[frutas.length - 1]);

//Acessar todos os item do array 
console.log("Frutas do Array frutas ");
for(i=0; i < frutas.length; i++){
    console.log( frutas[i]);
}
//Adicionar um item ao final do Array
frutas.push("Maçã");

//Adicionar ao inicio do Array mais um item
frutas.unshift("Kiwi");

//Remover um item do final do Array
frutas.pop();

//Remover do inicio do Array
frutas.shift();

//Remover um item pela posição do índice
// frutas.splice(pos, n);
// A partir da posição (pos) em direção ao final da array
frutas.splice(2, 3);

//Ler o array
frutas.forEach(function(item, indice, array){
    console.log(item, indice);
})


var carros = ["Voyage", "Virtus", "Jetta", "A1", "A2", "A3"];
//Ler o array
carros.forEach(function(item, indice, array){
    console.log(item, indice);
})