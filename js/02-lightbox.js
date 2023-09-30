import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
container.addEventListener('click', handlerClick);

function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => `
  <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `).join('');
}

function handlerClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


