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
var errorMessage = document.querySelector(".error-message")



errorMessage.classList.add('hidden')
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

function beginClock() {
  if (accomplishments.value === "") {
    errorMessage.classList.remove('hidden')
  } else if (minutes.value === "") {
    errorMessage.classList.remove('hidden')
  } else if (seconds.value === "") {
    errorMessage.classList.remove('hidden')
  }
}

function changeIcon(icon, iconActive) {
    icon.classList.add('hidden');
    iconActive.classList.remove('hidden');
}

// if (minutes.value === NaN || "") {
//
// }
//
// if (seconds.value === NaN || "") {
//   return "Please enter a number"
// }
