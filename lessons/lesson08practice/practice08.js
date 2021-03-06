'use strict';


// создаем объект, он будет содержать все переменные 
let appData = {
   income: {}, // дополнительные доходы
   addIncome: [], // тут будем перечислять дополнительны доходы
   expenses: {}, // дополнительные расходы
   addExpenses: [], // массив с возможными расходами 
   deposit: false, // депозит в банке
   percentDeposit: 0,
   moneyDeposit: 0,
   mission: 400000, // цель
   period: 6, // 
   budget: 0, // доходы в месяц
   budgetDay: 0, // бюджет на день
   numberOfMonths: 0, // количество месяцев для достижения цели
   expensesMonth: 0, // расходы за месяц
   accumulatedMonth: 0 // накопления за месяц
};


// функция проверяет, чтоб было введено число
appData.isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
   // isFinite возвращает true, если число конечное и в обратном случае - false (если бесконечное)
};


// функция проверяет, чтоб не была введена пустая строка
appData.isEmptyStr = function (str) {
   if (typeof str === 'undefined' || !str || str.length === 0 || str === "" ||
      !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g, "") === "") {
      return true;
   } else {
      return false;
   }
};


appData.start = function () {
   do {
      appData.budget = prompt('Ваш месячный доход?', 70000);
   }
   while (!appData.isNumber(appData.budget));
   appData.budget = Number(appData.budget);
};
appData.start();


appData.asking = function () {

   if (confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome, cashIncome;

      do {
         itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Freelance');
      }
      while (appData.isNumber(itemIncome) || appData.isEmptyStr(itemIncome) || typeof itemIncome !== 'string');

      do {
         cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 15000);
      }
      while (!appData.isNumber(cashIncome));
      appData.income[itemIncome] = Number(cashIncome);
   }

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


// функция возвращает результат за какой период будет достигнута цель
appData.getTargetMonth = function () {
   appData.numberOfMonths = appData.mission / appData.accumulatedMonth;
};
appData.getTargetMonth();


// считает сколько мы накопим за определенный период
appData.calcSavedMoney = function () {
   return appData.accumulatedMonth * appData.period;
};
appData.calcSavedMoney();


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
// округление до ближайшего целого в меньшую сторону


// последняя функция 
appData.getStatusIncome = function () {
   if (appData.budgetDay > 1200) {
      return ('У вас высокий уровень дохода');
   } else if (appData.budgetDay > 600 && appData.budgetDay <= 1200) {
      return ('У вас средний уровень дохода');
   } else if (appData.budgetDay >= 0 && appData.budgetDay <= 600) {
      return ('К сожалению у вас уровень дохода ниже среднего');
   } else if (appData.budgetDay < 0) {
      return ('Что-то пошло не так');
   }
};
console.log(appData.getStatusIncome());

console.log('Наша программа включает в себя данные:\n');
for (let key in appData) {
	console.log(key + ': ' + appData[key] + '\n');
}
