'use strict';

const isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

const start = function () {
	do {
		money = prompt('Ваш месячный доход?', 150000);
	}
	while (!isNumber(money));
};
start();

let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	mission: 500000,
	period: 6,
	asking: function () {
		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
		appData.addExpenses = addExpenses.toLowerCase().split(', ');
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		let amount, sum;
		for (let i = 0; i < 2; i++) {
			amount = prompt('Введите обязательную статью расходов?', "Продукты");
			do {
				sum = +prompt('Во сколько это обойдется?', 30000);
			}
			while (!isNumber(sum));
			appData.expenses[amount] = Number(sum);
		}
	},
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	accumulatedMonth: 0
};
appData.asking();

console.log('Период равен ' + appData.period + ' месяцев ' + 'Цель заработать ' + appData.mission + ' рублей');

appData.getExpensesMonth = function () {
	let sum = 0;
	let amount = 0;
	for (const key in appData.expenses) {
		appData.expensesMonth += appData.expenses[key];
	}
	console.log('Сумма всех обязательных расходов за месяц= ' + appData.expensesMonth);
};
// — Расходы за месяц
appData.getExpensesMonth();

appData.getBudgetDay = function () {
	appData.budgetDay = appData.accumulatedMonth / 30;
};
appData.getTargetMonth = function () {
	appData.budgetMonth = appData.mission / appData.accumulatedMonth;
};
appData.getAccumulatedMonth = function () {
	appData.accumulatedMonth = appData.budget - appData.expensesMonth;
};

// Этот метод будет высчитывать значения свойств budgetMonth и budgetDay
appData.getBudget = function () {
	appData.getAccumulatedMonth();
	console.log('Бюджет на месяц =', appData.accumulatedMonth);

	// вычисление budgetMonth
	appData.getTargetMonth();

	// вычисление budgetDay
	appData.getBudgetDay();
	console.log('Бюджет на день =', Math.floor(appData.budgetDay));
};

//  — За какой период будет достигнута цель (в месяцах)
appData.getBudget();
if (appData.budgetMonth < 0) {
	console.log('Цель не будет достигнута');
} else if (0 < appData.budgetMonth) {
	console.log('Цель будет достигнута за ' + Math.ceil(appData.budgetMonth) + ' месяцев');
}



// — Уровень дохода
appData.getStatusIncome = function () {
	if (1200 < appData.budgetDay) {
		return ('У вас высокий уровень дохода');
	} else if (600 < appData.budgetDay && appData.budgetDay <= 1200) {
		return ('У вас средний уровень дохода');
	} else if (0 <= appData.budgetDay && appData.budgetDay <= 600) {
		return ('К сожалению, у вас уровень дохода ниже среднего');
	} else {
		return ('Что-то пошло не так');
	}
};
console.log(appData.getStatusIncome());
console.log('Наша программа включает в себя данные:\n');

for (const key in appData) {
	console.log(key + ': ' + appData[key] + '\n');
}