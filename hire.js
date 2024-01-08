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


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.test');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const option6 = document.querySelector('.option6');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions(index) {
  //Select each question by passing it a particular index
  const question = questions[index];
  const option1Total = questions[index].answer1Total;
  const option2Total = questions[index].answer2Total;
  const option3Total = questions[index].answer3Total;
  const option4Total = questions[index].answer4Total;
  const option5Total = questions[index].answer5Total;
  const option6Total = questions[index].answer6Total;
  //Populate html elements 
  questionEl.innerHTML = `${index + 1}. ${question.question}`
  option1.setAttribute('data-total', `${option1Total}`);
  option2.setAttribute('data-total', `${option2Total}`);
  option3.setAttribute('data-total', `${option3Total}`);
  option4.setAttribute('data-total', `${option4Total}`);
  option5.setAttribute('data-total', `${option5Total}`);
  option6.setAttribute('data-total', `${option6Total}`);
  option1.innerHTML = `${question.answer1}`
  option2.innerHTML = `${question.answer2}`
  option3.innerHTML = `${question.answer3}`
  option4.innerHTML = `${question.answer4}`
  option5.innerHTML = `${question.answer5}`
  option6.innerHTML = `${question.answer6}`
}


function loadNextQuestion() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert('Please select your answer!');
    return;
  }
  //Get value of selected radio
  const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

  ////Add the answer score to the score array
  score.push(answerScore);

  selectedAnswersData.push()


  const totalScore = score.reduce((total, currentNum) => total + currentNum);

  //Finally we incement the current question number ( to be used as the index for each array)
  currentQuestion++;

  //once finished clear checked
  selectedOption.checked = false;
  //If quiz is on the final question
  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  //If the quiz is finished then we hide the questions container and show the results 
  if (currentQuestion == totalQuestions) {
    container.style.display = 'none';
    if (totalScore <= 20) {
      title = "Recruit";
      img_result = "assets/recruit.png";
      img_alt = "Recruit";
      description = "As a Recruit, your innate potential and adaptability make you the foundation of the Legion. Your journey is just beginning, and you bring a fresh perspective, eagerness to learn, and the resilience needed to thrive in the face of challenges.";
    }
    else if (totalScore >= 21 && totalScore < 25) {
      title = "Field Operator";
      img_result = "assets/field_operator.png";
      img_alt = "Field Operator";
      description = "Your balanced skills in leadership and adaptability designate you as a Field Operator. You excel in dynamic environments, swiftly responding to challenges on the front lines. Your ability to lead and take charge makes you an essential asset to the Legion's operational success.";
    }
    else if (totalScore >= 25 && totalScore < 30) {
      title = "Combat Medic";
      img_result = "assets/combat_medic.png";
      img_alt = "Combat Medic";
      description = "Your compassion and quick thinking under pressure mark you as a Combat Medic. Whether on the battlefield or during peacetime, your medical expertise and dedication to providing care ensure the well-being of your fellow Legion members, making you a vital asset in times of crisis.";
    }
    else if (totalScore >= 30 && totalScore < 33) {
      result.innerHTML =
        title = "Logistics Specialist";
      img_result = "assets/logistic.png";
      img_alt = "Logistics Specialist";
      description = "Precision and organization define your role as a Logistics Specialist. Your strategic mind ensures the seamless coordination of resources, from supplies to personnel, supporting the Legion's operations with efficiency and precision.";
    }
    else if (totalScore >= 33 && totalScore < 36) {
      title = "Tactical Engineer";
      img_result = "assets/tactical_engineer.png";
      img_alt = "Tactical Engineer";
      description = "As a Tactical Engineer, your analytical mind and technical skills make you the backbone of strategic planning. Your ability to design and implement solutions on the fly, coupled with a keen understanding of technology, enhances the Legion's capabilities on and off the field.";
    }
    else if (totalScore >= 39 && totalScore < 42) {
      title = "Elite Guard";
      img_result = "assets/elite_guard.png";
      img_alt = "Elite Guard";
      description = "Your exceptional skills in combat and protection distinguish you as an Elite Guard. You are entrusted with safeguarding key figures and critical assets, embodying the epitome of martial prowess within the Legion.";
    }
    else if (totalScore >= 42 && totalScore < 45) {
      title = "Strategic Analyst";
      img_result = "assets/strategic_analyst.png";
      img_alt = "Strategic Analyst";
      description = "Your keen analytical skills position you as a Strategic Analyst. Whether deciphering intelligence or formulating tactical plans, your ability to gather and interpret information contributes to the Legion's strategic advantage.";
    }
    else if (totalScore >= 45 && totalScore < 48) {
      title = "Intelligence Operative";
      img_result = "assets/intelligence.png";
      img_alt = "Intelligence Operative";
      description = "As an Intelligence Operative, your knack for gathering information covertly and your sharp analytical mind make you a master of espionage. Your role is crucial in uncovering threats and providing the Legion with the intelligence needed to make informed decisions.";
    }
    else if (totalScore >= 48 && totalScore < 51) {
      title = "Special Operations Commander";
      img_result = "assets/operation_commander.png";
      img_alt = "Special Operations Commander";
      description = "Your leadership and strategic acumen earmark you as a Special Operations Commander. You excel in coordinating specialized missions, leading a select group of operatives with precision and tactical brilliance to achieve objectives that go beyond the ordinary scope of operations.";
    }
    else if (totalScore >= 51 && totalScore < 54) {
      title = "Legal Counsel";
      img_result = "assets/legal.png";
      img_alt = "Legal Counsel";
      description = "Your expertise in legal matters and commitment to upholding ethical standards mark you as a Legal Counsel. You ensure the Legion's operations adhere to international laws and regulations, providing guidance on legal matters to safeguard the organization's reputation.";
    }
    else if (totalScore >= 54 && totalScore < 57) {
      title = "Commander-in-Chief";
      img_result = "assets/commander.png";
      img_alt = "Commander In Chief";
      description = "Your exceptional leadership skills and strategic vision designate you as the Commander-in-Chief. As the highest-ranking officer, you guide the Legion with wisdom and authority, making crucial decisions to ensure the organization's success and uphold its values.";
    }
    else {
      title = "Cybersecurity Specialist";
      img_result = "assets/cybersecurity.png";
      img_alt = "Cybersecurity Specialist";
      description = "Your expertise in cybersecurity and technological defense positions you as a Cybersecurity Specialist. In an era of digital threats, you play a critical role in safeguarding the Legion's information and infrastructure from cyber-attacks, ensuring the organization's security in the digital realm";
    }
    result.innerHTML =
      `<h1>${title}</h1>
        <img src="${img_result}" alt="${img_alt}">
        <p>${description}</p>
        <div class="button">
        <button onclick="restartQuiz()">Restart Quiz</button>
        <button onclick="loadresume()">Submit</button>
        </div>
        `;

    return;
  }
  generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
  //Decrement quentions index
  currentQuestion--;
  //remove last array value;
  score.pop();
  //Generate the question
  generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz() {

  //reset array index and score
  currentQuestion = 0;
  score = [];
  //Reload quiz to the start
  location.reload();
}

