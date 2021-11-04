var buttonStudy = document.querySelector('#button-1');
var buttonMeditate = document.querySelector('#button-2')
var buttonExercise = document.querySelector('#button-3')
var studyIconLit = document.querySelector('#study-icon-active');
var studyIcon = document.querySelector('#study-icon');
var meditateIcon = document.querySelector('#meditate-icon');
var meditateIconLit = document.querySelector('#meditate-icon-active');
var exerciseIcon = document.querySelector('#exercise-icon');
var exerciseIconLit = document.querySelector('#exercise-icon-active');
var accomplishments = document.querySelector("#accomplishments")
var minutes = document.querySelector("#minutes")
var seconds = document.querySelector("#seconds")
var startTimer = document.querySelector(".start-activity-button")
var warningMessage = document.querySelector(".warning");
var errorMessage = document.querySelector(".error-message");
var newActivityScreen = document.querySelector(".new-activity-main");
var currentActivityScreen = document.querySelector(".current-activity");
var activityHeader = document.querySelector(".main-activity-header");


var invalidChars = ["-", "e", "+", "E"];



errorMessage.classList.add('hidden');
studyIconLit.classList.add('hidden');
meditateIconLit.classList.add('hidden');
exerciseIconLit.classList.add('hidden');

buttonStudy.addEventListener('click', function() {
meditateIconLit.classList.add('hidden')
exerciseIconLit.classList.add('hidden')
meditateIcon.classList.remove('hidden')
exerciseIcon.classList.remove('hidden')
changeIcon(studyIcon, studyIconLit)});

buttonMeditate.addEventListener('click', function() {
  studyIconLit.classList.add('hidden')
  exerciseIconLit.classList.add('hidden')
  studyIcon.classList.remove('hidden')
  exerciseIcon.classList.remove('hidden')
  changeIcon(meditateIcon, meditateIconLit)
});
buttonExercise.addEventListener('click', function() {
  studyIconLit.classList.add('hidden')
  meditateIconLit.classList.add('hidden')
  studyIcon.classList.remove('hidden')
  meditateIcon.classList.remove('hidden')
  changeIcon(exerciseIcon, exerciseIconLit)
});

startTimer.addEventListener("click", beginClock)

minutes.addEventListener("keydown", function () {
  checkCharacters(event)
})
seconds.addEventListener("keydown", function () {
  checkCharacters(event)
})

function checkCharacters(event) {
  if (invalidChars.includes(event.key)) {
    event.preventDefault()
  }
}

function beginClock() {

  if (accomplishments.value === "") {
    errorMessage.classList.remove('hidden')
  } else if (minutes.value === "") {
    errorMessage.classList.remove('hidden')
    // errorMessage.innerHTML = "A minutes value is required"
  } else if (seconds.value === "") {
    errorMessage.classList.remove('hidden')
    // errorMessage.innerHTML = "A seconds value is required"
  } else {
    newActivityScreen.classList.add('hidden');
    currentActivityScreen.classList.remove('hidden');
    document.getElementById("current-activity-id").innerText = "Current Activity"
  }
}

function changeIcon(icon, iconActive) {
    icon.classList.add('hidden');
    iconActive.classList.remove('hidden');
}
