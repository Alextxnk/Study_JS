'use strict';


document.body.style.backgroundColor = '#D2B4DE';

// события в JS
// на JS в основном пишется UI, а это значит, что нам как-то необходимо обрабатывать действия пользователя 
// и на них реагировать, для этого и существуют события в JS 
// работа с событиями строится с помощью функций, функция выполнятеся, когда происходит определенное событие,
// JS умеет отлавливать поведение пользователя: наведение мышкой на блоки, нажатие на кнопки мыши, 
// клавиатуры, скролл страницы, изменение размеров экрана 
// у браузера на каждое такое поведение навешаны события, эти все события описаны в DOM и являются его частью

let square = document.querySelector('.square');
console.log(square);
console.dir(square); // покажет наш элемент в виде объекта, в нем есть методы, которые начинаются на on, 
// они относятся к событиям 


// такие обработчики событий лучше не вешать
/* square.onclick = function() {
   console.log('click');
}; */


// навешивание слушателя
/* square.addEventListener('click', function() {
   console.log('click');
}); */

// еще один способ 

let count = 0;

// используем именную функцию, убираем слушателя событий после трех кликов 
/* let clicked = function() {
   count++;
   if (count === 3) {
      square.removeEventListener('click', clicked);
   }
   console.log('click');
};

square.addEventListener('click', clicked); */


// объект события - этот объект доступен только в функции обработчике события, 
// чтобы его получить мы должны первым параметром функции указать его имя,
// называть его можно как угодно, но принято называть event или просто буквой e

/* let eventFunc = function(event) {
   console.log(event.type);
};

square.addEventListener('click', eventFunc);
// square.addEventListener('mousemove', eventFunc);
square.addEventListener('mousedown', eventFunc);
square.addEventListener('mouseup', eventFunc);

square.addEventListener('mouseover', eventFunc);
square.addEventListener('mouseout', eventFunc);

square.addEventListener('mouseenter', eventFunc);
square.addEventListener('mouseleave', eventFunc);
 */
// важны type и target, а также current target
// target - это виновник события, например div на который мы кликнули 
// current target - где возникло событие 
// type в нашем случае click


// работа с формами

let eventFunc = function(event) {
   console.log(event.type);
   console.log(event.target.value); // нужно для range
};

document.querySelector('#text').addEventListener('input', eventFunc);
// событие input происходит, когда мы меняем состояние нашего DOM элемента input
// у элемента input есть свойство value - это то что мы видим в текстовом поле и каждый раз,
// когда оно меняется срабатывает событие input, когда добаляем или удаляем текст 

document.querySelector('#text').addEventListener('change', eventFunc);
// change - событие срабатывет, когда мы теряем фокус и значение value поменялось, 
// если значение value не поменялось, то тогда событие change не сработает 

document.querySelector('#text').addEventListener('keyup', eventFunc);
document.querySelector('#text').addEventListener('keydown', eventFunc);

document.querySelector('#text').addEventListener('focus', eventFunc); // когда мы кликаем на элемент(инпут)
document.querySelector('#text').addEventListener('blur', eventFunc); // когда кликаем мимо элемента, теряем фокус

// часто во время события blur проверяют, что ввел пользователь, валидную информацию или нет 
// и можем ли мы ему позволить отправить форму 

// еще интересен инпут range, у него отслеживается событие change
document.querySelector('#range').addEventListener('change', eventFunc);


// событие загрузки HTML документа состоит из трех стадий: DOMContentLoaded, 
// когда браузер полностью загрузил HTML страницу и постороил DOM дерево 
// дальше событие load, когда браузер загрузил все ресурсы 
// и последнее - уход со страницы  

// DOM content loaded происходит на самом документе, мы можем повесить обработчик события на документ

document.addEventListener('DOMContentLoaded', function() {
   console.log('страница загрузилась');
});
// часто такое событие используют, чтобы запустить весь скрипт нашей страницы
// пишут в начале файла и закрывают в самом конце 
// в таком случае JS дожидается, когда загрузится вся страница, а потом уже запускаются скрипты

// также есть событие windowOnLoad - оно срабатывает, когда загружается вся страница,
// включая ее ресурсы, стили, картинки, фреймы и тд. используестя это событие очень редко 
// поскольку нет необходимости подгружать все реурсы и это может очень задержать загрузку страницы
// в основном, если нужен определенный ресурс, то можно поставить событие onLoad на нем 

// еще есть событие onLoad - когда человек уходит со страницы или закрывает окно на window
// срабатывает событие onLoad


// еще есть событие onbeforeunload - оно используется чаще и может отменить переход со страницы,
// можно вызвать этот обработчик события и спросить пользователя "А вы уверены, что хотите закрыть страницу?"
// или "вы сохранили все данные?"

// работает если например, что-то написано в форме 
window.onbeforeunload = function() {
   return 'Вы уверены, что хотите закрыть страницу?';
};


// метод event.preventDefault() - этот метод отменяет стандартное событие браузера,
// тоесть стандартное поведение браузера, например при клике на ссылку у нас должна открываться новая страница
// или по клику на кнопку submit у нас отправляется форма и мы можем отменять эти события 
// например пока пользователь не заполнил форму или мы хотим вместо перехода на страницу по ссылке
// написать свои действия 

document.querySelector('#link').addEventListener('click', function(event) {
   event.preventDefault(); // и теперь по клику на ссылку у нас ничего не происходит 
   console.log('click'); 
});
// в таком случае мы можем уже написать свои команды, которые будут срабатывать при клике на ссылку

// еще с помощью event.preventDefault() мы можем использовать классную фишку 

document.addEventListener('contextmenu', function(event) {
   event.preventDefault(); // и теперь по клику на правую кнопку мыши, у нас не работает контекстное меню 
   console.log('click'); 
});
// на некоторых онлайн сервисах реализовано свое контекстное меню и по нажатию оключается стандартное 
// и включается свое 


// всплытие событий и перехват событий 

// помимо event target у нас есть еще current target - это элемент в котром в данный момент событие 
// обрабатывается и не всегда current target и event target совпадают 

let clickElem = null;

function greenHundler(event) {
   if(clickElem) {
      clickElem.classList.remove('green');
   }

   clickElem = event.currentTarget;
   clickElem.classList.add('green');
}

document.querySelector('.event_btn').addEventListener('click', greenHundler);
// сейчас в браузере объединили два события:
// сначала событие захватывается - тоесть срабатывает на document, потом на HTML, body etc. 
// а потом событие всплывает, если это возможно и возвращается обратно к документу  
// чтобы посмотреть как работает захват нужно третим параметром в обработчик событий 
// передать значение true 
// детально можно посмотреть работу событий в дебагере devTools 

// это используется часто, когда делают галереи, табы, меню, аккордеон и более сложные вещи 
// чтобы на каждый элемент не вешать событие, вешают на один общий элемент 
// например на обертку, просто внутри функции проверяют на каком элементе конкретно было вызвано событие,
// что было таргетом вызванного события - это называется делегирование, эту тему будем проходить позже 
