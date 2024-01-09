/**
 * This JavaScript file contains an array of objects, each representing a question in a questionnaire.
 * Each question object has the following properties:
 * 
 * - question: A string that contains the text of the question.
 * 
 * - answer1 to answer6: Strings that contain the text of the possible answers to the question.
 * 
 * - answer1Total to answer6Total: Strings that contain the score associated with each answer.
 * 
 * The questionnaire seems to be used for a personality test or a job application form, where each answer
 * contributes to the total score of the applicant.
 * 
 * The total score can then be used to determine the applicant's personality type or suitability for a job role.
 */
const questions = [
  {
    "question": "What drives you to join us?",
    "answer1": "Crafting and creating",
    "answer1Total": "1",
    "answer2": "Seeking knowledge and understanding",
    "answer2Total": "2",
    "answer3": "Protecting and defending others",
    "answer3Total": "3",
    "answer4": "Analyzing and strategizing",
    "answer4Total": "4",
    "answer5": "Seeking adventure and action",
    "answer5Total": "5",
    "answer6": "Upholding justice and order",
    "answer6Total": "6"
  },
  {
    "question": "How do you handle pressure?",
    "answer1": "Uphold principles and values, even in difficult situations",
    "answer1Total": "1",
    "answer2": "Adapt quickly, using creativity to overcome obstacles",
    "answer2Total": "2",
    "answer3": "Thrive on the adrenaline, embracing the intensity",
    "answer3Total": "3",
    "answer4": "Stay calm and collected, focusing on finding solutions",
    "answer4Total": "4",
    "answer5": "Analyze the situation and make strategic decisions",
    "answer5Total": "5",
    "answer6": "Take charge and lead others through the challenges",
    "answer6Total": "6"
  },
  {
    "question": "What's your preferred working environment?",
    "answer1": "Creative and inspiring",
    "answer1Total": "1",
    "answer2": "Quiet and reflective",
    "answer2Total": "2",
    "answer3": "Structured and disciplined",
    "answer3Total": "3",
    "answer4": "Organized and strategic",
    "answer4Total": "4",
    "answer5": "Dynamic and fast-paced",
    "answer5Total": "5",
    "answer6": "Action-packed and adventurous",
    "answer6Total": "6"
  },
  {
    "question": "Which skill set appeals to you the most?",
    "answer1": "Artistic and creative talents",
    "answer1Total": "1",
    "answer2": "Upholding moral and ethical standards",
    "answer2Total": "2",
    "answer3": "Quick reflexes and agility",
    "answer3Total": "3",
    "answer4": "Research and analysis",
    "answer4Total": "4",
    "answer5": "Strategic planning and leadership",
    "answer5Total": "5",
    "answer6": "Combat and physical prowess",
    "answer6Total": "6"
  },
  {
    "question": "What's your approach to problem-solving?",
    "answer1": "Upholding principles and ethical considerations",
    "answer1Total": "1",
    "answer2": "Out-of-the-box thinking and creative solutions",
    "answer2Total": "2",
    "answer3": "Immediate action and adaptability",
    "answer3Total": "3",
    "answer4": "Methodical and thorough investigation",
    "answer4Total": "4",
    "answer5": "Analyze the situation and make strategic decisions",
    "answer5Total": "5",
    "answer6": "Strategic planning and calculated moves",
    "answer6Total": "6"
  },
  {
    "question": "What type of responsibility do you prefer?",
    "answer1": "Creating something new and unique",
    "answer1Total": "1",
    "answer2": "Upholding the ethical standards of the organization",
    "answer2Total": "2",
    "answer3": "Providing medical support in the field",
    "answer3Total": "3",
    "answer4": "Analyzing data and providing insights",
    "answer4Total": "4",
    "answer5": "Planning and executing strategic operations",
    "answer5Total": "5",
    "answer6": "Leading a team into action",
    "answer6Total": "6"
  },
  {
    "question": "In a crisis, what role would you naturally take?",
    "answer1": "The moral compass, upholding values",
    "answer1Total": "1",
    "answer2": "The creative problem solver",
    "answer2Total": "2",
    "answer3": " The caregiver, providing support",
    "answer3Total": "3",
    "answer4": "The strategist, analyzing the situation",
    "answer4Total": "4",
    "answer5": "The planner, organizing resources",
    "answer5Total": "5",
    "answer6": "The leader, taking charge of the situation",
    "answer6Total": "6"
  },
  {
    "question": "How do you deal with challenges in a team setting?",
    "answer1": "Ensure the team operates ethically",
    "answer1Total": "1",
    "answer2": "Offer creative solutions",
    "answer2Total": "2",
    "answer3": " Provide immediate support and care",
    "answer3Total": "3",
    "answer4": "Provide insights and analysis",
    "answer4Total": "4",
    "answer5": "Plan and strategize with the team",
    "answer5Total": "5",
    "answer6": "Take charge and lead the team",
    "answer6Total": "6"
  },
  {
    "question": "Which quality do you value most in a teammate?",
    "answer1": "Strong moral and ethical values",
    "answer1Total": "1",
    "answer2": "Creativity and uniqueness",
    "answer2Total": "2",
    "answer3": "Compassion and medical expertise",
    "answer3Total": "3",
    "answer4": "Intelligence and analytical skills",
    "answer4Total": "4",
    "answer5": "Strategic thinking and planning",
    "answer5Total": "5",
    "answer6": "Leadership and decisiveness",
    "answer6Total": "6"
  },
  {
    "question": "How do you view rules and regulations?",
    "answer1": "Essential for maintaining ethical standards ",
    "answer1Total": "1",
    "answer2": "Can be flexible for creative expression",
    "answer2Total": "2",
    "answer3": "Important, but adaptability is key",
    "answer3Total": "3",
    "answer4": "Guidelines to be thoroughly understood",
    "answer4Total": "4",
    "answer5": "Provide structure and strategic framework",
    "answer5Total": "5",
    "answer6": "Necessary for maintaining order",
    "answer6Total": "6"
  }
]

