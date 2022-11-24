import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener("click", onClickImage);

function createGallary(items) {
    return items.map((item) =>     
    `<a class="gallery__link" href="${item.original}">
    <img class="gallery__image" 
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"/>
    </a>`)
    .join('');
}

const addGallaryMarkup = createGallary(galleryItems);
galleryContainer.innerHTML = addGallaryMarkup;


function onClickImage(event){
    blockActive(event);

    if(event.target.nodeName !== "IMG"){
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
   instance.show()

   galleryContainer.addEventListener("keydown", (event) => {
    if(event.code === "Escape"){
        instance.close();
    }
   })

}

function blockActive(event){
    event.preventDefault();
}


