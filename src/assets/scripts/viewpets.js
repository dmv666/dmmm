import { url } from "../helpers/constants.js";
import { GetData } from "../helpers/peticiones.js";
const template = document.getElementById("template").content;
const templatepet = document.getElementById("templatepet").content;
const container = document.getElementById("containercards")
const todo = document.getElementById("todo")


export const viewpets = async (response) => {
    container.innerHTML = ""


    let fragment = document.createDocumentFragment()

    // pintar cards

    response.forEach(item => {
        const {
            id,
            name,
            gen,
            img,
            ed,
            edad,
            p1,
            personalidad,
            p2,
            personalidad2,
            p3,
            personalidad3,
            Description,
            raz,
            raza,
            loc,
            ubicacion
        } = item;


        template.querySelector('img').setAttribute('src', img)
        template.querySelector('img').setAttribute('id', id)
        const clone = template.cloneNode(true)
        fragment.appendChild(clone);


    });

    container.appendChild(fragment);
    container.addEventListener("click", async (e) => {
        Details(e.target.id)
    });



};

    const Details = async (id) => {
    const response = await GetData(url);
    const pet = response?.find((fi) => fi.id === id);
    const { name, gen, img, ed, edad, p1, personalidad, p2, personalidad2, p3, personalidad3, Description, raz, raza, loc, ubicacion } = pet;

    todo.innerHTML = "";
    let fragment = document.createDocumentFragment();

   
    templatepet.querySelector('img').setAttribute('src', img);
    templatepet.getElementById("genimg").setAttribute('src', gen)
    templatepet.querySelector('h2').textContent = `${name}`;
    templatepet.querySelector('h5').textContent = `‎ ‎ ‎ ‎ ‎ ${raza} ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎   ${edad}`;
    templatepet.querySelector('h6').textContent = ubicacion;
    templatepet.getElementById("p1").setAttribute('src', p1)
    templatepet.getElementById("p2").setAttribute('src', p2)
    templatepet.getElementById("p3").setAttribute('src', p3)
    templatepet.querySelector('h4').textContent = ` ${personalidad}-${personalidad2}-${personalidad3}`;
    templatepet.querySelector("p").textContent = `Historia de ${name}: ${Description}`
    const clone = templatepet.cloneNode(true)
    clone.querySelector('.card').classList.add('mx-auto', 'text-center');
    fragment.appendChild(clone);
    todo.appendChild(fragment);

    const favoriteButton = document.getElementById('favorite');
const regularHeart = document.getElementById('favorite-regular');
const addedHeart = document.getElementById('added-favorite');

// Función para alternar las clases 'active' al hacer clic en el botón
favoriteButton.addEventListener('click', function () {
    const isFavorite = regularHeart.classList.contains('active');

    // Toggle de clases 'active'
    regularHeart.classList.toggle('active');
    addedHeart.classList.toggle('active');

    // Obtener todos los favoritos existentes del localStorage
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Obtener el ID de la mascota que se está marcando o desmarcando como favorita
    const petId = `${id}`;

    if (isFavorite) {
        // Si ya estaba marcado como favorito, quitarlo de la lista
        const indexToRemove = existingFavorites.indexOf(petId);
        if (indexToRemove !== -1) {
            existingFavorites.splice(indexToRemove, 1);
        }
    } else {
        // Si no estaba marcado como favorito, agregarlo a la lista
        existingFavorites.push(petId);
    }

    // Guardar la lista actualizada de favoritos en el localStorage
    localStorage.setItem('favorites', JSON.stringify(existingFavorites));
});

// Al cargar la página, verifica y aplica el estado guardado en el localStorage al botón de favoritos
document.addEventListener('DOMContentLoaded', function () {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const petId = 'id_de_tu_mascota'; // Reemplaza 'id_de_tu_mascota' con el ID real

    // Si el ID de la mascota está en la lista de favoritos, marca el botón como favorito
    if (existingFavorites.includes(petId)) {
        regularHeart.classList.add('active');
        addedHeart.classList.add('active');
    } else {
        regularHeart.classList.remove('active');
        addedHeart.classList.remove('active');
    }
});
};


