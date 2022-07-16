'use strict';

/* 5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 

1. “Введите обязательную статью расходов?” (например expenses1, expenses2)

2. “Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных

6) Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль

7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь) */

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

const budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);

money = +prompt('Ваш месячный доход?', 50000);
// console.log('money: ', money);
// console.log('type of money: ', typeof money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'iTunes, Apple Music, Food, Gym, Taxi');

deposit = confirm('Есть ли у вас депозит в банке?'); 
// console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?' , ''); 
let amount1 = prompt('Во сколько это обойдется?' , ''); 

let expenses2 = prompt('Введите обязательную статью расходов?' , ''); 
let amount2 = prompt('Во сколько это обойдется?' , ''); 