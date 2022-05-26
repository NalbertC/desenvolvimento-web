//Objeto literal
var cadeira = {
    cor: "Preto",
    altura: 118,
    largura: 74,
    profundidade: 64,
};

document.write("Cor da cadeira " + cadeira.cor + "<br><br>");
document.write("Altura da cadeira " + cadeira.altura + "<br><br>");
document.write("Largura da cadeira "+ cadeira.largura + "<br><br>");
document.write("Profundidade da cadeira " + cadeira.profundidade + "<br><br>");

cadeira.cor = "Branco";
document.write("Cor da cadeira " + cadeira.cor + "<br><br>");

cadeira.peso = 17;
document.write("Peso da cadeira " + cadeira.peso + "<br><br>");
delete cadeira.profundidade;
document.write("Profundidade da cadeira " + cadeira.profundidade + "<br><br><hr>");

//Objeto através do new
var mesa = new Object();
mesa.cor = "Madeira";
mesa.largura = 220;
document.write("Cor da mesa " + mesa.cor + "<br><br>");

document.write("Largura da mesa " + mesa.largura + " cm<br><br>");