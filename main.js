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
var activityHeader = document.querySelector(".main-activity-header");
var accomplishmentsInput = document.querySelector('.accomplishments');
var accomplishmentsOutput = document.querySelector('.accomplishments-timer-output');
var timerMinutesOutput = document.querySelector('.minutes');
var timerSecondsOutput = document.querySelector('.seconds');
var timerButton = document.querySelector('.timer-button');
var mins = document.querySelector('#timer-mins');
var secs = document.querySelector('#timer-secs');
var upTimer;



function timerRun() {
  accomplishmentsOutput.innerText = accomplishmentsInput.value;
  timerMinutesOutput.innerText = minutes.value;
  timerSecondsOutput.innerText = seconds.value;
    if(minutes.value < 10) {
      timerMinutesOutput.innerText = `0${minutes.value} `
    }
    if (seconds.value < 10) {
      timerSecondsOutput.innerText = ` 0${seconds.value}`
    }
  setInterval(minutes.value, seconds.value);

}


var goals = document.querySelector(".accomplishments-timer-input")
var minOutput = document.querySelector(".time-m")
var secOutput = document.querySelector(".time-s")


var invalidChars = ["-", "e", "+", "E"];
var category = "";
var savedActivities = [];
var currentActivity;

errorMessage.classList.add('hidden');
studyIconLit.classList.add('hidden');
meditateIconLit.classList.add('hidden');
exerciseIconLit.classList.add('hidden');

buttonStudy.addEventListener('click', function() {
category = "study"
meditateIconLit.classList.add('hidden')
exerciseIconLit.classList.add('hidden')
meditateIcon.classList.remove('hidden')
exerciseIcon.classList.remove('hidden')
changeIcon(studyIcon, studyIconLit)});

buttonMeditate.addEventListener('click', function() {
  category = "meditate"
  studyIconLit.classList.add('hidden')
  exerciseIconLit.classList.add('hidden')
  studyIcon.classList.remove('hidden')
  exerciseIcon.classList.remove('hidden')
  changeIcon(meditateIcon, meditateIconLit)
});
buttonExercise.addEventListener('click', function() {
  category = "exercise"
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
  }
     currentActivity = new Activity(category, accomplishments.value, minutes.value, seconds.value);
    savedActivities.push(currentActivity);
  timerRun();
  changeCountdownColor()
}

function changeCountdownColor() {
  if (currentActivity.category === 'study') {
    timerButton.style.borderColor = '#B3FD78';
  } else if (currentActivity.category === 'meditate') {
    timerButton.style.borderColor = '#C278FD';
  } else if (currentActivity.category === 'exercise') {
    timerButton.style.borderColor = '#FD8078';
  }
}


/////////////////////////////////////////////////////


timerButton.addEventListener("click", function() {
  if (upTimer === undefined) {
    upTimer = setInterval(timer, 1000)
  }
})

function timer() {
  if (secs.innerText != 0) {
    secs.innerText--;
  } else if (mins.innerText != 0 && secs.innerText == 0){
    secs.innerText = 59;
    mins.innerText--;
  } else if (mins.innerText && secs.innerText == 0) {
    timerButton.innerText = "COMPLETE!";
  }
}


//   makeInstance();
//   goals.innerText = accomplishments.value;
//   minOutput.innerText = minutes.valueAsNumber;
//   secOutput.innerText = seconds.valueAsNumber;
//
 //}

function changeIcon(icon, iconActive) {
    icon.classList.add('hidden');
    iconActive.classList.remove('hidden');
}

// function makeInstance() {
//   var currentActivity = new Activity(category, accomplishments.value, minutes.value, seconds.value, (minutes.value + seconds.value))
// }
