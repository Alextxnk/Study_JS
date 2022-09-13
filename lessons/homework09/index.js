'use strict';


// кнопки
console.log('кнопки:');
let calculate = document.querySelector('#start'); // кнопка Рассчитать
console.log(calculate);

let cancel = document.querySelector('#cancel'); // кнопка Сбросить
console.log(cancel);

let incomeAdd = document.querySelector('.income_add'); // кнопка + первая
console.log(incomeAdd);

let expensesAdd = document.querySelector('.expenses_add'); // кнопка + вторая
console.log(expensesAdd);


// результат слева
console.log('результат слева:');
// Месячный доход*  
let salaryAmount = document.querySelector('.salary-amount'); // Сумма
console.log(salaryAmount);

// Дополнительный доход 
let incomeTitle = document.querySelector('.income-title'); // Наименование
console.log(incomeTitle);
let incomeAmount = document.querySelector('.income-amount'); // Сумма
console.log(incomeAmount);

// Возможный доход
let additionalIncomeItems = document.querySelectorAll('.additional_income-item'); // Наименование
console.log(additionalIncomeItems);

// Обязательные расходы
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

/* console.log('DEBUG');
let range = periodSelect.getAttribute('value');
console.log(range);
console.dir(range);
periodSelect.addEventListener(); */

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
