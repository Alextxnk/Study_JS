'use strict';


let isNumber = function(n) {
   return !isNaN(parseFloat(n)) && isFinite(n); 
   // isFinite возвращает true, если число конечное и в обратном случае - false (если бесконечное)
};


// объявляем и инициализируем переменные
let money;
let income = 'Freelance'; // дополнительный заработок
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
'Flat, iTunes, Apple Music, Food, Gym, Taxi');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 400000;


let start = function() {
   do{
      money = prompt('Ваш месячный доход?', 70000);
   }
   while (!isNumber(money));
   money = +money;

   return money;
};
start();


// первая функция, выводит типы заданных переменных 
let showTypeOf = function(data, varName) {
   console.log('type of ' + varName + ':', typeof(data) + ',', 'value: ' + data);
};
showTypeOf(money, 'money'); 
showTypeOf(income, 'income'); 
showTypeOf(deposit, 'deposit'); 


// вывод длины и массива addExpenses
console.log('length of addExpenses: ', addExpenses.length);
console.log('Array of addExpenses:',  addExpenses.toLowerCase().split(', '));

// вывод цели
console.log('Цель заработать ' + mission + ' рублей');


// функция возвращает сумму расходов за месяц
let getExpensesMonth = function() {
   let expenses = [];
   let sum = 0;
   let amount = 0;

   for (let i = 0; i < 2; i++) {

      expenses[i] = prompt('Введите обязательную статью расходов?' , 'Flat');

      do{
         sum = prompt('Во сколько это обойдется?', 13000);
      }
      while (!isNumber(sum));
      amount += +sum;
   }
   showTypeOf(amount, 'amount');
   console.log('expenses: ', expenses);
   return amount;
};

// присваиваем значение функции в переменную и выводим его
let expensesMonth = getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц =', expensesMonth);


// объявление функции getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function() {
   return money - expensesMonth;
};

// объявление переменной accumulatedMonth и присваивание ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth();
console.log('Бюджет на месяц =', accumulatedMonth);


// функция возвращает результат за какой период будет достигнута цель
let getTargetMonth = function() {
   return mission / accumulatedMonth;
};

// присваиваем значение функции в переменную и выводим его
let numberOfMonths = getTargetMonth();
numberOfMonths = Math.ceil(numberOfMonths);  // округление до ближайшего целого в большую сторону

if (numberOfMonths > 0) {
   console.log('Цель будет достигнута за ' + numberOfMonths + ' месяцев');
} else {
   console.log('Цель не будет достигнута');
}


// budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
let getBudgetDay = function () {
   return accumulatedMonth / 30;
};

// присваиваем значение функции в переменную и выводим его
let budgetDay = getBudgetDay();
budgetDay = Math.floor(budgetDay); // округление до ближайшего целого в меньшую сторону
console.log('Бюджет на день =', budgetDay);


// последняя функция 
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


// доп задание 
/* 1) Создать массив arr = []
   — Записать в него 7 любых многозначных чисел в виде строк
   — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)

2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
   — Рядом с каждым числом написать оба делителя данного числа
      Например: 'Делители этого числа: 1 и n' */

console.log('----------------------------------');

// 1
let searchString = function() {
   let arr = ['2146301', '1473284', '4328943', '2782199', '723898432', '8378953', '648035305'];
   console.log('arr:', arr);

   for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      let findStr2 = str.indexOf('2', 0);
      let findStr4 = str.indexOf('4', 0);

      if (findStr2 === 0 || findStr4 === 0) {
         console.log('search string:', arr[i]);
      } 
   }
};
searchString();

console.log('--------------');


// 2
// число делится на 1 и само на себя 
// начинается с двойки 
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
// 53, 59, 61, 67, 71, 73, 79, 83, 89, 97


let primeNumbers = function(){
   let number;
   let maxNumber = 100;
   let divisor; // делитель 

   // первый цикл
   for (let i = 2; i <= maxNumber; i++) {
      let numberOfDivisors = 0; // количество делителей
      number = i;

      // второй цикл
      for (let j = 1; j <= number; j++) {
         divisor = number % j;
         if (divisor === 0) {
            numberOfDivisors++;
         }
      }

      if (numberOfDivisors === 2) {
         console.log('Простое число: ' + number, 'Делители этого числа: ' + 1 + ' и ' + number);
      }
   }

};
primeNumbers();
