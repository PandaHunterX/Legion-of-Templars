var Slideshow = document.getElementById('image');
var imageIndex = 0;
var imageArray = ['assets/Image4.jpg', 'assets/Image2.jpg', 'assets/Image3.jpg', 'assets/Image1.jpg'];
var isAnimating = false;

function changeImage() {
    if (isAnimating) {
        return;
    }

    isAnimating = true;

    Slideshow.style.animation = 'close 0.5s ease-in-out';

    Slideshow.addEventListener('animationend', () => {
        Slideshow.src = imageArray[imageIndex];
        Slideshow.style.animation = 'entrance 0.5s ease-in-out';
        imageIndex = (imageIndex + 1) % imageArray.length;
        isAnimating = false;
    }, { once: true });
}

var HomeButton = document.getElementById('homeback');

HomeButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Show backToTopButton after 100px of scrolling
        HomeButton.style.display = "block";
    } else {
        HomeButton.style.display = "none";
    }
});

var Phone = document.getElementById('phone');

Phone.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
}
);

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
        document.getElementById('warning').innerHTML = 'Please fill in all the fields correctly';
        document.getElementById('warning').style.display = 'block'
        document.getElementsByClassName('mainform')[0].style.animation = 'shake linear 1s forwards'
    }
    else if (number.length > 9) {
        document.getElementById('warning').innerHTML = 'Please enter a valid phone number';
        document.getElementById('warning').style.display = 'block'
        document.getElementsByClassName('mainform')[0].style.animation = 'shake linear 1s forwards'
    }
    else {
        document.getElementsByClassName('popupbox')[0].style.display = 'grid'
        document.getElementsByClassName('popupbox')[0].style.animation = 'entrance linear 0.2s forwards'
        document.getElementsByClassName('popupbox')[0].innerHTML =
            '<p>THANK YOU FOR CONTACTING US!!</p>\
        <p>We will get back to you as soon as possible.</p>\
        <button id="close">OK</button>';
        let Close = document.getElementById('close');

        Close.addEventListener('click', () => {
            document.getElementsByClassName('popupbox')[0].style.animation = 'close linear 0.2s forwards'
        })
    }
})


let boxes = document.getElementsByClassName('rolebox');

Array.from(boxes).forEach(box => {
    box.addEventListener('mouseover', pauseOtherBoxes);
    box.addEventListener('mouseleave', resumeOtherBoxes);
    box.addEventListener('touchstart', pauseOtherBoxes);
    box.addEventListener('touchend', resumeOtherBoxes);
});

function pauseOtherBoxes() {
    Array.from(boxes).forEach(otherBox => {
        otherBox.classList.add('paused');
    });
}

function resumeOtherBoxes() {
    Array.from(boxes).forEach(otherBox => {
        otherBox.classList.remove('paused');
    });
}


setInterval(changeImage, 3000);