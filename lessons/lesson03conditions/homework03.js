'use strict';


let money = 70000;
const income = 15000;
let addExpenses = 'Интернет, Покупки, Еда, Уход за собой';
let deposit = true;
const mission = 400000;
const period = 12;

console.log('type of money: ',typeof money);
console.log('type of income: ', typeof income);
console.log('type of deposit: ', typeof deposit);

console.log('length of addExpenses: ', addExpenses.length);
console.log("Период равен " + period + " месяцев. Цель заработать " + mission + " рублей");

console.log('Array:',  addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);

money = +prompt('Ваш месячный доход?', 60000);
// console.log('money: ', money);
// console.log('type of money: ', typeof money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
'Flat, iTunes, Apple Music, Food, Gym, Taxi');

deposit = confirm('Есть ли у вас депозит в банке?'); 
// console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?' , 'Flat'); 
let amount1 = +prompt('Во сколько это обойдется?' , 20000); 

let expenses2 = prompt('Введите обязательную статью расходов?' , 'Food'); 
let amount2 = +prompt('Во сколько это обойдется?' , 11500); 

let amount = amount1 + amount2;
// console.log('amount: ',  amount);

let budgetMonth = money - amount;
// console.log('budgetMonth: ', budgetMonth);

let numberOfMonths = mission / budgetMonth;
numberOfMonths = Math.ceil(numberOfMonths); 
console.log('Цель будет достигнута за ' + numberOfMonths + ' месяцев');

budgetDay = budgetMonth / 30;
budgetDay = Math.floor(budgetDay);
console.log('Бюджет на день =', budgetDay);

if (budgetDay > 1200) {
   console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay <= 1200) {
   console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay <= 600) {
   console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
   console.log('Что-то пошло не так');
}


// доп задание  
/* 1. Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. 
Решите задачу:
   через if, 
   через switch-case  */ 

let myDate = new Date(); // текущая дата 
// console.log(myDate);

let dayOfTheWeek = myDate.getDay(); // день недели текущей даты 
let dayOfTheMonth = myDate.getDate(); // число месяца текущей даты 
let numberOfMonth = myDate.getMonth(); // месяц текущей даты 
let year = myDate.getFullYear(); // текущий год

// данные для русскоязычного вывода в консоль 
// массив с днями недели
let ruDayOfTheWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let nameOfRuDayOfTheWeek = ruDayOfTheWeek[dayOfTheWeek]; // Название дня недели на русском языке

// массив с месяцами
let ruMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня' , 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября' , 'Декабря'];
let nameOfRuMonth = ruMonth[numberOfMonth]; // название месяца на русском языке из массива ruMonth

// переменная для вывода в консоль 
let ruLogVariable = 'Сегодня день недели: ' + nameOfRuDayOfTheWeek + '. ' + dayOfTheMonth + ' ' + nameOfRuMonth + ' ' + year + ' год'; 


// данные для англоязычного вывода в консоль 
// массив с днями недели 
let enDayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let nameOfEnDayOfTheWeek = enDayOfTheWeek[dayOfTheWeek]; // Название дня недели на английском языке

// массив с месяцами
let enMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let nameOfEnMonth = enMonth[numberOfMonth]; // название месяца на английском языке из массива enMonth

// переменная для вывода в консоль
let enLogVariable = 'Today is the day of the week: ' + nameOfEnDayOfTheWeek + '. ' + dayOfTheMonth + ' ' + nameOfEnMonth + ' ' + year + ' year';

let lang = 'ru';
// let lang = 'en';

if (lang === 'ru') {
   switch(dayOfTheWeek) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4: 
      case 5:
      case 6:
         console.log(ruLogVariable);
         break;
      default:
         console.log('Неправильно введена дата!');
   }
} else if (lang === 'en') {
   if (dayOfTheWeek >= 0  && dayOfTheWeek <= 6) {
      console.log(enLogVariable);
   } else {
      console.log('Date entered incorrectly!');
   }
} else {
   console.log('Неправильно выбран язык! Выберите ru или en');
}

/* 2. У нас есть переменная namePerson. Если значение этой переменной 'Артем' то вывести в консоль 'директор', 
если значение 'Максим' то вывести в консоль 'преподаватель', с любым другим значением вывести в консоль 'студент'
   Решить задачу с помощью нескольких тернарных операторов, без использования if или switch */

let namePerson = 'Артем'; 
// let namePerson = 'Максим'; 

let post1 = (namePerson === 'Артем') ? 'директор' : 'студент';
let post2 = (namePerson === 'Максим') ? 'преподаватель' : 'студент';
console.log(post1);
console.log(post2);
