// url de API
const apiurl = "https://api.thecatapi.com/v1/images/search";

async function getDog() {
    try {
       const response = await fetch(apiurl);
       const  result = await response.json();
        console.log(result);
   } catch (error) { 
        console.error("error de api",error.mesage);
       
    }
    
}

getDog();


// obtener boton y contenedor
const btnDog = document.querySelector("#btn-dog");
const dogImgContainer = document.querySelector("#dog-img-container");

//hacer click
btnDog.addEventListener("click",() => {
    fetch(apiurl)
    .then(response => response.json())
    .then(data => {
        const dogImgUrl = data[0].url;

        dogImgContainer.style.backgroundImage = `url('${dogImgUrl}')`;
    })
       .catch(error => console.log(error));
})
