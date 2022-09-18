'use strict';


// кнопки
console.log('кнопки:');
let start = document.querySelector('#start'); // кнопка Рассчитать
console.log(start);

let cancel = document.querySelector('#cancel'); // кнопка Сбросить
console.log(cancel);

let incomePlus = document.querySelector('.income_add'); // кнопка + первая
console.log(incomePlus);

let expensesPlus = document.querySelector('.expenses_add'); // кнопка + вторая
console.log(expensesPlus);


// результат слева
console.log('результат слева:');
// Месячный доход*  
let salaryAmount = document.querySelector('.salary-amount'); // Сумма
console.log(salaryAmount);

// Дополнительный доход 
let incomeItem = document.querySelectorAll('.income-items'); // два инпута
// -----------------------------------------------------------------------
/* let incomeTitle = document.querySelector('.income-title'); // Наименование
console.log(incomeTitle);
let incomeAmount = document.querySelector('.income-amount'); // Сумма
console.log(incomeAmount); */

// Возможный доход
let additionalIncomeItem = document.querySelectorAll('.additional_income-item'); // Наименование
console.log(additionalIncomeItem);

// Обязательные расходы --------------------------------------------------
let expensesTitle = document.querySelector('.expenses-title'); // Наименование
console.log(expensesTitle);
let expensesAmount = document.querySelector('.expenses-amount'); // Сумма
console.log(expensesAmount);

// Возможные расходы
let additionalExpensesItem = document.querySelector('.additional_expenses-item'); // название
console.log(additionalExpensesItem);

// Депозит
let depositCheck = document.querySelector('#deposit-check'); // инпут для checkbox
console.log(depositCheck);

let depositBank = document.querySelector('.deposit-bank'); // селект
console.log(depositBank);

let depositAmount = document.querySelector('.deposit-amount'); // Сумма
console.log(depositAmount);

let depositPercent = document.querySelector('.deposit-percent'); // Процент
console.log(depositPercent);

// Цель
let targetAmount = document.querySelector('.target-amount'); // Сумма

// Период расчета 
let periodSelect = document.querySelector('.period-select'); // range
console.log(periodSelect);


// результат справа
console.log('результат справа:');
let budgetMonthValue = document.querySelector('.budget_month-value'); // Доход за месяц
console.log(budgetMonthValue);

let budgetDayValue = document.querySelector('.budget_day-value'); // Дневной бюджет
console.log(budgetDayValue);

let expensesMonthValue = document.querySelector('.expenses_month-value'); // Расход за месяц
console.log(expensesMonthValue);

let additionalIncomeValue = document.querySelector('.additional_income-value'); // Возможные доходы
console.log(additionalIncomeValue);

let additionalExpensesValue = document.querySelector('.additional_expenses-value'); // Возможные расходы
console.log(additionalExpensesValue);

let incomePeriodValue = document.querySelector('.income_period-value'); // Накопления за период
console.log(incomePeriodValue);

let targetMonthValue = document.querySelector('.target_month-value'); // Срок достижения цели в месяцах
console.log(targetMonthValue);



// создаем объект
let appData = {
   budget: 0, // Месячный доход
   income: {}, // Дополнительный доход
   addIncome: [], // Возможный доход
   expenses: {}, // Обязательные расходы
   addExpenses: [], // Возможные расходы 
   deposit: false, // Депозит
   percentDeposit: 0,
   moneyDeposit: 0,
   // period: 0, // Период расчета
   budgetDay: 0, // бюджет на день
   numberOfMonths: 0, // количество месяцев для достижения цели
   expensesMonth: 0, // расходы за месяц
   accumulatedMonth: 0, // накопления за месяц

   // функция проверяет, чтоб было введено число
   isNumber: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
      // isFinite возвращает true, если число конечное и в обратном случае - false (если бесконечное)
   },

   // функция проверяет, чтоб не была введена пустая строка
   isEmptyStr: function (str) {
      if (typeof str === 'undefined' || !str || str.length === 0 || str === "" ||
         !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g, "") === "") {
         return true;
      } else {
         return false;
      }
   },

   start: function () {
      if (appData.isEmptyStr(salaryAmount.value)) {
         alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
         return;
      } else if (!appData.isNumber(salaryAmount.value)) {
         alert('Ошибка, введите число!');
         return;
      }
   
      appData.budget = Number(salaryAmount.value); // присваиваем значение инпута Месячный доход
      console.log('salaryAmount.value: ', salaryAmount.value);
      console.log('appData.budget: ', appData.budget);
   
      // потом добавить здесь вызов функций
      appData.getIncome(); // получение данных из формы Дополнительный доход
      appData.getAddExpenses(); // получение данных из формы Возможные расходы
      appData.getAddIncome(); // получение данных из формы Возможные расходы

      appData.getTargetMonth(); // Срок достижения цели в месяцах
      appData.calcPeriod(); // сколько мы накопим за определенный период

      appData.showResult(); // вывод результатов
   },

   // когда нажимаем на кнопку +, нужно добавить инпуты
   addIncomeBlock: function() {
      let cloneIncomeItem = incomeItem[0].cloneNode(true); // делаем глубокое клонирование
      // добавляем в родительскую ноду перед кнопкой 
      incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus); 
      incomeItem = document.querySelectorAll('.income-items'); // делаем снова поиск всех элементов
      
      if (incomeItem.length === 3) {
         incomePlus.style.display = 'none';
      }
   },

   // получение данных из формы Дополнительный доход
   getIncome: function() {
      incomeItem.forEach(function(item) {
         let itemIncome = item.querySelector('.income-title').value;
         let cashIncome = item.querySelector('.income-amount').value;

         if (!appData.isEmptyStr(itemIncome) && !appData.isEmptyStr(cashIncome) && !appData.isNumber(itemIncome) && appData.isNumber(cashIncome)) {
            appData.income[itemIncome] = Number(cashIncome); // записываем в объект [ключ] = значение
         } else {
            alert('Ошибка, неправильно заполнена форма!');
         }
      });
      console.log(appData.income);
   },

   // вывод результатов
   showResult: function() {
      budgetMonthValue.value = appData.budget; // Месячный доход
      // с помощью метода join разобьем на строку
      additionalExpensesValue.value = appData.addExpenses.join(', '); // Возможные расходы 
      additionalIncomeValue.value = appData.addIncome.join(', '); // Возможный доход

      targetMonthValue.value = appData.numberOfMonths; // Срок достижения цели в месяцах
      incomePeriodValue.value = appData.calcPeriod(); // сколько мы накопим за определенный период
   },

   // получение данных из формы Возможные расходы
   getAddExpenses: function() {
      // с помощью метода split соберем в массив
      let addExpenses = additionalExpensesItem.value.split(','); // Возможные расходы
      addExpenses.forEach(function(item) {
         item = item.trim(); // удаление пробелов в начале и в конце
         if (item !== '') {
            appData.addExpenses.push(item);
         }
      });
   },

   // получение данных из формы Возможный доход
   getAddIncome: function() {
      additionalIncomeItem.forEach(function(item) {
         let itemValue = item.value.trim();
         if (itemValue !== '') {
            appData.addIncome.push(itemValue);
         }
      });
   },

   // функция возвращает результат за какой период будет достигнута цель
   getTargetMonth: function () {
      // округление до ближайшего целого в большую сторону
      appData.numberOfMonths = Math.ceil(targetAmount.value / appData.accumulatedMonth);
   }, 

   // сколько мы накопим за определенный период
   calcPeriod: function () {
      return appData.accumulatedMonth * periodSelect.value;
   }
};



