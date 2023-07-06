/*
1) Привязать контекст вызова функции start к appData 
2) В нашем объекте везде использовать this как ссылку на объект appData (где это возможно)
3) Проверить работу кнопок плюс и input-range (исправить если что-то не работает)
4) Блокировать все input[type=text] с левой стороны после нажатия кнопки рассчитать, после этого кнопка 
Рассчитать пропадает и появляется кнопка Сбросить, на которую навешиваем событие и выполнение метода reset
Метод reset должен всю программу возвращать в исходное состояние
Метод reset() пишем самостоятельно, никаких перезагрузок страницы. Метод должен быть расписан наподобие start().
*/


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
      if (this.isEmptyStr(salaryAmount.value)) {
         alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
         return;
      } else if (!this.isNumber(salaryAmount.value)) {
         alert('Ошибка, введите число!');
         return;
      }
   
      this.budget = Number(salaryAmount.value); // присваиваем значение инпута Месячный доход
      console.log('this.budget: ', this.budget);
   
      this.getIncome(); // получение данных из формы Дополнительный доход
      this.getAddIncome(); // получение данных из формы Возможный доход
      this.getExpenses(); // получение данных из формы Обязательные расходы
      this.getAddExpenses(); // получение данных из формы Возможные расходы
      this.getAccumulatedMonth(); // Накопления за месяц
      this.getTargetMonth(); // Цель
      this.calcPeriod(); // сколько мы накопим за определенный период
      this.getBudgetDay(); // Дневной бюджет
      this.showResult(); // вывод результатов
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

         if (!this.isEmptyStr(itemIncome) && !this.isEmptyStr(cashIncome) && !this.isNumber(itemIncome) && this.isNumber(cashIncome)) {
            this.income[itemIncome] = Number(cashIncome); // записываем в объект [ключ] = значение
         } else {
            alert('Ошибка, неправильно заполнена форма Дополнительный доход!');
         }
      });
      for (let key in this.income) {
         this.incomeMonth += this.income[key];
         }
      console.log('this.incomeMonth: ', this.incomeMonth);
      console.log(this.income);
   },

   // получение данных из формы Возможный доход
   getAddIncome: function() {
      additionalIncomeItem.forEach(function(item) {
         let itemValue = item.value.trim();
         if (itemValue !== '') {
            this.addIncome.push(itemValue);
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

         if (!this.isEmptyStr(itemExpenses) && !this.isEmptyStr(cashExpenses) && !this.isNumber(itemExpenses) && this.isNumber(cashExpenses)) {
            this.expenses[itemExpenses] = Number(cashExpenses); // записываем в объект [ключ] = значение
         } else {
            alert('Ошибка, неправильно заполнена форма Обязательные расходы!');
         }
      });
      for (let key in this.expenses) {
         this.expensesMonth += this.expenses[key];
         }
      console.log('this.expensesMonth: ', this.expensesMonth);
      console.log(this.expenses);
   },

   // получение данных из формы Возможные расходы
   getAddExpenses: function() {
      // с помощью метода split соберем в массив
      let addExpenses = additionalExpensesItem.value.split(','); // Возможные расходы
      addExpenses.forEach(function(item) {
         item = item.trim(); // удаление пробелов в начале и в конце
         if (item !== '') {
            this.addExpenses.push(item);
         }
      });
   },

   // Период расчета
   getPeriodSelect: function(event) {
      let periodAmount = document.querySelector('.period-amount');
      periodAmount.textContent = `${event.target.value}`;
   },

   // вывод результатов
   showResult: function() {
      budgetMonthValue.value = this.budget + this.incomeMonth; // Месячный доход
      budgetDayValue.value = this.budgetDay; // Дневной бюджет
      expensesMonthValue.value = this.expensesMonth; // Расход за месяц
      // с помощью метода join разобьем на строку
      additionalIncomeValue.value = this.addIncome.join(', '); // Возможные доходы
      additionalExpensesValue.value = this.addExpenses.join(', '); // Возможные расходы 
      incomePeriodValue.value = this.calcPeriod(); // сколько мы накопим за определенный период
      targetMonthValue.value = this.numberOfMonths; // Срок достижения цели в месяцах
   },

   // функция возвращает Накопления за месяц (Доходы минус расходы)
   getAccumulatedMonth: function () {
      this.accumulatedMonth = this.budget + this.incomeMonth - this.expensesMonth;
   },

   // функция возвращает результат за какой период будет достигнута цель
   getTargetMonth: function () {
      // округление до ближайшего целого в большую сторону
      this.numberOfMonths = Math.ceil(targetAmount.value / this.accumulatedMonth);
   }, 

   // сколько мы накопим за определенный период
   calcPeriod: function () {
      return this.accumulatedMonth * periodSelect.value;
   },

   // Дневной бюджет
   getBudgetDay: function () {
      this.budgetDay = Math.floor(this.accumulatedMonth / 30);
   }
};


// события 
start.addEventListener('click', appData.start); // нажатие на кнопку Рассчитать
incomePlus.addEventListener('click', appData.addIncomeBlock); // нажатие на первую кнопку + 
expensesPlus.addEventListener('click', appData.addExpensesBlock); // нажатие на вторую кнопку + 
periodSelect.addEventListener('change', appData.getPeriodSelect); // Период расчета