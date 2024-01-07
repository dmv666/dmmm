import { getFavoritePets } from '../assets/scripts/favoritos.js';

const favoritePets = getFavoritePets();
const contenedor = document.getElementById('favoritePetsContainer');

// Función para mostrar las imágenes de las mascotas favoritas en fav.html
const showFavoritePetImages = () => {
    favoritePets.forEach((imageUrl) => {
        // Aquí creamos un elemento <img> para cada URL de imagen en favoritePets
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;


        // Agregamos cada imagen al contenedor
        contenedor.appendChild(imgElement);
    });
};

// Llama a la función para mostrar las imágenes de las mascotas favoritas cuando la página se carga completamente
document.addEventListener('DOMContentLoaded', showFavoritePetImages);