/* appData.asking = function () {

   let addExpenses;

   do {
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
      'Flat, iTunes, Apple Music, Food, Gym, Taxi');
   }
   while (appData.isNumber(addExpenses) || appData.isEmptyStr(addExpenses) || typeof addExpenses !== 'string');

   appData.addExpenses = addExpenses.toLowerCase().split(', ');
   console.log('arr to Lower Case:', appData.addExpenses);
   appData.deposit = confirm('Есть ли у вас депозит в банке?');


   // делаем первую букву в каждом слове заглавной
   for (let i = 0; i < appData.addExpenses.length; i++) {
      appData.addExpenses[i] = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].substr(1);
   }
   let concatStr = appData.addExpenses.join(', ');
   console.log('str to Upper Case:', concatStr);



   // -------------------------------------------
   // не надо 
   let amount, sum;
   for (let i = 0; i < 2; i++) {
      do {
         amount = prompt('Введите обязательную статью расходов?', 'Flat');
      }
      while (appData.isNumber(amount) || appData.isEmptyStr(amount) || typeof amount !== 'string');

      do {
         sum = prompt('Во сколько это обойдется?', 13000);
      }
      while (!appData.isNumber(sum));
      appData.expenses[amount] = Number(sum);
   }
   // ----------------------------------------------


};
appData.asking();

console.log('Период равен ' + appData.period + ' месяцев ' + 'Цель заработать ' + appData.mission + ' рублей');


// узнаем информацию о депозите 
appData.getInfoDeposit = function () {
   if (appData.deposit) {
      do {
         appData.percentDeposit = prompt('Какой годовой процент?', 8);
      }
      while (!appData.isNumber(appData.percentDeposit));
      appData.percentDeposit = Number(appData.percentDeposit);

      do {
         appData.moneyDeposit = prompt('Какая сумма заложена?', 40000);
      }
      while (!appData.isNumber(appData.moneyDeposit));
      appData.moneyDeposit = Number(appData.moneyDeposit);
   }
};
appData.getInfoDeposit();


// функция возвращает сумму расходов за месяц
appData.getExpensesMonth = function () {
   for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
   }
   console.log('Сумма всех обязательных расходов за месяц = ' + appData.expensesMonth);
};
appData.getExpensesMonth();


// функция возвращает Накопления за месяц (Доходы минус расходы)
appData.getAccumulatedMonth = function () {
   appData.accumulatedMonth = appData.budget - appData.expensesMonth;
};
appData.getAccumulatedMonth();
console.log('Бюджет на месяц =', appData.accumulatedMonth);


// ---------------
// getTargetMonth
// ---------------


// +++++++++++++++++++++++++++++
// считает сколько мы накопим за определенный период
appData.calcPeriod = function () {
   return appData.accumulatedMonth * periodSelect.value;
};
appData.calcPeriod();
// +++++++++++++++++++++++++++++


// за какой период будет достигнута цель (в месяцах)
if (appData.numberOfMonths > 0) {
   console.log('Цель будет достигнута за ' + Math.ceil(appData.numberOfMonths) + ' месяцев');
   // округление до ближайшего целого в большую сторону
} else if (appData.numberOfMonths < 0) {
   console.log('Цель не будет достигнута');
}


// budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
appData.getBudgetDay = function () {
   appData.budgetDay = appData.accumulatedMonth / 30;
};
appData.getBudgetDay();

console.log('Бюджет на день =', Math.floor(appData.budgetDay));
// округление до ближайшего целого в меньшую сторону */




// события 
start.addEventListener('click', appData.start); // нажатие на кнопку Рассчитать
incomePlus.addEventListener('click', appData.addIncomeBlock); // нажатие на первую кнопку + 
