import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener("click", onClickImage);

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

function onClickImage(event){
    blockActive(event);

    if(event.target.nodeName !== "IMG"){
        return;
    }
}

function blockActive(event){
    event.preventDefault();
}

new SimpleLightbox('.gallery a', { 
    'captionsData': 'alt',
    'fadeSpeed': 250,
});