'use strict';


const todoControl = document.querySelector('.todo-control'); // форма
const headerInput = document.querySelector('.header-input'); // инпут формы
const todoList = document.querySelector('.todo-list'); // новые дела
const todoCompleted = document.querySelector('.todo-completed'); // выполненые дела

// функция проверяет, чтоб не была введена пустая строка
const isEmptyStr = function (str) {
   if (typeof str === 'undefined' || !str || str.length === 0 || str === "" ||
      !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g, "") === "") {
      return true;
   } else {
      return false;
   }
};

const removeArrEl = (arr, value) => {
   return arr.filter(el => el !== value);
};

// массив дел
const todoData = [
   /* {
      value: 'Сварить кофе',
      completed: false
   },
   {
      value: 'Помыть посуду',
      completed: true
   } */
];

const render = function() {
   todoList.textContent = '';
   todoCompleted.textContent = '';

   /* for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(localStorage.key(i));

      const li = document.createElement('li');
      li.classList.add('todo-item');

      li.innerHTML = `
      <span class="text-todo">${key}</span>
      <div class="todo-buttons">
         <button class="todo-remove"></button>
         <button class="todo-complete"></button>
      </div>
      `;
   } */

   
   todoData.forEach(function(item) {
      const li = document.createElement('li');
      li.classList.add('todo-item');

      li.innerHTML = `
      <span class="text-todo">${item.value}</span>
      <div class="todo-buttons">
         <button class="todo-remove"></button>
         <button class="todo-complete"></button>
      </div>
      `;

      if(item.completed) {
         todoCompleted.append(li);
      } else {
         todoList.append(li);
      }

      const toDoDeleteBtn = li.querySelector('.todo-remove');
      toDoDeleteBtn.addEventListener('click', function() {
         console.log('delete');
         // console.log(removeArrEl(todoData, item.value));
         // console.log(item.value);
         // li.innerHTML = ``;
         // render(); // рекурсивно вызываем функцию
         localStorage.removeItem(item.value);
      });

      const toDoCompleteBtn = li.querySelector('.todo-complete');
      toDoCompleteBtn.addEventListener('click', function() {
         item.completed = !item.completed;
         render(); // рекурсивно вызываем функцию
      });

   });
};

todoControl.addEventListener('submit', function(event) {
   event.preventDefault(); // отключаем событие по умолчанию, теперь у нас страница не перезагружается 

   const newTodo = {
      value: headerInput.value,
      completed: false
   };

   if (isEmptyStr(headerInput.value)) {
      alert('Нельзя отправлять пустую строку!');
   } else {
      localStorage.setItem(headerInput.value,false);
      todoData.push(newTodo);
      event.target.reset(); // очищаем поля формы 
   }

   render(); // после вызываем рендер, чтоб у нас обновилась страница 
});

render(); // вызываем ее, как только запустилась страница 
console.log(todoData);

// что нужно реализовать:
// удаление записи
// после добавления дела, поле "Какие планы?" должно очищаться 
// нельзя добавлять пустое поле  
// сохранять все необходимо в Local Storage и записывать из нее в массив todoData
