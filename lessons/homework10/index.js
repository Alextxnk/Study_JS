'use strict';


const booksAside = document.querySelectorAll('.books');
// console.log(booksAside);
const books = document.querySelectorAll('.book');
// console.log(books);

// 1). Восстановил порядок книг
booksAside[0].prepend(books[1]); // ставим 1 элемент в начало
books[0].after(books[4]); // ставим 3 элемент на место
books[3].after(books[5]); // ставим 4 элемент на место
books[5].after(books[2]); // ставим 6 элемент на место

// 2). поменял задний фон
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

// 3). Исправил заголовок в книге 3
const secondHead = document.querySelectorAll('h2'); // получилии тег h2
// console.log(secondHead);
// console.log(secondHead[2]);
secondHead[2].innerHTML = '<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes" target="_blank">Книга 3. this и Прототипы Объектов</a>';

// 4). убрал рекламу
const advertisement = document.querySelector('.adv');
advertisement.style = 'display: none';

// 5). Восстановил порядок глав
// Восстановить порядок глав во второй и пятой книге

const collections = document.querySelectorAll('.collection');
// console.log(collections); // 2 and 5 книги
const elems = document.querySelectorAll('.elem');
// console.log(elems); // li


// console.log(collections[0]); // 2 книга
// console.log(collections[1]); // 5 книга 

// 2 книга
elems[0].after(elems[1]);
elems[1].after(elems[3]);
elems[3].after(elems[6]);
elems[6].after(elems[8]);
elems[8].after(elems[4]);
elems[4].after(elems[5]);
elems[5].after(elems[7]);
elems[9].after(elems[2]);

// 5 книга
elems[12].after(elems[20]);
elems[20].after(elems[14]);
elems[14].after(elems[15]);
elems[18].after(elems[16]);


// 6). В шестой книге добавить главу
const bookNumSix = document.querySelector('.book-6'); // ul
// console.log(bookNumSix);

const newElem = document.createElement('li'); // создали новый li
bookNumSix.append(newElem); // добавили в ul
newElem.textContent = 'Глава 8: За пределами ES6'; 
newElem.classList.add('book-6-li');

const liNumSix = document.querySelectorAll('.book-6-li'); // получили все li
// console.log(liNumSix);
liNumSix[8].after(liNumSix[10]);