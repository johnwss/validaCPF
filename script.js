
function validaCpf(meuCpf) {
    //var res = meuCpf.length !=11 ? false : true
    //return res

    if (meuCpf.length != 11) {
        return false
    } else {


        var numerosPrincipais = meuCpf.substring(0, 9)
        //console.log(numerosPrincipais)
        var numerosDigitos = meuCpf.substring(9)
        //console.log(numerosDigitos)


        var soma = 0
        for (var i = 10; i > 1; i--) {
        soma += numerosPrincipais.charAt(10 - i) * i
        }
        //console.log(soma)
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11)
        if(resultado != numerosDigitos.charAt(0)){
            //console.log("resul1",resultado)
            return false
        }


        soma = 0
        numerosPrincipais = meuCpf.substring(0,10)
        for(var k = 11;k > 1;k--){
            soma += numerosPrincipais.charAt(11-k)* k
        }
        //console.log(soma)
        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
        //console.log("resul2",resultado)
        if(resultado != numerosDigitos.charAt(1)){
            return false
        }
            return true
}}


function clicado() {

    document.getElementById("success").style.display = "none"
    document.getElementById("error").style.display= "none"


    var meuCpf = document.getElementById("cpf_digitado").value
    //console.log(meuCpf)


    var resultadoDaValidacao = validaCpf(meuCpf)


    resultadoDaValidacao == true ? document.getElementById("success").style.display = "block"
        : document.getElementById("error").style.display = "block";

    // if(resultadoDaValidacao == true){
    // document.getElementById("success").style.display = "block"
    // }else{
    // document.getElementById("error").style.display = "block"
    // }

}

//document.getElementById("failure").innerHTML = meuCpf
//console.log("false!!")