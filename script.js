let currentImageIndex = 0;
const IMAGES_COUNT = 3;

function openPopup(index) {
    currentImageIndex = index;
    document.getElementById('popupImage').src = `./assets/img/pumpkin${currentImageIndex + 1}.png`;
    document.getElementById('popup').style.display = 'block';

    document.getElementById('popupImage').width = 700;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function prevImage() {
    console.log("prev")
    currentImageIndex--;
    
    if (currentImageIndex < 0)
    {
        currentImageIndex = IMAGES_COUNT - 1;
    }

    document.getElementById('popupImage').src = `./assets/img/pumpkin${currentImageIndex + 1}.png`;
}

function nextImage() {
    console.log("next")
    // Assuming you have a total of 3 images, adjust the condition accordingly
    currentImageIndex = (currentImageIndex + 1) % IMAGES_COUNT;
    document.getElementById('popupImage').src = `./assets/img/pumpkin${currentImageIndex + 1}.png`;
}