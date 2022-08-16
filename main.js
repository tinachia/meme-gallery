var imageUrls = [
  'https://static01.nyt.com/images/2022/01/31/crosswords/31meme-wordplay/31meme-wordplay-mediumSquareAt3X.png',
  'https://www.researchgate.net/publication/344603358/figure/fig1/AS:945655560286208@1602473263829/Example-of-Cat-Meme_Q320.jpg',
  'https://c8p9p3e5.rocketcdn.me/wp-content/uploads/2022/05/funny-summer-body-memes.jpeg'
];
var $gallery = document.querySelector('main');
var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');

$addImageButton.addEventListener('click', function () {
  if ($imageUrlInput.value !== '') {
    imageUrls.push($imageUrlInput.value);
    $imageUrlInput.value = '';
    updateGallery();
  }
});

function updateGallery() {
  $gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var $imageElement = document.createElement('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updateGallery();