//For Final Resume
let Profile = document.getElementById('profile');
let Input = document.getElementById('input');
var FName = document.getElementById('f_name');
var Gender = document.getElementById('gender');
var LName = document.getElementById('last_name');
var Address = document.getElementById('address');
var Birthday = document.getElementById('birthday');
var Description = document.getElementById('description');
var Resume = document.getElementsByClassName('resume')[0];
var Final_resume = document.getElementsByClassName('finalresume')[0];
var HirePage = document.getElementById('hirepage');

Input.onchange = () => {
  Profile.src = URL.createObjectURL(Input.files[0]);
}


function loadresume() {
  if (FName.value === '' || Gender.value === '' || LName.value === '' || Address.value === '' || Birthday.value === '' || Description.value === '') {
    Resume.style.animation = 'shake linear 1s forwards';
  }
  else {
    HirePage.style.height = '100%';
    window.scrollTo(0, 0);
    Resume.style.animation = 'close linear 0.3s forwards';
    Resume.addEventListener('animationend', () => {
      Resume.style.display = 'none';
      Final_resume.style.animation = 'entrance linear 0.3s forwards'
      Final_resume.style.display = 'flex';
      FirstName = FName.value;
      LastName = LName.value;
      Gender = Gender.value;
      Address = Address.value;
      Birthday = Birthday.value;
      Description = Description.value;
      UserId = Math.floor(Math.random() * 1000000000);
      Age = new Date().getFullYear() - new Date(Birthday).getFullYear();
      Month = new Date().getMonth() - new Date(Birthday).getMonth();
      if (Month < 0 || (Month === 0 && new Date().getDate() < new Date(Birthday).getDate())) {
        Age--;
      }

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

function Reset() {
  Final_resume.style.animation = 'close linear 0.3s forwards';
  Final_resume.addEventListener('animationend', () => {
    location.reload();
  })
}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click', loadPreviousQuestion);