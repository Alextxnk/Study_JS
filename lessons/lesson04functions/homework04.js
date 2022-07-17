'use strict';


// объявляем и инициализируем переменные
let money = +prompt('Ваш месячный доход?', 60000);
const income = 'Freelance'; // дополнительный заработок
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 
'Flat, iTunes, Apple Music, Food, Gym, Taxi');
let deposit = confirm('Есть ли у вас депозит в банке?');
const mission = 400000;


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


// 1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

let expenses1 = prompt('Введите обязательную статью расходов?' , 'Flat'); 
let amount1 = +prompt('Во сколько это обойдется?' , 20000); 

let expenses2 = prompt('Введите обязательную статью расходов?' , 'Food'); 
let amount2 = +prompt('Во сколько это обойдется?' , 11500); 

// функция возвращает сумму расходов за месяц
let getExpensesMonth = function() {
   return amount1 + amount2;
};

// присваиваем значение функции в переменную и выводим его
let expensesMonth = getExpensesMonth();
console.log('Сумма всех обязательных расходов за месяц =', expensesMonth);


// 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)

let getAccumulatedMonth = function() {
   return money - expensesMonth;
};


// 3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 

let accumulatedMonth = getAccumulatedMonth();
console.log('Бюджет на месяц =', accumulatedMonth);


// 4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, 
// зная результат месячного накопления (accumulatedMonth) и возвращает результат 

// функция возвращает результат за какой период будет достигнута цель
let getTargetMonth = function() {
   return mission / accumulatedMonth;
};

// присваиваем значение функции в переменную и выводим его
let numberOfMonths = getTargetMonth();
numberOfMonths = Math.ceil(numberOfMonths);  // округление до ближайшего целого в большую сторону
console.log('Цель будет достигнута за ' + numberOfMonths + ' месяцев');


// 5) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)

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
/* 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
   — Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
   — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
   — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...) 
*/

console.log('----------------------------------');

let wordTrim = function(word) {
   if (typeof word !== 'string') {
      console.log('------------');
      console.log('type of word:', typeof word);

      return('Передайте в качестве аргумента строку!');
   } else if (typeof word === 'string') {
      console.log('------------');
      console.log('type of word:', typeof word);
      console.log('word: ', word);
      console.log('length of word:', word.length);

      let trimWord = word.trim(); // удаляем пробелы в начале и конце строки 
      console.log('trim word: ', trimWord);
      console.log('length of trimWord:', trimWord.length);

      if (trimWord.length >= 30) {
         let substrTrimWord = trimWord.slice(0, 30); // после 30го символа часть текста скрывается
         console.log('length of substrTrimWord:', substrTrimWord.length);

         return('received word: ' + substrTrimWord + '...');
      } else {
         return('received word: ' + trimWord);
      }
   }
};

console.log(wordTrim('   Hello world! Lorem ipsum dolor sit amet, consectetur adipisicing elit.   '));
console.log(wordTrim('            Hello'));
console.log(wordTrim(2));
console.log(wordTrim(true));
