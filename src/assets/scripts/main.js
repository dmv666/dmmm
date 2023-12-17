console.log('Succesfully connected')


import { url } from "../helpers/constants.js";
import { GetData } from "../helpers/peticiones.js";
import { viewpets } from "./viewpets.js";

let perros = document.getElementById("perros");
let gatos = document.getElementById("gatos");

document.addEventListener("DOMContentLoaded", async() =>{
perros.addEventListener("click", async () => {
    const response = await GetData(url);
    const perros = await response.filter((fi)=> fi.id <= 4);
    viewpets(perros); 
    
});
gatos.addEventListener("click", async () => {
    const response = await GetData(url);
    const gatos = await response.filter((fi)=> fi.id >= 5);
    viewpets(gatos); 
    
});

perros.addEventListener('click', function() {
    // Cambiar la opacidad del otro botón
    gatos.style.opacity = '0.5';
    perros.style.opacity = '1'; // Puedes ajustar el valor de opacidad según lo necesites (0.5 = 50% de opacidad)
});

gatos.addEventListener('click', function() {
    // Cambiar la opacidad del otro botón
    perros.style.opacity = '0.5';
    gatos.style.opacity = '1'; // Puedes ajustar el valor de opacidad según lo necesites (0.5 = 50% de opacidad)
});
})