'use strict';


// контекст вызова - this
// this - это ключевое слово, вообще это ссылка на объект 
// this всегда ссылается на объект 

// во время вызова функции создается запись активации, не во время чтения ее интерпретатором, 
// а именно во время ее вызова

// создается запись активации, которая содержит информацию откуда вызвана функция, как вызвана, 
// какие параметры переданы и тд

// и одно из свойств является ссылка this, котрая будет использоваться на протяжении выполнения этой функции 

// у this есть 4 поведения или по-другому правила 
// чтобы понять this, надо понимать что такое callStack (стек вызова функции)
// и call site (место вызова функции)

function one() {
   console.log('one');
   two();
}

function two() {
   console.log('two');
   three();
}

function three() {
   console.log('three');
}

one(); // call site - (место вызова функции)


// основные правила:
// 1 правило - привязка по-умолчанию: foo()
// самый распростанненый способ - просто обычный вызов функции 

var a = 10; // когда мы задаем переменную через var, она записывается в глобальный объект window 

function test() {
   console.log('hello', this);
}

window.test(); // window - глобальный объект 

// this всегда существует только внутри функции и определяется при вызове функции 
// и зависит от того, где и как функция вызывается 

// любая функция всегда вызывается внутри какого-то контекста и контекст может быть исключительно только объектом 

// всегда, когда функцию вызывают без точки (без привязки к объекту) - this - это глобальный объект window,
// если ему не изменили контекст 
// это и есть 1 правило this - привязка по-умолчанию


// 2 правило - неявная привязка: obj.foo()
// когда мы указываем объект и его метод: window.test(); или obj.testFunc();
let obj = {
   x: 10,
   y: 15,
   testFunc: function () {
      console.log('this: ', this.x);
   }
};

obj.testFunc();
// не важно где this описана и как, главное где она вызывается, важен именно момент вызова 
// this будет указывать на объект, через который мы вызвали функцию, а не где ее привязали 

// через this мы можем обратиться к свойству объекта, например this.x

let obj2 = {
   testObj: obj
};

obj2.testObj.testFunc();


// 3 правило - явная привязка: call, apply, bind
// в JS существует явная привязка, она нужна для того, чтобы использовать конкретный объект, при вызове функции
// для этого существуют методы функции call и apply

let obj3 = {
   x: 15,
   y: 20
};

function newTest() {
   console.log('this: ', this);
}

newTest.apply(obj3); // первым параметром передаем объект, тот который мы хотим првязать к контексту вызова this
newTest.call(obj3);

// оба этих метода принимают в качестве первого параметра объект, на который будет ссылаться this, 
// при вызове фуникции newTest

// эти два метода работают идентично, разница только в том, что они принимают еще и аргуметы, но немного по-разному
// apply - принимает массив аргументов, которые будут разобранны и переданы в функцию, которую мы вызываем,   
// а call - принимает сколько угодно параметров через запятую 

// есть еще жесткая привязка, когда мы созщдаем функцию и внутри нее применяем call или apply

function hardBind(hard) {
   newTest.call(hard);
}

hardBind(obj3); // и теперь при вызове такой функции будет вызываться newTest.call(obj3) с привязанным объектом
setTimeout(hardBind, 700, obj3);

// а еще в ES5 появился новый метод bind, который также привязывает контекст к объекту, 
// но единтвенное, что он его не вызывает 

let foo = newTest.bind(obj3);
foo();

// пример отличие call от apply
function add(c, d) {
   console.log('sum: ', this.a + this.b + c + d);
}
var ten = { a: 1, b: 2 };
add.call(ten, 3, 4);
// logs => 10
add.apply(ten, [3, 4]);
// logs => 10


// 4 правило - привязка new, но чтобы понять это, нам надо понимать что такое констурктор в JS и классы 
// если объект создан через оператор new, то ths будет указывать на этот объект 

function Car(model, color) {
   this.model = model;
   this.color = color;
}

Car.prototype.ride = function() { 
   console.log('ride');
};

console.dir(Car);
let car1 = new Car('BMW', 'black');

// this - это ссылка на новосозданный объект и мы обращаемся к его ключу model
// и если этого ключа нет в новом объекте, то мы его создаем и присваимваем значение
console.log('car1: ', car1);



// this  - это ключевое слово, которое указывает на текущий контекст выполнения кода
// чаще всего this является объектом 
// this - object
console.log(this);
// изначально this ссылается на глобальный объект window

// чаще всего this используется именно в объектах
const user = {
   name: 'Alex',
   yearOfBirth: 2002,
   getName() {
      // return user.name;
      return this.name;
   },
   calculateAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.yearOfBirth;
   },
   getAllInfo: function() {
      const age = this.calculateAge();
      console.log(`Name: ${this.name}, age: ${age}`);
   }
};

console.log('name:', user.getName());
console.log('age:', user.calculateAge());
user.getAllInfo();