function nome_funcao(){
    alert("Login ou senha incorreto!");
}

function somar(a, b){
    var total = a + b;
    alert("O total da soma é " + total);
}

function desconto(a ,b){
    var totalDesc = a - b;
    return totalDesc;
    //document.write("Valor final com desconto: " + totalDesc);
}

var resultTotalDesc = desconto(100, 20);
document.write("Valor final com desconto: " + resultTotalDesc);