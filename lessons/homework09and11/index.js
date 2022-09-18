'use strict';


// кнопки
let start = document.querySelector('#start'); // кнопка Рассчитать
let cancel = document.querySelector('#cancel'); // кнопка Сбросить
let incomePlus = document.querySelector('.income_add'); // кнопка + первая
let expensesPlus = document.querySelector('.expenses_add'); // кнопка + вторая

// результат слева
let salaryAmount = document.querySelector('.salary-amount'); // Месячный доход* 
let incomeItem = document.querySelectorAll('.income-items'); // Дополнительный доход 
let additionalIncomeItem = document.querySelectorAll('.additional_income-item'); // Возможный доход
let expensesItem = document.querySelectorAll('.expenses-items'); // Обязательные расходы 
let additionalExpensesItem = document.querySelector('.additional_expenses-item'); // Возможные расходы

// Депозит
let depositCheck = document.querySelector('#deposit-check'); // инпут для checkbox
let depositBank = document.querySelector('.deposit-bank'); // селект
let depositAmount = document.querySelector('.deposit-amount'); // Сумма
let depositPercent = document.querySelector('.deposit-percent'); // Процент

let targetAmount = document.querySelector('.target-amount'); // Цель
let periodSelect = document.querySelector('.period-select'); // Период расчета

// результат справа
let budgetMonthValue = document.querySelector('.budget_month-value'); // Доход за месяц
let budgetDayValue = document.querySelector('.budget_day-value'); // Дневной бюджет
let expensesMonthValue = document.querySelector('.expenses_month-value'); // Расход за месяц
let additionalIncomeValue = document.querySelector('.additional_income-value'); // Возможные доходы
let additionalExpensesValue = document.querySelector('.additional_expenses-value'); // Возможные расходы
let incomePeriodValue = document.querySelector('.income_period-value'); // Накопления за период
let targetMonthValue = document.querySelector('.target_month-value'); // Срок достижения цели в месяцах


// создаем объект
let appData = {
   budget: 0, // Месячный доход
   income: {}, // Дополнительный доход
   incomeMonth: 0, // Дополнительный доход в месяц
   addIncome: [], // Возможный доход
   expenses: {}, // Обязательные расходы
   expensesMonth: 0, // расходы за месяц
   addExpenses: [], // Возможные расходы 
   deposit: false, // Депозит
   percentDeposit: 0,
   moneyDeposit: 0,
   // period: 0, // Период расчета
   budgetDay: 0, // бюджет на день
   numberOfMonths: 0, // количество месяцев для достижения цели
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
      console.log('appData.budget: ', appData.budget);
   
      appData.getIncome(); // получение данных из формы Дополнительный доход
      appData.getAddIncome(); // получение данных из формы Возможный доход
      appData.getExpenses(); // получение данных из формы Обязательные расходы
      appData.getAddExpenses(); // получение данных из формы Возможные расходы
      appData.getAccumulatedMonth(); // Накопления за месяц
      appData.getTargetMonth(); // Цель
      appData.calcPeriod(); // сколько мы накопим за определенный период
      appData.getBudgetDay(); // Дневной бюджет
      appData.showResult(); // вывод результатов
   },

   // Добавить инпуты для формы Дополнительный доход
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
            alert('Ошибка, неправильно заполнена форма Дополнительный доход!');
         }
      });
      for (let key in appData.income) {
            appData.incomeMonth += appData.income[key];
         }
      console.log('appData.incomeMonth: ', appData.incomeMonth);
      console.log(appData.income);
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

   // Добавить инпуты для формы Обязательные расходы
   addExpensesBlock: function() {
      let cloneExpensesItem = expensesItem[0].cloneNode(true); // делаем глубокое клонирование
      // добавляем в родительскую ноду перед кнопкой 
      expensesItem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus); 
      expensesItem = document.querySelectorAll('.expenses-items'); // делаем снова поиск всех элементов
      
      if (expensesItem.length === 3) {
         expensesPlus.style.display = 'none';
      }
   },

   // получение данных из формы Обязательные расходы
   getExpenses: function() {
      expensesItem.forEach(function(item) {
         let itemExpenses = item.querySelector('.expenses-title').value;
         let cashExpenses = item.querySelector('.expenses-amount').value;

         if (!appData.isEmptyStr(itemExpenses) && !appData.isEmptyStr(cashExpenses) && !appData.isNumber(itemExpenses) && appData.isNumber(cashExpenses)) {
            appData.expenses[itemExpenses] = Number(cashExpenses); // записываем в объект [ключ] = значение
         } else {
            alert('Ошибка, неправильно заполнена форма Обязательные расходы!');
         }
      });
      for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
         }
      console.log('appData.expensesMonth: ', appData.expensesMonth);
      console.log(appData.expenses);
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

   // Период расчета


   // вывод результатов
   showResult: function() {
      budgetMonthValue.value = appData.budget; // Месячный доход
      budgetDayValue.value = appData.budgetDay; // Дневной бюджет
      expensesMonthValue.value = appData.expensesMonth; // Расход за месяц
      // с помощью метода join разобьем на строку
      additionalIncomeValue.value = appData.addIncome.join(', '); // Возможные доходы
      additionalExpensesValue.value = appData.addExpenses.join(', '); // Возможные расходы 
      incomePeriodValue.value = appData.calcPeriod(); // сколько мы накопим за определенный период
      targetMonthValue.value = appData.numberOfMonths; // Срок достижения цели в месяцах
   },

   // функция возвращает Накопления за месяц (Доходы минус расходы)
   getAccumulatedMonth: function () {
      appData.accumulatedMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
   },

   // функция возвращает результат за какой период будет достигнута цель
   getTargetMonth: function () {
      // округление до ближайшего целого в большую сторону
      appData.numberOfMonths = Math.ceil(targetAmount.value / appData.accumulatedMonth);
   }, 

   // сколько мы накопим за определенный период
   calcPeriod: function () {
      return appData.accumulatedMonth * periodSelect.value;
   },

   // Дневной бюджет
   getBudgetDay: function () {
      appData.budgetDay = Math.floor(appData.accumulatedMonth / 30);
   }
};


// события 
start.addEventListener('click', appData.start); // нажатие на кнопку Рассчитать
incomePlus.addEventListener('click', appData.addIncomeBlock); // нажатие на первую кнопку + 
expensesPlus.addEventListener('click', appData.addExpensesBlock); // нажатие на вторую кнопку + 