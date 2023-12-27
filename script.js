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
    
    Slideshow.addEventListener('animationend', () => {
        Slideshow.src = imageArray[imageIndex];
        Slideshow.style.animation = 'fadeIn 0.5s ease-in-out';
        imageIndex = (imageIndex + 1) % imageArray.length;
        isAnimating = false;
    }, { once: true });
}

let Submit = document.getElementById('contactsubmit');

Submit.addEventListener('click', () => {
    var Fname = document.getElementsByName('F_name')[0].value;
    var Lname = document.getElementsByName('L_name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var number = document.getElementsByName('phone')[0].value;
    var comment = document.getElementsByName('comment')[0].value;
    document.getElementById('warning').style.display = 'none';
    document.getElementsByClassName('mainform')[0].style.animation = 'none';

    if (Fname === '' || Lname === '' || email === '' || number === '' || comment === '') {
        document.getElementById('warning').style.display = 'block'
        document.getElementsByClassName('mainform')[0].style.animation = 'shake linear 1s forwards'
    }
    else {
        document.getElementsByClassName('popupbox')[0].style.display = 'grid'
        document.getElementsByClassName('popupbox')[0].style.animation = 'entrance linear 0.2s forwards'
    }
})

let Close = document.getElementById('close');

Close.addEventListener('click', () => {
    document.getElementsByClassName('popupbox')[0].style.animation = 'close linear 0.2s forwards'
})

setInterval(changeImage, 3000);

