var buttonStudy = document.querySelector('#button-1');
var buttonMeditate = document.querySelector('#button-2')
var buttonExercise = document.querySelector('#button-3')
var studyIconLit = document.querySelector('#study-icon-active');
var studyIcon = document.querySelector('#study-icon');
var meditateIcon = document.querySelector('#meditate-icon');
var meditateIconLit = document.querySelector('#meditate-icon-active');
var exerciseIcon = document.querySelector('#exercise-icon');
var exerciseIconLit = document.querySelector('#exercise-icon-active');


studyIconLit.classList.add('hidden');
meditateIconLit.classList.add('hidden');
exerciseIconLit.classList.add('hidden');

buttonStudy.addEventListener('click', function() {
changeIcon(studyIcon, studyIconLit)});

buttonMeditate.addEventListener('click', function() {
  changeIcon(meditateIcon, meditateIconLit)
});
buttonExercise.addEventListener('click', function() {
  changeIcon(exerciseIcon, exerciseIconLit)
});

function changeIcon(icon, iconActive) {
    icon.classList.add('hidden');
    iconActive.classList.remove('hidden');
}
