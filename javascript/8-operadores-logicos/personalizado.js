var nota = 8;
var falta = 27;

if((nota < 4) || (falta > 25)){
    document.write("Reprovado: " + nota + ". Falta: " + falta + " <br> ");
}

nota = 8;
falta = 27;


if((nota < 4) && (falta > 25) ){
    document.write("Reprovado: " + nota + ". Falta: " + falta);
}else{
    document.write("Necessário verificar a situação do aluno<br>");
}

var situacao = !false;
document.write("Situação: " + situacao + "<br>");