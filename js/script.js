const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let images = '';

for (let i = 0; i < items.length; i++) {
    images += `
        <div class="item">
            <img src="${items[i]}" alt="${items[i]}">
        </div>
    `;
}

const containerItems = document.querySelector('.container-items');
containerItems.innerHTML = images;

const image = document.getElementsByClassName('item');
let activeImage = 0;
image[activeImage].classList.add('active');

const layoverThumbnails = document.getElementsByClassName('layover');
console.log(layoverThumbnails);

const btnUp = document.querySelector('.btn_up');
const btnDown = document.querySelector('.btn_down');

btnDown.addEventListener("click", function(){
    if (activeImage < items.length - 1) {
        image[activeImage].classList.remove('active');
        layoverThumbnails[activeImage].classList.remove('active');
        activeImage++;
        image[activeImage].classList.add('active');
        layoverThumbnails[activeImage].classList.add('active');
    } else if (activeImage >= items.length - 1) {
        image[activeImage].classList.remove('active');
        layoverThumbnails[activeImage].classList.remove('active');
        activeImage = 0;
        image[activeImage].classList.add('active');
        layoverThumbnails[activeImage].classList.add('active');
    }
});

btnUp.addEventListener("click", function () {
    if (activeImage <= 0) {
        image[activeImage].classList.remove('active');
        layoverThumbnails[activeImage].classList.remove('active');
        activeImage = items.length -1;
        image[activeImage].classList.add('active');
        layoverThumbnails[activeImage].classList.add('active');
    } else if (activeImage > 0) {
        image[activeImage].classList.remove('active');
        layoverThumbnails[activeImage].classList.remove('active');
        activeImage--;
        image[activeImage].classList.add('active');
        layoverThumbnails[activeImage].classList.add('active');
    }
});

