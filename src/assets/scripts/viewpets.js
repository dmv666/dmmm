import { url } from "../helpers/constants.js";
import { GetData } from "../helpers/peticiones.js";
const template = document.getElementById("template").content;
const templatepet = document.getElementById("templatepet").content;
const container = document.getElementById("containercards")


export const viewpets = async (response) => {
    container.innerHTML = ""


    let fragment = document.createDocumentFragment()

    // pintar cards

    response.forEach(item => {
        const {
            id,
            name,
            img,
            edad,
            personalidad,
            personalidad2,
            personalidad3,
            Description,
            raza,
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
    const { name, img, edad, personalidad, personalidad2, personalidad3, Description, raza, ubicacion } = pet;

    container.innerHTML = "";
    let fragment = document.createDocumentFragment();

    templatepet.querySelector('img').setAttribute('src', img);
    templatepet.querySelector('h2').textContent = name;
    templatepet.querySelector('h5').textContent = `${raza} ‎ ‎ ‎  ${edad}`;
    templatepet.querySelector('h6').textContent = ubicacion;
    templatepet.querySelector('h4').textContent = `Personalidad: ${personalidad}-${personalidad2}-${personalidad3}`;
    templatepet.querySelector("p").textContent = `Historia de ${name}: ${Description}`
    const clone = templatepet.cloneNode(true)
    clone.querySelector('.card').classList.add('mx-auto', 'text-center');
    fragment.appendChild(clone);
    container.appendChild(fragment);
};