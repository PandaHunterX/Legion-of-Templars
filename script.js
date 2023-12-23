var Slideshow = document.getElementById('image');
var imageIndex = 0;
var imageArray = ['assets/Image4.jpg', 'assets/Image2.jpg', 'assets/Image3.jpg', 'assets/Image1.jpg'];
var isAnimating = false;

function changeImage() {
    if (isAnimating) {
        return;
    }

    isAnimating = true;
    
    Slideshow.style.animation = 'fadeOut 0.5s ease-in-out';
    
    Slideshow.addEventListener('animationend', function () {
        Slideshow.src = imageArray[imageIndex];
        Slideshow.style.animation = 'fadeIn 0.5s ease-in-out';
        imageIndex = (imageIndex + 1) % imageArray.length;
        isAnimating = false;
    }, { once: true });
}

setInterval(changeImage, 3000);

