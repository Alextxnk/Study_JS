'use strict';

/* Задание по проекту, получить каждый элемент в отдельную переменную:
1). Кнопку "Рассчитать" через id
2). Кнопки “+” (плюс) через Tag, каждую в своей переменной. 

3). Чекбокс по id через querySelector
4). Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
5). Каждый элемент в правой части программы через класс(не через querySelector), которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">
6). Оставшиеся поля через querySelector каждый в отдельную переменную:
поля ввода (input) с левой стороны и не забудьте про range. */

let calculate = document.querySelector('#start'); // кнопка рассчитать
console.log(calculate);

let incomeAdd = document.querySelector('.income_add'); // кнопка + первая
console.log(incomeAdd);

let expensesAdd = document.querySelector('.expenses_add'); // кнопка + вторая
console.log(expensesAdd);