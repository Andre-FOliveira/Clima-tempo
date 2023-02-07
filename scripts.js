
let chave = "92559c27a7ada31d5a4a69f4ea980e00"


function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".flat").src = "https://www.countryflagicons.com/FLAT/64/" + dados.sys.country + ".png"
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".sensacao-termica").innerHTML = "Sensação Termica " + Math.floor(dados.main.feels_like) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade do ar " + dados.main.humidity + "%"

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
