'use strict';


document.body.style.backgroundColor = '#D2B4DE';

const collections = document.querySelectorAll('.collection');
const elems = document.querySelectorAll('.elem');

console.log(collections);
console.log(elems);

elems[3].remove(); // удаление элемента из DOM дерева

// метод append перемещает элементы в конец, он не создает копии, 
// elems[1] мы не удаляли, но он пропадает при исползовании этого метода 
collections[1].append(elems[3]); // перемещение элемента в DOM дереве
collections[1].append(elems[1]); // перемещение элемента в DOM дереве
collections[1].prepend(elems[5]); // перемещает элемент в начало 

collections[0].before(collections[1]); // меняет списки местами первый перед нулевым

elems[4].after(elems[0]); // нулевой элемент становится после четвертого

elems[2].replaceWith(elems[3]);
elems[0].replaceWith('elem 0');

// еще элементы можно клонировать 
const elemClone = elems[3].cloneNode(); // неполная копия, мы скопируем только пустую li с классом, но без текста
collections[1].append(elemClone);
elemClone.textContent = 'el';

const elemClone1 = elems[4].cloneNode(true); // полная копия (глубокая)
collections[1].append(elemClone1);

elemClone1.classList.add('newElem'); // добавление класса
elemClone1.textContent = 'new elem'; // добавление текста

elems[1].innerHTML = '<span>Hello world</span>'; // этот метод затирает объект

// есть решение, как создать новый элемент 
const newElem = document.createElement('li'); // любой тег можно создать 
console.log(newElem);

collections[1].append(newElem);
newElem.textContent = 'Новый элемент';
newElem.classList.add('new_elem');

// метод вставляет текст и не затирает верстку
const secondHead = document.querySelector('#second-head');
console.log(secondHead);

// принимает два параметра 1 - место, куда хотим вставить (4 варианта), 2 - сам текст
secondHead.insertAdjacentText('beforebegin', 'Before begin text');
secondHead.insertAdjacentText('afterend', 'After end text');
secondHead.insertAdjacentText('afterbegin', 'After begin text');
secondHead.insertAdjacentText('beforeend', 'Before end text');

secondHead.insertAdjacentElement('afterend', elems[1]); 

secondHead.insertAdjacentHTML('beforebegin', '<h3>before begin third head</h3>');


// устаревшие методы ими пользоваться не нужно, мы их просто рассмотрим, чтоб знать, 
// что с ними делать, если встретим их в старом коде
// новые методы проще и лаконичнее
collections[0].appendChild(newElem); // новый метод append
collections[0].insertBefore(newElem, elems[4]); // новый метод before
collections[0].insertBefore(elems[4], collections[0].firstChild); // новый метод prepend
collections[0].replaceCHild(newElem, elems[2]); // новый метод replaceWith
collections[0].removeChild(elems[2]); // новый метод remove
