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

    /*************** */
    const favoriteButton = document.getElementById('favorite');
    const regularHeart = document.getElementById('favorite-regular');
    const addedHeart = document.getElementById('added-favorite');
    
    // Función para verificar y establecer el estado inicial desde el localStorage
    function setInitialState() {
        const isFavorite = localStorage.getItem('isFavorite');
    
        if (isFavorite === 'true') {
            regularHeart.classList.add('active');
            addedHeart.classList.add('active');
        }
    }
    
    // Función para alternar el estado del corazón favorito y guardar en localStorage
    function toggleFavorite() {
        regularHeart.classList.toggle('active');
        addedHeart.classList.toggle('active');
    
        const isFavorite = regularHeart.classList.contains('active');
        localStorage.setItem('isFavorite', isFavorite);
    }
    
    // Agregar evento 'click' al botón de favorito
    favoriteButton.addEventListener('click', toggleFavorite);
    
    // Establecer el estado inicial al cargar la página
    setInitialState();

};



