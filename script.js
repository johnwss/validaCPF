
function validaCpf(meuCpf) {
    //var res = meuCpf.length !=11 ? false : true
    //return res

    if (meuCpf.length != 11) {
        return false
    } else {


        var numerosPrincipais = meuCpf.substring(0, 9)
        console.log(numerosPrincipais)
        var numerosDigitos = meuCpf.substring(9)
        console.log(numerosDigitos)


        var soma = 0

        for (var i = 10; i > 1; i--) {
            soma += numerosPrincipais.charAt(10 - i) * i
        }
        console.log(soma)
        return true
}
}


function clicado() {
    var meuCpf = document.getElementById("cpf_digitado").value
    console.log(meuCpf)


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