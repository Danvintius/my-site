let body = document.querySelector('body');
let themeButton = document.querySelector('.theme-button');
let flex = document.querySelector('.book-flex');
let summary = document.querySelector('.summary');
let aside = document.querySelector('.aside');
let title = document.querySelector('.title');
themeButton.onclick = function() {
  body.classList.toggle('dark-theme');
  darkFlex();
}

function darkFlex() {
  title.classList.toggle('dark-theme');
  flex.classList.toggle('dark-theme');
  summary.classList.toggle('dark-theme');
  aside.classList.toggle('dark-theme-gray');
}

let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');

// form.onsubmit = function(evt) {
//  evt.preventDefault();
  // Измените значение textContent на следующей строке
//  message.textContent = 'Send to ' + email.value;
//};

let news1 = document.querySelector('.news1');
function News() {
document.write("Первая новость");
}

const btn = document.querySelector('.free-fragment-cd');
const counter = document.querySelector('.counter-cd')
btn.onclick = function() {
  console.log("Нажали");
  counter.textContent++;
  document.location = 'Заговор_котов_фрагмент.md';
}

const btnCd2 = document.querySelector('.free-fragment-cd2');
const counterCd2 = document.querySelector('.counter-cd2')
btnCd2.onclick = function() {
  counterCd2.textContent++;
  document.location = 'Новый_враг_фрагмент.md';
}

const btnCd3 = document.querySelector('.free-fragment-cd3');
const counterCd3 = document.querySelector('.counter-cd3')
btnCd3.onclick = function() {
  counterCd3.textContent++;
  document.location = 'Царский_меч_фрагмент.md';
}

const btnBought = document.querySelector('.bought')
btnBought.onclick = function() {
  document.location = 'Об_авторе.htm';
}

const wiki = document.querySelector('.wiki-link')
wiki.onclick = function() {
  if (window.confirm("Перейти на другой сайт?")) {
    return;
  } else {
    wiki.setAttribute("href"," ");
  }
}