// Initialize the current question index
let currentQuestion = 0;

// Initialize an array to store the score
let score = [];

// Initialize an array to store the selected answers
let selectedAnswersData = [];

// Get the total number of questions
const totalQuestions = questions.length;

// Get the HTML elements
const container = document.querySelector('.test'); // The container for the test
const mainquestion = document.querySelector('.question'); // The element to display the question
const option1 = document.querySelector('.option1'); // The first option element
const option2 = document.querySelector('.option2'); // The second option element
const option3 = document.querySelector('.option3'); // The third option element
const option4 = document.querySelector('.option4'); // The fourth option element
const option5 = document.querySelector('.option5'); // The fifth option element
const option6 = document.querySelector('.option6'); // The sixth option element
const nextButton = document.querySelector('.next'); // The next button
const previousButton = document.querySelector('.previous'); // The previous button
const result = document.querySelector('.result'); // The element to display the result

//Function to generate question 
function generateQuestions(index) {
  //Select each question by passing it a particular index
  const question = questions[index];
  // Get the total score for each option
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  const option4Total = questions[index].answer4Total;
  const option5Total = questions[index].answer5Total;
  const option6Total = questions[index].answer6Total;
  //Populate html elements 
  mainquestion.innerHTML = `${index + 1}. ${question.question}` // Display the question
  option1.setAttribute('current_score', `${option1Total}`); // Set the total score for option 1
  option2.setAttribute('current_score', `${option2Total}`); // Set the total score for option 2
  option3.setAttribute('current_score', `${option3Total}`); // Set the total score for option 3
  option4.setAttribute('current_score', `${option4Total}`); // Set the total score for option 4
  option5.setAttribute('current_score', `${option5Total}`); // Set the total score for option 5
  option6.setAttribute('current_score', `${option6Total}`); // Set the total score for option 6

  // Set the inner HTML of the options to the corresponding answers from the question object
  option1.innerHTML = `${question.answer1}`
  option2.innerHTML = `${question.answer2}`
  option3.innerHTML = `${question.answer3}`
  option4.innerHTML = `${question.answer4}`
  option5.innerHTML = `${question.answer5}`
  option6.innerHTML = `${question.answer6}`
}

