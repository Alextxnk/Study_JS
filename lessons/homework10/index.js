'use strict';


/* Используя только файл скрипта (html руками не трогать) выполнить такие действия:
   + 1). Восстановить порядок книг.
   + 2). Заменить картинку заднего фона на другую из папки image
   3). Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
   + 4). Удалить рекламу со страницы 
   5). Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, 
   поможет dev tools)
   6). В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место */

const booksAside = document.querySelectorAll('.books');
console.log(booksAside);
const books = document.querySelectorAll('.book');
console.log(books);

// 1). Восстановил порядок книг
booksAside[0].prepend(books[1]); // ставим 1 элемент в начало
books[0].after(books[4]); // ставим 3 элемент на место
books[3].after(books[5]); // ставим 4 элемент на место
books[5].after(books[2]); // ставим 6 элемент на место

// 2). поменял задний фон
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3). Исправил заголовок в книге 3


// 4). убрал рекламу
const advertisement = document.querySelector('.adv');
advertisement.style = 'display: none';