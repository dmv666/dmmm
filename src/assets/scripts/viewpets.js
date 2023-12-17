const template = document.getElementById("template").content;
const container = document.getElementById("containercards")


export const viewpets = async (response) =>{
    container.innerHTML = ""


let fragment = document.createDocumentFragment()

// pintar cards

response.forEach(item => {
    console.log(item)
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
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
});
container.appendChild(fragment)

}