// Function to load the next question
function loadNextQuestion() {
  // Get the selected radio button
  const selectedOption = document.querySelector('input[type="radio"]:checked');

  //Check if there is a radio input checked
  if (!selectedOption) {
    // If no radio button is selected, shake the Resume element and show a warning popup
    Resume.style.animation = 'shake 1s linear forwards'
    document.getElementsByClassName('popupbox')[0].style.display = 'grid'
    document.getElementsByClassName('popupbox')[0].style.animation = 'entrance linear 0.2s forwards'
    document.getElementsByClassName('popupbox')[0].innerHTML =
      `<h1>Warning!</h1>
    <p>Please select an answer to continue</p>
    <button id="close">OK</button>`;

    // Add an event listener to the 'close' button to close the popup when clicked
    document.getElementById('close').addEventListener('click', () => {
      document.getElementsByClassName('popupbox')[0].style.animation = 'close linear 0.2s forwards'
    })

    // Exit the function since no radio button is selected
    return;
  }
  // Get the score of the selected answer
  // The 'nextElementSibling' property gets the next sibling element in the DOM
  // The 'getAttribute' method is used to get the value of the 'current_score' attribute
  const answerScore = Number(selectedOption.nextElementSibling.getAttribute('current_score'));

  // Add the score to the score array
  score.push(answerScore);

  // Add the selected answer to the selectedAnswersData array
  selectedAnswersData.push()

  // Calculate the total score by summing up the scores in the score array
  // The 'reduce' method is used to reduce the array to a single value
  const totalScore = score.reduce((total, currentNum) => total + currentNum);

  // Increment the current question number (to be used as the index for each array)
  currentQuestion++;

  // Clear the checked state of the selected option
  selectedOption.checked = false;

  // If the quiz is on the final question, change the text of the next button to 'Finish'
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  //If the quiz is finished then we hide the questions container and show the results 
  if (currentQuestion == totalQuestions) {
    // Hide the quiz container
    container.style.display = 'none';

    //Depending on the value of totalScore, it assigns different roles and descriptions to the user.
    //In simpler terms, think of this code as a teacher grading a test. If a student scores 20 or below, they get a grade of "Recruit". 
    //If they score between 21 and 24, they get a grade of "Field Operator", and so on. 
    //The img_result and img_alt variables are like the stickers that come with the grade, and description is the teacher's comments on the student's performance.

    //If totalScore is less than or equal to 20, the user is assigned the role of "Recruit". The corresponding image and description for this role are also set.
    if (totalScore <= 20) {
      title = "Recruit";
      img_result = "assets/recruit.png";
      img_alt = "Recruit";
      description = "As a Recruit, your innate potential and adaptability make you the foundation of the Legion. Your journey is just beginning, and you bring a fresh perspective, eagerness to learn, and the resilience needed to thrive in the face of challenges.";
    }

    //If totalScore is between 21 and 24 (inclusive of 21), the user is assigned the role of "Field Operator", with its corresponding image and description.
    else if (totalScore >= 21 && totalScore < 25) {
      title = "Field Operator";
      img_result = "assets/field_operator.png";
      img_alt = "Field Operator";
      description = "Your balanced skills in leadership and adaptability designate you as a Field Operator. You excel in dynamic environments, swiftly responding to challenges on the front lines. Your ability to lead and take charge makes you an essential asset to the Legion's operational success.";
    }

    //If totalScore is between 25 and 29 (inclusive of 25), the user is assigned the role of "Combat Medic", with its corresponding image and description.
    else if (totalScore >= 25 && totalScore < 30) {
      title = "Combat Medic";
      img_result = "assets/combat_medic.png";
      img_alt = "Combat Medic";
      description = "Your compassion and quick thinking under pressure mark you as a Combat Medic. Whether on the battlefield or during peacetime, your medical expertise and dedication to providing care ensure the well-being of your fellow Legion members, making you a vital asset in times of crisis.";
    }

    //If totalScore is between 30 and 32 (inclusive of 30), the user is assigned the role of "Logistics Specialist", with its corresponding image and description.
    else if (totalScore >= 30 && totalScore < 33) {
      result.innerHTML =
        title = "Logistics Specialist";
      img_result = "assets/logistic.png";
      img_alt = "Logistics Specialist";
      description = "Precision and organization define your role as a Logistics Specialist. Your strategic mind ensures the seamless coordination of resources, from supplies to personnel, supporting the Legion's operations with efficiency and precision.";
    }

    //If totalScore is between 33 and 35 (inclusive of 33), the user is assigned the role of "Tactical Engineer", with its corresponding image and description.
    else if (totalScore >= 33 && totalScore < 36) {
      title = "Tactical Engineer";
      img_result = "assets/tactical_engineer.png";
      img_alt = "Tactical Engineer";
      description = "As a Tactical Engineer, your analytical mind and technical skills make you the backbone of strategic planning. Your ability to design and implement solutions on the fly, coupled with a keen understanding of technology, enhances the Legion's capabilities on and off the field.";
    }

    //If totalScore is between 36 and 38 (inclusive of 36), the user is assigned the role of "Elite Guard", with its corresponding image and description.
    else if (totalScore >= 39 && totalScore < 42) {
      title = "Elite Guard";
      img_result = "assets/elite_guard.png";
      img_alt = "Elite Guard";
      description = "Your exceptional skills in combat and protection distinguish you as an Elite Guard. You are entrusted with safeguarding key figures and critical assets, embodying the epitome of martial prowess within the Legion.";
    }

    //If totalScore is between 39 and 41 (inclusive of 39), the user is assigned the role of "Strategic Analyst", with its corresponding image and description.
    else if (totalScore >= 42 && totalScore < 45) {
      title = "Strategic Analyst";
      img_result = "assets/strategic_analyst.png";
      img_alt = "Strategic Analyst";
      description = "Your keen analytical skills position you as a Strategic Analyst. Whether deciphering intelligence or formulating tactical plans, your ability to gather and interpret information contributes to the Legion's strategic advantage.";
    }

    //If totalScore is between 42 and 44 (inclusive of 42), the user is assigned the role of "Intelligence Operative", with its corresponding image and description.
    else if (totalScore >= 45 && totalScore < 48) {
      title = "Intelligence Operative";
      img_result = "assets/intelligence.png";
      img_alt = "Intelligence Operative";
      description = "As an Intelligence Operative, your knack for gathering information covertly and your sharp analytical mind make you a master of espionage. Your role is crucial in uncovering threats and providing the Legion with the intelligence needed to make informed decisions.";
    }

    //If totalScore is between 45 and 47 (inclusive of 45), the user is assigned the role of "Special Operations Commander", with its corresponding image and description.
    else if (totalScore >= 48 && totalScore < 51) {
      title = "Special Operations Commander";
      img_result = "assets/operation_commander.png";
      img_alt = "Special Operations Commander";
      description = "Your leadership and strategic acumen earmark you as a Special Operations Commander. You excel in coordinating specialized missions, leading a select group of operatives with precision and tactical brilliance to achieve objectives that go beyond the ordinary scope of operations.";
    }

    //If totalScore is between 48 and 50 (inclusive of 48), the user is assigned the role of "Legal Counsel", with its corresponding image and description.
    else if (totalScore >= 51 && totalScore < 54) {
      title = "Legal Counsel";
      img_result = "assets/legal.png";
      img_alt = "Legal Counsel";
      description = "Your expertise in legal matters and commitment to upholding ethical standards mark you as a Legal Counsel. You ensure the Legion's operations adhere to international laws and regulations, providing guidance on legal matters to safeguard the organization's reputation.";
    }

    //If totalScore is between 51 and 53 (inclusive of 51), the user is assigned the role of "Commander-in-Chief", with its corresponding image and description.
    else if (totalScore >= 54 && totalScore < 57) {
      title = "Commander-in-Chief";
      img_result = "assets/commander.png";
      img_alt = "Commander In Chief";
      description = "Your exceptional leadership skills and strategic vision designate you as the Commander-in-Chief. As the highest-ranking officer, you guide the Legion with wisdom and authority, making crucial decisions to ensure the organization's success and uphold its values.";
    }

    //If totalScore is between 54 and 56 (inclusive of 54), the user is assigned the role of "Cybersecurity Specialist", with its corresponding image and description.
    else {
      title = "Cybersecurity Specialist";
      img_result = "assets/cybersecurity.png";
      img_alt = "Cybersecurity Specialist";
      description = "Your expertise in cybersecurity and technological defense positions you as a Cybersecurity Specialist. In an era of digital threats, you play a critical role in safeguarding the Legion's information and infrastructure from cyber-attacks, ensuring the organization's security in the digital realm";
    }

    //Display the result
    result.innerHTML =
      `<h1>${title}</h1>
        <img src="${img_result}" alt="${img_alt}">
        <p>${description}</p>
        <div class="button">
        <button onclick="restartQuiz()">Restart Quiz</button>
        <button onclick="loadresume()">Submit</button>
        </div>
        `;

    //Display the resume
    return;
  }

  //If the quiz is not on the final question, load the next question
  generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {

  // Decrement the question index to move to the previous question
  currentQuestion--;

  // Remove the last score from the score array as we're moving back
  score.pop();

  // Generate the previous question
  generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz() {

  // Reset the question index and score array for a fresh start
  currentQuestion = 0;
  score = [];

  // Reload the page to restart the quiz
  location.reload();
}

//The next lines of code are for Final Resume
// Variables for the Final Resume
let Profile = document.getElementById('profile'); // Profile picture
let Input = document.getElementById('input'); // Input field for the profile picture
var FName = document.getElementById('f_name'); // First name field
var Gender = document.getElementById('gender'); // Gender field
var LName = document.getElementById('last_name'); // Last name field
var Address = document.getElementById('address'); // Address field
var Birthday = document.getElementById('birthday'); // Birthday field
var Description = document.getElementById('description'); // Description field
var Resume = document.getElementsByClassName('resume')[0]; // Resume form
var Final_resume = document.getElementsByClassName('finalresume')[0]; // Final resume display
var HirePage = document.getElementById('hirepage'); // Hire page

// Event listener for the input change event
// When the input changes, the source of the Profile image is updated to the selected file
Input.onchange = () => {
  Profile.src = URL.createObjectURL(Input.files[0]);
}

// Function to load the resume
function loadresume() {
  // Check if all the form fields are filled
  // If any field is empty, show a warning popup and return
  if (FName.value === '' || Gender.value === '' || LName.value === '' || Address.value === '' || Birthday.value === '') {
    // Add shake animation to the resume form
    Resume.style.animation = 'shake linear 1s forwards';

    // Show the warning popup
    document.getElementsByClassName('popupbox')[0].style.display = 'grid'
    document.getElementsByClassName('popupbox')[0].style.animation = 'entrance linear 0.2s forwards'
    document.getElementsByClassName('popupbox')[0].innerHTML =
      `<h1>Warning!</h1>
    <p>Please fill out all the form</p>
    <button id="close">OK</button>`;

    // Add event listener to the close button
    // When the close button is clicked, close the popup
    document.getElementById('close').addEventListener('click', () => {
      document.getElementsByClassName('popupbox')[0].style.animation = 'close linear 0.2s forwards'
    })

    return;
  }
  else {
    // If all the form fields are filled, proceed to load the resume

    // Expand the HirePage to full height and scroll to the top
    //This for the Tablets and Mobile Phones
    HirePage.style.height = '120vh';
    window.scrollTo(0, 0);

    // Close the resume form
    Resume.style.animation = 'close linear 0.3s forwards';
    Resume.addEventListener('animationend', () => {

      // When the close animation ends, hide the resume form and show the final resume
      Resume.style.display = 'none';
      Final_resume.style.animation = 'entrance linear 0.3s forwards'
      Final_resume.style.display = 'flex';

      // Update the variables with the form values
      FirstName = FName.value;
      LastName = LName.value;
      Gender = Gender.value;
      Address = Address.value;
      Birthday = Birthday.value;
      Description = Description.value;

      // Check if the Description is empty
      if (Description === '') {
        // If it is, assign a default description
        Description = "This user currently lacks a comprehensive description detailing their background, interests, and other personal attributes. Unfortunately, there is insufficient information available to provide a detailed account of their individuality, experiences, or characteristics. As a result, any attempt to present an insightful and comprehensive overview of this user's self-description is currently impeded by the absence of pertinent details about their life, preferences, and personal narrative.";
      }
      // Generate a random user ID
      UserId = Math.floor(Math.random() * 1000000000);

      // Calculate the user's age based on their birthday
      Age = new Date().getFullYear() - new Date(Birthday).getFullYear();
      Month = new Date().getMonth() - new Date(Birthday).getMonth();

      // Adjust the age if the user hasn't had their birthday this year
      if (Month < 0 || (Month === 0 && new Date().getDate() < new Date(Birthday).getDate())) {
        Age--;
      }

      // This block of code generates the final resume HTML
      Final_resume.innerHTML =
        `<div class="profile_resume">
          <img src="${Profile.src}" alt="Profile Picture">
          <h1>Name: ${FirstName} ${LastName}</h1>
          <h1>Legion ID: ${UserId}</h1> 
          <h2>Gender: ${Gender}</h2>
          <h2>Age: ${Age} </h2>
          <h2>Birthday: ${Birthday} </h2>
          <h2>Country: ${Address} </h2>
          <button onclick="Reset()">Create New</button>
        </div>   
        <div class="profile_results">
          <img src="${img_result}" alt="${img_alt}">
          <h1>Role: ${title}</h1>
          <h2>DESCRIPTION:</h2>
          <p>${Description}</p>
          <button onclick="Submit()">SUBMIT APPLICATION</button>
        </div>
        `;
    })
  }
}

// This function resets the form and reloads the page
function Reset() {
  // Start the closing animation for the final resume
  Final_resume.style.animation = 'close linear 0.3s forwards';

  // Add an event listener for the end of the animation
  Final_resume.addEventListener('animationend', () => {
    // Reload the page when the animation ends
    location.reload();
  })
}

/**
 * This function is called when the form is submitted.
 * It displays a popup box with a success message and an 'OK' button.
 * When the 'OK' button is clicked, the popup box is closed.
 */
function Submit() {
  // Display the popup box
  document.getElementsByClassName('popupbox')[0].style.display = 'grid';
  // Add an entrance animation to the popup box
  document.getElementsByClassName('popupbox')[0].style.animation = 'entrance linear 0.2s forwards';
  // Set the content of the popup box
  document.getElementsByClassName('popupbox')[0].innerHTML =
    `<p>We appreciate your interest in joining our team and wish you the best of luck!</p>\
      <button id="close">OK</button>`;
  // Add a click event listener to the 'OK' button
  document.getElementById('close').addEventListener('click', () => {
    // Add a close animation to the popup box when the 'OK' button is clicked
    document.getElementsByClassName('popupbox')[0].style.animation = 'close linear 0.2s forwards';
  });
  return;
}

//This last part of Codes are for the questions.
//The reason why this is at the last part of the code is to ensure that the function is defined before it's called.

// Call the generateQuestions function passing the current question index as the argument
generateQuestions(currentQuestion);
// Add a click event listener to the 'Next' button to load the next question
nextButton.addEventListener('click', loadNextQuestion);
// Add a click event listener to the 'Previous' button to load the previous question
previousButton.addEventListener('click', loadPreviousQuestion);