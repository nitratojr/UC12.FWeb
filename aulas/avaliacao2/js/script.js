// Seleciona os elementos do HTML que serão manipulados via JavaScript
let imgPokemon = document.querySelector("#fotopoke");
let formPoke = document.querySelector("#form");
let inputPoke = document.querySelector("#input");
let idPoke = document.querySelector("#idpokemon");
let nomepoke = document.querySelector("#nomepokemon");
let tipo1Poke = document.querySelector("#tipo1");
let tipo2Poke = document.querySelector("#tipo2");
let habilidadePoke = document.querySelector("#habilidades");
let pesoPoke = document.querySelector("#peso");
let alturaPoke = document.querySelector("#altura");
let btnProximo = document.querySelector("#btnproximo");
let btnAnterior = document.querySelector("#btnvoltar");

// Variável que armazena o número atual do Pokémon exibido
let numeroPokedex = 1;
function verificaImagem(urlGif, urlImg) {
    imgPokemon.src = urlGif; // Tenta carregar a versão animada (showdown)

    imgPokemon.onerror = function () { // Se a imagem falhar ao carregar...
        this.onerror = null;
        this.src = urlImg; // ...usa a imagem padrão (não animada)
    };
    return;
};
function tocarSom(som) {
    som = new Audio(som); // Cria um novo objeto de som
    som.play(); // Toca o som
};



const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); // Faz uma requisição para a API
    const data = await response.json(); // Converte a resposta em JSON
    return data; // Retorna os dados do Pokémon
}

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon); // Busca os dados da API

    // Define a imagem do Pokémon
    verificaImagem(dataPokemon.sprites.other.showdown.front_default, dataPokemon.sprites.front_default);

    // Atualiza os dados no HTML
    nomepoke.innerHTML = dataPokemon.name;
    idPoke.innerHTML = dataPokemon.id;
    tipo1Poke.innerHTML = dataPokemon.types[0].type.name;

    // Verifica se há um segundo tipo
    tipo2Poke.innerHTML = dataPokemon.types[1]?.type.name || "";

    habilidadePoke.innerHTML = dataPokemon.abilities[0].ability.name;

    // Converte e exibe o peso e altura (em kg e metros)
    pesoPoke.innerHTML = (dataPokemon.weight / 10).toFixed(2) + " kg";
    alturaPoke.innerHTML = (dataPokemon.height / 10).toFixed(2) + " m";

    // Toca o som do Pokémon
    tocarSom(dataPokemon.cries.legacy);
}



formPoke.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recarregar a página
    showPokemon(inputPoke.value.toLowerCase()); // Mostra o Pokémon digitado (converte para minúsculas)
});

btnAnterior.addEventListener("click", (event) => {
    if (numeroPokedex > 1) {
        numeroPokedex = numeroPokedex - 1;
    }
    showPokemon(numeroPokedex); // Exibe o Pokémon anterior
});

btnProximo.addEventListener("click", (event) => {
    if (numeroPokedex < 1000) {
        numeroPokedex = numeroPokedex + 1;
    }
    showPokemon(numeroPokedex); // Exibe o próximo Pokémon
});