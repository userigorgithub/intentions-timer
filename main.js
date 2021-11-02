var buttonCategory = document.querySelector('.button');
var studyIconLit = document.querySelector('#study-icon-active');
var studyIcon = document.querySelector('#study-icon');
var meditateIcon = document.querySelector('#meditate-icon');
var meditateIconLit = document.querySelector('#meditate-icon-active');
var exerciseIcon = document.querySelector('#exercise-icon');
var exerciseIconLit = document.querySelector('#exercise-icon-active');


studyIconLit.classList.add('hidden');
meditateIconLit.classList.add('hidden');
exerciseIconLit.classList.add('hidden');

buttonCategory.addEventListener('click', changeIcon)

function changeIcon() {
    studyIconLit.classList.remove('hidden');
    studyIcon.classList.add('hidden');
}