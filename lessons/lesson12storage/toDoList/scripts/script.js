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


const render = function () {
   // очищаем страницу
   todoList.textContent = '';
   todoCompleted.textContent = '';

   // массив дел
   const todoData = [];

   for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);
      let tasks = JSON.parse(value);
      todoData.push(tasks);
   }

   let uniq = Array.from(new Set(todoData));

   uniq.forEach(function (item) {
      const li = document.createElement('li');
      li.classList.add('todo-item');

      li.innerHTML = `
      <span class="text-todo">${item.value}</span>
      <div class="todo-buttons">
         <button class="todo-remove"></button>
         <button class="todo-complete"></button>
      </div>
      `;

      if (item.completed) {
         todoCompleted.append(li);
      } else {
         todoList.append(li);
      }

      const toDoDeleteBtn = li.querySelector('.todo-remove');
      toDoDeleteBtn.addEventListener('click', function () {
         localStorage.removeItem(item.value);
         render(); // рекурсивно вызываем функцию
      });

      const toDoCompleteBtn = li.querySelector('.todo-complete');
      toDoCompleteBtn.addEventListener('click', function () {
         item.completed = !item.completed;

         localStorage.setItem(item.value, JSON.stringify({
            value: item.value,
            completed: item.completed
         }));

         render(); // рекурсивно вызываем функцию
      });

   });
};


todoControl.addEventListener('submit', function (event) {
   event.preventDefault(); // отключаем событие по умолчанию, теперь у нас страница не перезагружается 

   const newTodo = {
      value: headerInput.value,
      completed: false
   };

   if (isEmptyStr(headerInput.value)) {
      alert('Нельзя отправлять пустую строку!');
   } else {
      localStorage.setItem(headerInput.value, JSON.stringify(newTodo));
      event.target.reset(); // очищаем поля формы 
   }

   render(); // после вызываем рендер, чтоб у нас обновилась страница 
});

render(); // вызываем ее, как только запустилась страница 
