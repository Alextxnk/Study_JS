'use strict';


const money = 50000;
const income = 15000;
const addExpenses = 'Интернет, Покупки, Еда, Уход за собой';
const deposit = true;
const mission = 400000;
const period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев. Цель заработать " + mission + " рублей");

console.log(addExpenses.toLowerCase().split(', '));

const budgetDay = money / 30;
console.log(budgetDay);

// доп задание 
const num = 266219;

var arrayOfDigits = Array.from(String(num), Number);
console.log(arrayOfDigits); // [2, 6, 6, 2, 1, 9]

var multiplication = 1;

for (let i in arrayOfDigits) {
   multiplication *= arrayOfDigits[i] ;
}

console.log(multiplication);

var degree = multiplication**3;
console.log(degree);
var number = String(degree).slice(0,2);
console.log(number);