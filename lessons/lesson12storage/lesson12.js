'use strict';


// localStorage, sessionStorage, cookie
// чаще всего используется localStorage
const inputText = document.getElementById('myText');
const myBtn = document.getElementById('myBtn');
const text = document.getElementById('text');

/* const showText = function() {
   text.textContent = localStorage.myText;
};

myBtn.addEventListener('click', function() {
   localStorage.myText = inputText.value;
   showText();
});

showText(); */ // выведется даже при обновлении страницы 

// sessionStorage сохраняет данные только на время сессии, а localStorage хранит всегда, 
// пока не перезапишут или не удалят

// в localStorage есть методы getItem, для получения значения и setItem, для записи нового значения

const showText = function() {
   text.textContent = localStorage.getItem('memory');
};

myBtn.addEventListener('click', function() {
   localStorage.setItem('memory',inputText.value); // memory ключ, второе - значение
   showText();
});

localStorage.removeItem('myText'); // удаляет 

showText();



// cookie работают только через HTTP сервер
// cookie содержатся в объекте document

// пример
document.cookie = 'имя=значение';
document.cookie = 'имя2=значение2';
document.cookie = 'имя3=значение3';
document.cookie = 'имя=значение4'; // в таком случае заменятеся значение в первой

