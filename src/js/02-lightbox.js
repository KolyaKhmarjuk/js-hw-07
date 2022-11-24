import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGallary(items) {
    return items.map((item) =>     
    `<a class="gallery__link" href="${item.original}">
    <img class="gallery__image" 
    src="${item.preview}"
    alt="${item.description}"/>
    </a>`)
    .join('');
}

const addGallaryMarkup = createGallary(galleryItems);
galleryContainer.innerHTML = addGallaryMarkup;

galleryContainer.addEventListener("click", onClickImage);

function onClickImage(event){
    blockActive(event);

    if(event.target.nodeName !== "IMG"){
        return;
    }

   galleryContainer.addEventListener("keydown", (event) => {
    if(event.code === "Escape"){
        instance.close();
    }
   })

}

function blockActive(event){
    event.preventDefault();
}

new SimpleLightbox('.gallery a', { 
    'captionsData': 'alt',
    'showCounter': false,

});