let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};

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

const btn = document.querySelector('.free-fragment');
const counter = document.querySelector('.counter')
btn.onclick = function() {
  console.log("Нажали");
  window.alert('Бесплатный фрагмент');
  counter.textContent++;
}

const btnBought = document.querySelector('.bought')
btnBought.onclick = function() {
  document.location = 'Об_авторе.htm'
}