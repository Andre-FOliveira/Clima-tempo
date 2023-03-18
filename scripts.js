
let chave = "92559c27a7ada31d5a4a69f4ea980e00"

const data = new Date()

const dia = String(data.getDate()).padStart(2, '0' )
const mes = String(data.getMonth() + 1).padStart(2, '0')
const ano = data.getFullYear()

const hora = String(data.getHours()).padStart(2, '0')
const min = String(data.getMinutes()).padStart(2, '0')
const seg = String(data.getSeconds()).padStart(2, '0')


const dataAtual = `${dia}/${mes}/${ano} - ${hora}:${min}:${seg}`



function colocarNaTela(dados) {
    console.log(dados)
 
    document.getElementById("data").innerHTML = dataAtual
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".flat").src = "https://www.countryflagicons.com/FLAT/64/" + dados.sys.country + ".png"
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".sensacao-termica").innerHTML = "Sensação Termica " + Math.floor(dados.main.feels_like) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade do ar " + dados.main.humidity + "%"
    document.querySelector(".acao").src = "./src/animated/" + dados.weather[0].icon + ".svg"
}

async function buscarCidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json())

    colocarNaTela(dados)

}

function pesquisa() {
    let cidade = document.querySelector(".input-city").value.trim();

    buscarCidade(cidade)
}
