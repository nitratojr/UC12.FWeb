let imgPokemon = document.querySelector("#fotopoke");

let formPoke = document.querySelector("#form");

let inputPoke = document.querySelector("#input");

let idPoke = document.querySelector("#idpokemon")

let nomepoke = document.querySelector("#nomepokemon");

let tipo1Poke = document.querySelector("#tipo1");

let tipo2Poke = document.querySelector("#tipo2");

let habilidadePoke = document.querySelector("#habilidades");

let pesoPoke = document.querySelector("#peso");

let alturaPoke = document.querySelector
    ("#altura");

let btnProximo = document.querySelector("#btnproximo");

let btnAnterior = document.querySelector("#btnvoltar");
let numeroPokedex = 1;

function verificaImagem(urlGif,urlImg) {
    imgPokemon.src = urlGif;

    imgPokemon.onerror = function () {
        this.onerror = null;
        this.src = urlImg;
        
    };
    return;
    
};

function pesoKg(peso) { return peso / 10 };
function alturaM(altura) { return altura / 30.48 };

function tocarSom(som) {
    som = new Audio(som);
    som.play();

};




const fetchPokemon = async (pokemon) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();
    return data;

}

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    verificaImagem(dataPokemon.sprites.other.showdown.front_default, dataPokemon.sprites.front_default);
    nomepoke.innerHTML = dataPokemon.name;
    idPoke.innerHTML = dataPokemon.id;
    tipo1Poke.innerHTML = dataPokemon.types[0].type.name;
    tipo2Poke.innerHTML = dataPokemon.types[1].type.name;
    habilidadePoke.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPoke.innerHTML = dataPokemon.weight + " kg";
    alturaPoke.innerHTML = dataPokemon.height + 'm';
    tocarSom(dataPokemon.cries.legacy);




}

formPoke.addEventListener("submit", (event) => {
    event.preventDefault();
    showPokemon(inputPoke.value.toLowerCase());

})

btnAnterior.addEventListener("click", (event) => {
    if (numeroPokedex > 1) {
        numeroPokedex = numeroPokedex - 1;
    }
    showPokemon(numeroPokedex);
});

btnProximo.addEventListener("click", (event) => {
    if (numeroPokedex < 1000) {
        numeroPokedex = numeroPokedex + 1;
    }
    showPokemon(numeroPokedex);
});