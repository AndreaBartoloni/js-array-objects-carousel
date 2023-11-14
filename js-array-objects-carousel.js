let container = document.getElementById("container");


const images = [
    {
        image: '01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: '03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: '04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: '05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];




let inserireImmagine = "";
images.forEach((element) => {
    
    inserireImmagine += `
    <img src="img/${element.image}" >
    <p class="title">${percorsoTitle}</p>
    <p class="text">${card.text}</p>`;

});
for(let i = 0; i < images.length; i++){
    //console.log(images[i]);
    let card = images[i];
    inserireImmagine += `
    <img src="img/${card.image}" >
    <p class="title">${card.title}</p>
    <p class="text">${card.text}</p>`;

}

document.getElementById("container").innerHTML += inserireImmagine;

//Imposto la prima immagine come attiva
let presentImg = 0;
const img = document.querySelectorAll("#container img");
img[presentImg].classList.add("active")

document.getElementById("next").addEventListener("click", function () {
    if(presentImg < images.length - 1){
        img[presentImg].classList.remove("active");
        presentImg++;
        img[presentImg].classList.add("active");
    }
    
})

document.getElementById("prev").addEventListener("click", function () {
    if(presentImg > 0){
        img[presentImg].classList.remove("active");
        presentImg--;
        img[presentImg].classList.add("active");
    }
    
})




