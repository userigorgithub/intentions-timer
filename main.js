
var allButtons = document.querySelector('.button');
var buttonStudy = document.querySelector('#button-1');
var buttonMeditate = document.querySelector('#button-2');
var buttonExercise = document.querySelector('#button-3');
var studyIconLit = document.querySelector('#study-icon-active');
var studyIcon = document.querySelector('#study-icon');
var meditateIcon = document.querySelector('#meditate-icon');
var meditateIconLit = document.querySelector('#meditate-icon-active');
var exerciseIcon = document.querySelector('#exercise-icon');
var exerciseIconLit = document.querySelector('#exercise-icon-active');
var accomplishments = document.querySelector("#accomplishments");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var startTimer = document.querySelector(".start-activity-button");
var warningMessage = document.querySelector(".warning");
var errorMessage = document.querySelector(".error-message");
var newActivityScreen = document.querySelector(".new-activity-main");
var currentActivityScreen = document.querySelector(".current-activity");
var completedActivityScreen = document.querySelector(".completed-activity");
var activityHeader = document.querySelector(".main-activity-header");
var accomplishmentsInput = document.querySelector('.accomplishments');
var accomplishmentsOutput = document.querySelector('.accomplishments-timer-output');
var accomplishmentsTimer = document.querySelector('.accomplishmentsTimer');
var timerMinutesOutput = document.querySelector('.minutes');
var timerSecondsOutput = document.querySelector('.seconds');
var timerButton = document.querySelector('.timer-button');
var mins = document.querySelector('#timer-mins');
var secs = document.querySelector('#timer-secs');
var logCurrentActivity = document.querySelector(".log-activity");
var indicator = document.querySelector('.card-indicator');
var defaultText = document.querySelector('.default-text');
var activityCard = document.querySelector('.activity-card');
var returnHome = document.querySelector('.return-home-btn');
var goals = document.querySelector(".accomplishments-timer-input");
var minOutput = document.querySelector(".time-m");
var secOutput = document.querySelector(".time-s");
var timerDisplay = document.querySelector(".timer-time");

var invalidChars = ["-", "e", "+", "E"];
var category = "";
var savedActivities = [];
var savedCards = [];
var currentActivity;

var upTimer;

errorMessage.classList.add('hidden');
studyIconLit.classList.add('hidden');
meditateIconLit.classList.add('hidden');
exerciseIconLit.classList.add('hidden');

startTimer.addEventListener("click", beginClock);
minutes.addEventListener("keydown", function () {
  checkCharacters(event);
});
seconds.addEventListener("keydown", function () {
  checkCharacters(event);
});

returnHome.addEventListener("click", changeHome);
logCurrentActivity.addEventListener("click", saveToStorage);
buttonStudy.addEventListener('click', function() {
  category = "study"
  changeIcon(studyIcon, studyIconLit);
  buttonStudy.style.border = '2px #B3FD78 solid';
  buttonStudy.style.color = '#B3FD78'
  buttonMeditate.style.border = '2px #FFF solid';
  buttonMeditate.style.color = '#FFF'
  buttonExercise.style.border = '2px #FFF solid';
  buttonExercise.style.color = '#FFF'
  meditateIconLit.classList.add('hidden');
  exerciseIconLit.classList.add('hidden');
  meditateIcon.classList.remove('hidden');
  exerciseIcon.classList.remove('hidden');
});

buttonMeditate.addEventListener('click', function() {
  category = "meditate"
  buttonMeditate.style.border = '2px #C278FD solid';
  buttonMeditate.style.color = '#C278FD'
  buttonStudy.style.border = '2px #FFF solid';
  buttonStudy.style.color = '#FFF'
  buttonExercise.style.border = '2px #FFF solid';
  buttonExercise.style.color = '#FFF'
  studyIconLit.classList.add('hidden');
  exerciseIconLit.classList.add('hidden');
  studyIcon.classList.remove('hidden');
  exerciseIcon.classList.remove('hidden');
  changeIcon(meditateIcon, meditateIconLit);
});

buttonExercise.addEventListener('click', function() {
  category = "exercise"
  buttonExercise.style.border = '2px #FD8078 solid';
  buttonExercise.style.color = '#FD8078'
  studyIconLit.classList.add('hidden');
  meditateIconLit.classList.add('hidden');
  buttonStudy.style.border = '2px #FFF solid';
  buttonStudy.style.color = '#FFF'
  buttonMeditate.style.border = '2px #FFF solid';
  buttonMeditate.style.color = '#FFF'
  studyIcon.classList.remove('hidden');
  meditateIcon.classList.remove('hidden');
  changeIcon(exerciseIcon, exerciseIconLit);
});

