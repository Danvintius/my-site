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
  counter.textContent++;
  document.location = 'Заговор_котов_фрагмент.htm';
}

const btnBought = document.querySelector('.bought')
btnBought.onclick = function() {
  document.location = 'Об_авторе.htm';
}

const content = document.querySelector('.content')
const iframe = document.querySelector('.content-content')
content.onclick = function() {
  iframe.style.display = 'block';
}

const wiki = document.querySelector('.wiki-link')
wiki.onclick = function() {
  if (window.confirm("Перейти на другой сайт?")) {
    return;
  } else {
    wiki.setAttribute("href"," ");
  }
}