'use strict';

let todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    headerBtn = document.getElementById('add');

let todoData = [];  

//получаем с браузера данные, если есть (не забывать про кавычки!!!!!)
const deleteLS = function() {
if (localStorage.getItem("localData")) {
  todoData = JSON.parse(localStorage.getItem("localData"));
  };
}();

//добавляем в LS
const addLS = function() {
  localStorage.setItem("localData", JSON.stringify(todoData));
  
}
//функция рендер уже добавленных дел и  состояний
const render = function() {
   todoList.textContent = '';
   todoCompleted.textContent = '';

  todoData.forEach(function(item){
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
    '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
    '</div>'
  //добавим в начало списка дел  
    if (item.completed) {
      todoCompleted.prepend(li) 
    } else {
      todoList.prepend(li) 
    }

    const btnTodoComplete = li.querySelector('.todo-complete');
    btnTodoComplete.addEventListener('click', function(){
      item.completed = !item.completed;
      
      addLS();
      render();
    })

  //удаляем дело по клике на корзину  
    const btnRemove = li.querySelector('.todo-remove');

    btnRemove.addEventListener('click', function() {
     todoData.splice(todoData.indexOf(item), 1);
     li.remove();
     addLS();      
            
    })
   })
};  

todoControl.addEventListener('submit', function(event){
  event.preventDefault()

  const newData = {
    value: headerInput.value,
    completed: false
   };

 //проверили на пустое значение, если НЕТ - добавили и обнулили, если ДА - то алерт
   if (headerInput.value !== '') {
    todoData.push(newData);
    headerInput.value = '';
    addLS();
   } else {
    alert('Введите задание');
  }  
 
 render();
  
 });
render();
