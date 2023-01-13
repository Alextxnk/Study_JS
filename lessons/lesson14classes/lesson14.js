'use strict';


// ООП - это методика организации программы, структурирование кода, объединение сущностей
// и методов в единое целое 

// принцип ООП хорош тем, что обязывает программиста структурировать свой код 
// JS является прототипно-ориентированным языком программирования 

// в JS есть понятие прототип - скрытая ссылка объекта 
// прототип - это объект, из которого текущий объект черпает недостающие методы и свойства 

// если в текущем объекте отсутвует свойство, то JS по прототипу поднимается выше и будет искать там это свойство 


/* let arr = [1, 2, 3];
console.log(arr);

let car = {
   doors: 4,
   ride: function() { 
      console.log('ride');
   }
};

let newCar = Object.create(car);
newCar.model = 'BMW';

console.log(newCar.model);
console.log(newCar.doors);
console.log(newCar.hasOwnProperty('model')); // true
console.log(newCar.__proto__.hasOwnProperty('model')); // false

console.log(car.isPrototypeOf(newCar)); // true */

// конструктор - это обычная функция которая имеет переменные и параметры, но создан он для определенной цели 
// он используется, как описание какой-то сущности 


// ООП - это подход к решению задачи, манипулируя объектами, тоесть задачи разбиваются на объекты 
// и с помощью их решаются  
// а класс - это важная единица ООП

// класс - это абсрактная единица, описывающая объект  

function Car(brand, model, options) {
   this.brand = brand;
   this.model = model;
   options = options || {};
   this.color = options.color;
   this.transmission = options.transmission;
}

Car.prototype.ride = function() { 
   console.log(this.brand + ' ' + this.model + ' ride');
};

let car1 = new Car('BMW', 'M5', {color: 'black', transmission: 'automatic'});
console.log(car1);
car1.ride();
console.log(Car.prototype.isPrototypeOf(car1)); // true
console.log(car1 instanceof Car); // true


// наследование - это отношения между классами, при котором класс исользует структуру 
// или поведение другого класса (одиночное наследование)
// или других классов (множественное наследование)


function Automobile(countryBild, options) {
   this.countryBild = countryBild;
   options = options || {};
   this.color = options.color;
   this.transmission = options.transmission;
}

Automobile.prototype.ride = function() { 
   console.log(this.brand + ' ' + this.model + ' ride!');
};

function Audi(countryBild, options, model, type) {
   this.brand = 'Audi';
   Automobile.apply(this, arguments);
   this.model = model;
   this.type = type;
}

Audi.prototype = Object.create(Automobile.prototype);
Audi.prototype.costructor = Audi;

let audiRS7 = new Audi('Germany', {color: 'black'}, 'RS7', 'Sportback');

console.log(audiRS7);

console.log(audiRS7 instanceof Audi);
console.log(audiRS7 instanceof Automobile); 

audiRS7.ride();

console.log(new Object());
// все объекты в JS наследуют свойства от Object.prototype
console.log(audiRS7 instanceof Object); // true
