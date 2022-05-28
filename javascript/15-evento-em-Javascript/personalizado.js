function carConteudo() {
    document.getElementById("conteudo").innerHTML = "Lorem ipsum, dolorsit amet consectetur adipisicing elit. Accusantium modi pariatur, autem fugiat labore est? Repudiandae aspernatur numquam consequatur eligendi aut optio ex commodi,aliquam eos recusandae nisi modi dolorem?";
}

function mouseOver(){
    document.getElementById("mouseAlt").innerHTML = "<b>Retire o mouse</b>";
}

function mouseOut(){
    document.getElementById("mouseAlt").innerHTML = "<b>Passe o mouse</b>";
}

function converterTexto(){
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
}

function validarSenha(){
    var senha = document.getElementById("senha").value;

    if(senha == "" || senha.length <= 5){
        document.getElementById("errosenha").innerHTML = "<span class='erroSenha' >Preencha o campo senha com o minímo 6 caracteres</span>";
    }else{
        document.getElementById("errosenha").innerHTML = "<span class='senhavalida'>Senha válida</span>";
    }

}