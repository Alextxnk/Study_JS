'use strict';


const todoControl = document.querySelector('.todo-control'); // форма
const headerInput = document.querySelector('.header-input'); // инпут формы
const todoList = document.querySelector('.todo-list'); // новые дела
const todoCompleted = document.querySelector('.todo-completed'); // выполненые дела

console.log(headerInput);

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

   todoData.push(newTodo);
   event.target.reset(); // очищаем поля формы 

   render(); // после вызываем рендер, чтоб у нас обновилась страница 
});

render(); // вызываем ее, как только запустилась страница 


// что нужно реализовать:
// удаление записи
// после добавления дела, поле "Какие планы?" должно очищаться 
// нельзя добавлять пустое поле  
// сохранять все необходимо в Local Storage и записывать из нее в массив todoData
