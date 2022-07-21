'use strict';


// API DOM
// API - Application Programming Interface
// API - это набор доступных свойств и методов для решения задачи, чаще всего они реализованы в виде объекта 

// первое API, с которым мы будем работать - это DOM - Document Object Model
// DOM необходим для работы с элементами на странице, 
// с помощью него мы будем создавать элементы, добавлять и изменять их


// следующий API - BOM - Browser Object Model, он необходим для работы с браузером 

// также будем работать с XML HTTP request - это специальный объект, 
// который нам позволяет работать с сервером, делает запросы к нему 



// сегодня изучим DOM

// когда вы открывете браузер, и у вас есть множество элементов, 
// которые описаны HTML версткой: теги, атрибуты, значения этих атрибутов, текст внутри тегов
// это все объекты DOM

// нам необходимо научиться работать с этими элементами, 
// но к сожалению javascript не умеет работать с HTML кодом напрямую,
// он не может прочитать теги в виде текста  

// на помощь приходит DOM - API браузера, которое собирает HTML структуру в
// объект document 

// движок javascript в браузере, чтоб получить объектную модель документа,
// каждый элемент на странице переводит в объект 

// например: вы создали div - он создает объект, вы напишите текст внутри этого div, 
// он создаст соответсвующую ноду - node (узел), так строится целое дерево объектов DOM

// из чего состоит это дерево - узел (на картинке синим цветом): подразделяются на родителя и дочерний элемент 
// родитель - это элемент из которого растет дерево, дети растут из узла - из родителя 

// также есть корень - элемент из которого растет все дерево, он всегда один у него нет родителей 
// и листья (на картинке зеленым цветом) - это элементы у которых нет детей 


// какой объект является корневым?

// многие отвечают HTML, но на самом деле это не так, корнем является объект document, 
// он описывает открытую странцу в браузере, от него растет все дерево,
// в него попадает вся структура, включая doctype, <html> и все остальные теги, 
// переносы, строки, табуляции и даже комментарии  

// для чего нам нужно DOM дерево?

// первое и самое основное - поиск элементов на странице 

console.log(document); // выводится вся структура документа 

// можем проверить, есть ли у документа родители, является ли он корнем  
console.log(document.parentElement); // null
// получили, что у документа родителей нет - он является корневым 

console.log(document.children); // можем посмотреть его дочерние элементы 
// у него дочерний элемент html 
// html коллекция - это псевдомассив, о котором мы говорили ранее,
// в нем есть объекты html, которые содержат: атрибуты, детей и множество свойств, если его раскрыть  

// как мы будем искать элементы на странице? 

// для этого в document есть встроенные методы для поиска элементов 

console.log(document.getElementById('main')); // обращаемся к элементу по id 
// когда нам необходимо получить элемент, у которого есть id или мы можем сами задать id
// лучше всего использовать этот метод 

// другие способы 
console.log(document.getElementsByTagName('h1')); // так мы получаем колллекцию

console.log(document.getElementsByTagName('h1')[0]); // а так мы получаем конкретный элемент

console.log(document.getElementsByClassName('header'));
