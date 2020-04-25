'use strict';

let todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    headerBtn = document.getElementById('add');

let todoData = [];     

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
    
    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    const btnTodoComplete = li.querySelector('.todo-complete');
    btnTodoComplete.addEventListener('click', function(){
      item.completed = !item.completed;
      render();
    })
  //удаляем дело по клике на корзину  
    const btnRemove = li.querySelector('.todo-remove');
    btnRemove.addEventListener('click', function(){
      li.remove();
      
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
  } else {
    alert('Введите задание');
  }  
   
  if (todoData === null) {
    todoData = JSON.parse(localStorage.getItem("todoData"));
  }

 //сохраняем массив в виде JSON строки
  localStorage.setItem(todoData, JSON.stringify(todoData));

  render();

 });

//  document.addEventListener('DOMContentLoaded', function(){
//   
//   console.log('ok');
// }) 

render();