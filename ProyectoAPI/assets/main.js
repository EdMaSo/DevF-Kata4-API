const dataListElement = document.querySelector("#datalistOptions")
const tarjetaElement = document.querySelector('#tarjeta'); //HTML es el UL para la lista de contactos
const searchElement = document.querySelector('#charactersInput'); //HTML es el input para hacer el filtrado
const boton = document.querySelector('button')
let contacts = [];

const main = () => (
    fetch('https://rickandmortyapi.com/api/character?count=50')
    .then(response => response.json())
    // .then((characters) => {
    //     console.log(characters)
    // })
    .then(characters => characters.results.forEach(renderDataListOptions))
);

const renderDataListOptions = (element) => {
    const option = document.createElement('option');

    // cardDiv.classList.add('card');

    option.setAttribute('value', element.name);

    // texDiv.innerHTML = element.text;

    // photoDiv.appendChild(img);
    dataListElement.appendChild(option);

};

// boton.addEventListener ('click', (e) => {
//     // const inputText = e?.results?.value.toLocaleLowerCase() || '';
//     // // cleanView();
//     // console.log(inputText)
//     //if searchElement ==  

// });

// // const normalizeData = (data) => {
// //     data.forEach(element => {
// //         const { id, name, image, genre, species, origin, episodes } = element;
// //         const contact = {
// //             aidi: id,
// //             text: name,
// //             photo: image,
// //             genero: genre,
// //             especie: species,
// //             origen: origin,
// //             episodes: episodes,

// //         };
// //         contacts.push(contact);
// //     });
// //     return contacts;
// // };

// // console.log(contacts)

// const renderTarjeta = (element) => {
//     const bloque = document.createElement('article')
//     const titulo = document.createElement('h1')
//     const a = document.createElement('a')
//     const img = document.createElement('img')
    

// }

// const cleanView = () => {
//     tarjetaElement.innerHTML = '';
// };



main();
