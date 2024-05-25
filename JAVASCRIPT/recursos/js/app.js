const  cabecalho = document.getElementById("cabecalho")

console.log(cabecalho.value)

function pegarDadosDoAluno(){
const nome =   document.getElementById("nome").value
const nota1 =   document.getElementById("nota1")

return nome
}

let pegarDado = pegarDadosDoAluno()

console.log("Nome",pegarDado)