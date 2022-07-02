const images = [
  'img00.jpg',
  'img01.jpg',
  'img02.jpg',
  'img03.jpg',
  'img04.jpg',
  'img05.jpg'
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
