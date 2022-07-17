'use strict';


let money = 70000;
const income = 'Freelance';
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

// дополнение дз lesson03
console.log('Переписываем на функции ');

let showTypeOf = function(data) {
   console.log(data, typeof(data));
};

showTypeOf(money); 
showTypeOf(income); 
showTypeOf(deposit); 

let getStatusIncome = function() {
   if (budgetDay > 1200) {
      return('У вас высокий уровень дохода');
   } else if (budgetDay > 600 && budgetDay <= 1200) {
      return('У вас средний уровень дохода');
   } else if (budgetDay >= 0 && budgetDay <= 600) {
      return('К сожалению у вас уровень дохода ниже среднего');
   } else if (budgetDay < 0) {
      return('Что-то пошло не так');
   }
};
console.log(getStatusIncome());

