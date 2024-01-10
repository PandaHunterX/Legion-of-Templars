var Slideshow = document.getElementById('image'); // Get the slideshow element by its ID
var imageIndex = 0; // Initialize the index of the current image
// Define an array of image sources
var imageArray = ['assets/Image4.jpg', 'assets/Image2.jpg', 'assets/Image3.jpg', 'assets/Image1.jpg']; 
var isAnimating = false; // Define a flag to indicate whether an animation is in progress

// Define a function to change the image in the slideshow
function changeImage() {
    // If an animation is in progress, exit the function 
    if (isAnimating) {
        return;
    }

    // Set the flag to indicate that an animation is in progress
    isAnimating = true;

    // Start the closing animation
    Slideshow.style.animation = 'close 0.5s ease-in-out';

    // Add an event listener for the end of the animation
    Slideshow.addEventListener('animationend', () => {
        Slideshow.src = imageArray[imageIndex]; // Change the image source
        Slideshow.style.animation = 'entrance 0.5s ease-in-out'; // Start the entrance animation
        imageIndex = (imageIndex + 1) % imageArray.length; // Update the index of the current image
        isAnimating = false; // Reset the flag to indicate that the animation has ended
    }, { once: true }); // The event listener is removed after it's called once
}

var HomeButton = document.getElementById('homeback'); // Get the home button element by its ID

// Add an event listener for the click event on the home button
HomeButton.addEventListener('click', () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
})

// Add an event listener for the scroll event on the window
window.addEventListener('scroll', () => {
    // If the page is scrolled more than 100px, show the home button
    if (window.scrollY > 100) { 
        HomeButton.style.display = "block";
    } else {
        // Otherwise, hide the home button
        HomeButton.style.display = "none";
    }
});

var Phone = document.getElementById('phone'); // Get the phone input element by its ID

// Add an event listener to the Phone input field to prevent users entering non-numeric characters
Phone.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
}
);

let Submit = document.getElementById('contactsubmit'); // Get the Submit button element

// Add a click event listener to the Submit button
Submit.addEventListener('click', () => {
    // Get the values of the form inputs
    var Fname = document.getElementsByName('F_name')[0].value;
    var Lname = document.getElementsByName('L_name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var number = document.getElementsByName('phone')[0].value;
    var comment = document.getElementsByName('comment')[0].value;

    // Hide the warning message and remove any animations from the form
    document.getElementById('warning').style.display = 'none';
    document.getElementsByClassName('mainform')[0].style.animation = 'none';

    // Check if any of the form inputs are empty
    if (Fname === '' || Lname === '' || email === '' || number === '' || comment === '') {
        document.getElementById('warning').innerHTML = 'Please fill in all the fields correctly';
        document.getElementById('warning').style.display = 'block'
        document.getElementsByClassName('mainform')[0].style.animation = 'shake linear 1s forwards'
    }
    // Check if the phone number is valid
    else if (number.length > 9) {
        // If the phone number is not valid, show a warning message and shake the form
        document.getElementById('warning').innerHTML = 'Please enter a valid phone number';
        document.getElementById('warning').style.display = 'block'
        document.getElementsByClassName('mainform')[0].style.animation = 'shake linear 1s forwards'
    }
    else {
        // If all form inputs are valid, show a popup box with a thank you message
        document.getElementsByClassName('popupbox')[0].style.display = 'grid'
        document.getElementsByClassName('popupbox')[0].style.animation = 'entrance linear 0.2s forwards'
        document.getElementsByClassName('popupbox')[0].innerHTML =
            '<p>Thank you for reaching out to us!</p>\
            <p>We will respond to you as soon as possible.</p>\
        <button id="close">OK</button>';

        // Add a click event listener to the OK button in the popup box
        document.getElementById('close').addEventListener('click', () => {
            // Add a click event listener to the OK button in the popup box
            document.getElementsByClassName('popupbox')[0].style.animation = 'close linear 0.2s forwards'
        })
    }
})

// Get all elements with the class 'rolebox'
let boxes = document.getElementsByClassName('rolebox');

//FROM THIS LINE UP TO LINE 127 IS FOR THE MOBILE PHONES. 
//IT IS TO ENSURE THAT THE BOXES ARE PAUSED WHEN THE USER TOUCHES OR HOVERS OVER THEM.

// For each box, add event listeners for mouseover, mouseleave, touchstart, and touchend events
Array.from(boxes).forEach(box => {
    // When the mouse hovers over the box or the box is touched, pause the other boxes
    box.addEventListener('mouseover', pauseOtherBoxes);
    box.addEventListener('mouseleave', resumeOtherBoxes);
    box.addEventListener('touchstart', pauseOtherBoxes);
    box.addEventListener('touchend', resumeOtherBoxes);
});

// When the mouse leaves the box or the touch ends, resume the other boxes
function pauseOtherBoxes() {
    Array.from(boxes).forEach(otherBox => {
        // For each box, add the 'paused' class
        otherBox.classList.add('paused');
    });
}

// Function to resume the other boxes
function resumeOtherBoxes() {
    // For each box, remove the 'paused' class
    Array.from(boxes).forEach(otherBox => {
        otherBox.classList.remove('paused');
    });
}

// This is for the slideshow. It changes the image every 3 seconds
// The reason why this needs to be at the end of the script to ensure that the changeImage function is defined before it's called.
setInterval(changeImage, 3000);