
function validaCpf(meuCpf){
    return 0
    }


function clicado(){
var meuCpf = document.getElementById("cpf_digitado").value
console.log(meuCpf)


var resultadoDaValidacao = validaCpf(meuCpf)


if(resultadoDaValidacao == true){
document.getElementById("success").style.display = "block"
}else{
document.getElementById("error").style.display = "block"
//document.getElementById("failure").innerHTML = meuCpf
//console.log("false!!")
}}