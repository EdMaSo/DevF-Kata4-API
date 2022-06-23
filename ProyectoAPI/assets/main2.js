'use strict'

let url = 'https://rickandmortyapi.com/api/character/1';

let img = document.querySelector('#characterPhoto');
let name = document.querySelector('#nombre');
let id = document.querySelector('#idCharacter');
let gender = document.querySelector('#genre');
let species = document.querySelector('#spec');
let origin = document.querySelector('#ori');
let episodes = document.querySelector('#ep');
let cardPic = document.querySelector('#characterPhoto');


fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.error(error))

const showData = (data) => {
    console.log(data);
    name.innerHTML = data.name
    id.innerHTML = 'ID: ' + data.id
    gender.innerHTML = 'Gender: ' + data.gender
    species.innerHTML = 'Species: ' + data.species
    origin.innerHTML = 'Origin: ' + data.origin.name
    episodes.innerHTML = 'Episodes: ' + data.episode.length
    cardPic.src = data.image
}
