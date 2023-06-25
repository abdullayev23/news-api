const elPokemonTemplate = document.querySelector(".sourc-template").content;
const elList = document.querySelector(".list");
const pokemonFragment = document.createDocumentFragment();

function mobile(sources) {

    for(let movie of sources) {
        const pokemonTemplateClone = elPokemonTemplate.cloneNode(true);
        pokemonTemplateClone.querySelector(".list-img").src = movie.urlToImage
        pokemonTemplateClone.querySelector(".list-item__name").textContent = movie.author;
        pokemonTemplateClone.querySelector(".list-item__title").textContent = movie.description;
        // pokemonTemplateClone.querySelector(".list-item__info").textContent = movie.description;
        pokemonTemplateClone.querySelector(".list-item-url").href = movie.url;

        pokemonFragment.appendChild(pokemonTemplateClone);
        elList.appendChild(pokemonFragment)
    }
}

mobile(sources);


// const darkModeBtn = document.getElementById('darkModeBtn');
// const lightModeBtn = document.getElementById('lightModeBtn');
// const blueModeBtn = document.getElementById('blueModeBtn');
// const greenModeBtn = document.getElementById('greenModeBtn');
// const container = document.querySelector(".container");

// darkModeBtn.addEventListener("click", () =>{
//     container.classList.add("dark");
// })




let activeDarkBtn = document.querySelector(".active-darkBtn");
let activeLightBtn = document.querySelector(".active-ligthBtn");
let activeBlueBtn = document.querySelector(".active-blueBtn");
let activeYellowBtn = document.querySelector(".active-yellowBtn");
let elBody = document.body;

activeDarkBtn.addEventListener("click", () =>{
    elBody.classList.remove("active-white", "active-blue", "active-yellow")
    elBody.classList.add("active-black");
});


activeLightBtn.addEventListener("click", ()=>{
    elBody.classList.remove(".active-black", "active-blue", "active-yellow")
    elBody.classList.add("active-white");
});

activeBlueBtn.addEventListener("click", () =>{
    elBody.classList.remove(".active-white", "active-black", "active-yellow")
    elBody.classList.add("active-blue");
});

activeYellowBtn.addEventListener("click", () =>{
    elBody.classList.remove(".active-white", "active-blue", "active-black")
    elBody.classList.add("active-yellow");
});