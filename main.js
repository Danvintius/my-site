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
iframe.classList.toggle('iframe-block');
iframe.classList.toggle('iframe-none');
}

const content2 = document.querySelector('.content2')
const iframe2 = document.querySelector('.content-content2')
content2.onclick = function() {
iframe2.classList.toggle('iframe-block');
iframe2.classList.toggle('iframe-none');
}

const content3 = document.querySelector('.content3')
const iframe3 = document.querySelector('.content-content3')
content3.onclick = function() {
iframe3.classList.toggle('iframe-block');
iframe3.classList.toggle('iframe-none');
}

const wiki = document.querySelector('.wiki-link')
wiki.onclick = function() {
  if (window.confirm("Перейти на другой сайт?")) {
    return;
  } else {
    wiki.setAttribute("href"," ");
  }
}