timerButton.addEventListener("click", function() {
  if (upTimer === undefined) {
    upTimer = setInterval(timer, 1000)
  };
  timer();
});

function defaultState() {
  buttonExercise.style.border = '2px #FFF solid';
  buttonExercise.style.color = '#FFF';
  buttonMeditate.style.border = '2px #FFF solid';
  buttonMeditate.style.color = '#FFF';
  buttonStudy.style.border = '2px #FFF solid';
  buttonStudy.style.color = '#FFF';
  studyIconLit.classList.add('hidden');
  meditateIconLit.classList.add('hidden');
  exerciseIconLit.classList.add('hidden');
  studyIcon.classList.remove('hidden');
  meditateIcon.classList.remove('hidden');
  exerciseIcon.classList.remove('hidden');
};

function timerRun() {
  accomplishmentsOutput.innerText = currentActivity.description;
  timerMinutesOutput.innerText = currentActivity.minutes;
  timerSecondsOutput.innerText = currentActivity.seconds;
};

function checkCharacters(event) {
  if (invalidChars.includes(event.key)) {
    event.preventDefault();
  };
};

function beginClock() {
  if (accomplishments.value === "") {
    errorMessage.classList.remove('hidden');
  } else if (minutes.value === "") {
    errorMessage.classList.remove('hidden');
    errorMessage.innerHTML = `<img class="warning" src="./assets/warning.svg">
    <small class="warning" id="error">A minutes value is required</small>`
  } else if (seconds.value === "") {
    errorMessage.classList.remove('hidden');
    errorMessage.innerHTML = `<img class="warning" src="./assets/warning.svg">
    <small class="warning" id="error">A seconds value is required</small>`
  } else if (category === "") {
    errorMessage.classList.remove('hidden');
    errorMessage.innerHTML = `<img class="warning" src="./assets/warning.svg">
    <small class="warning" id="error">A category is required</small>`
  } else {
    newActivityScreen.classList.add('hidden');
    currentActivityScreen.classList.remove('hidden');
    accomplishmentsTimer.classList.remove('hidden');
    timerButton.classList.remove('hidden');
    completedActivityScreen.classList.add('hidden');
  };

     currentActivity = new Activity(category, accomplishments.value, minutes.value, seconds.value);
    savedActivities.push(currentActivity);
  timerRun();
  changeCountdownColor();
};

function changeCountdownColor() {
  if (currentActivity.category === 'study') {
    timerButton.style.borderColor = '#B3FD78';
  } else if (currentActivity.category === 'meditate') {
    timerButton.style.borderColor = '#C278FD';
  } else if (currentActivity.category === 'exercise') {
    timerButton.style.borderColor = '#FD8078';
  };
};

function timer() {
  if (secs.innerText != 0) {
    "0" + secs.innerText--;
  } else if (mins.innerText != 0 && secs.innerText == 0){
    secs.innerText = 59;
    mins.innerText--;
  } else if (mins.innerText && secs.innerText === 0) {
    logCurrentActivity.classList.remove('.hidden');
  } else if (mins.innerText && secs.innerText == 0) {
    clearInterval(upTimer);
    timerButton.innerText = "COMPLETE!";
    currentActivity.markComplete();
    logCurrentActivity.classList.remove('hidden');
  } 
};

function changeIcon(icon, iconActive) {
    icon.classList.add('hidden');
    iconActive.classList.remove('hidden');
};

function changeButton() {
  timerButton.innerText = "START";
  currentActivity.completed = false;
};

function saveToStorage() {
  completedActivityScreen.classList.remove('hidden');
  currentActivityScreen.classList.add('hidden');
  defaultText.classList.add('hidden');
  activityCard.classList.remove('hidden');
  logCurrentActivity.classList.add('hidden');
  accomplishmentsTimer.classList.add('hidden');
  timerButton.classList.add('hidden');
  returnHome.classList.remove('hidden');
  createCard();
};

function createCard(category) {
  activityCard.innerHTML = ``;
  for (var i = 0; i < savedActivities.length; i++) {
    activityCard.innerHTML += `
    <article class="activity-card">
    <article class="card-indicator-${savedActivities[i].category}"></article>
    <h2 class="card-title">${savedActivities[i].category.toUpperCase()}</h2>
    <p class="card-time">${savedActivities[i].minutes} MIN ${savedActivities[i].seconds} SECONDS</p>
    <p class="card-activity">${savedActivities[i].description}</p>`;
  };
};

function changeHome() {
  newActivityScreen.classList.remove('hidden');
  completedActivityScreen.classList.add('hidden');
  accomplishments.value = '';
  minutes.value = '';
  seconds.value = '';
  currentActivity = '';
  defaultState();
  changeButton();
  timerButton.innerText = "START";
  timer();
};