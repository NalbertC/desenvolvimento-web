var total = 0;
document.write("Valor inicial da variável total: " + total + "<br><br>");


for(i= 1; i<=5; i++){
    document.write("Valor da variável i na " + i + "ª interação:  " + i + "<br>");

    total = total + 2;
    document.write("Valor da variável total depois da " + i + "ª interação: " + total + "<br><br>");

}