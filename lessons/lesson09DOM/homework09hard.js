'use strict';


/* 1) Выведите на страницу текущую дату и время в 2-х форматах: 
      a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'  
      б) '04.02.2020 - 21:05:33' 
   2) Для вывода в формате (а) напишите функцию, 
которая будет менять менять склонение слов в зависимости от числа, "час, часов, часа"
   3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями,
которые состоят из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)
   4) С помощью функции setInterval, реализуйте вывод даты и времени каждую секунду  
   часы - от 0 до 23
   минуты - от 0 до 59
   секунды - от 0 до 59 */

let myDate = new Date(); // текущая дата 
console.log(myDate);

let dayOfTheWeek = myDate.getDay(); // день недели текущей даты 
let dayOfTheMonth = myDate.getDate(); // число месяца текущей даты 
let numberOfMonth = myDate.getMonth(); // месяц текущей даты 
let year = myDate.getFullYear(); // текущий год

let hour = myDate.getHours(); // текщий час
let minute = myDate.getMinutes(); // текущая минута
let second = myDate.getSeconds(); // текущая секунда


// данные для русскоязычного вывода в консоль 
// массив с днями недели
let ruDayOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let nameOfRuDayOfTheWeek = ruDayOfTheWeek[dayOfTheWeek]; // Название дня недели на русском языке

// массив с месяцами
let ruMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
let nameOfRuMonth = ruMonth[numberOfMonth]; // название месяца на русском языке из массива ruMonth

// переменная для вывода в консоль 
let ruLogVariable = 'Сегодня ' + nameOfRuDayOfTheWeek + ', ' + dayOfTheMonth + ' ' + nameOfRuMonth + ' ' + year + ' года, ' + hour + ' часов ' + minute + ' минуты ' + second + ' секунд';


if (dayOfTheWeek >= 0 && dayOfTheWeek <= 6) {
   console.log(ruLogVariable);
} else {
   console.log('Неправильно введена дата!');
}