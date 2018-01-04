"use strict";

let todo = {title: "to do", description:"a thing to do", isDone:false};

let todoJson = JSON.stringify(todo);

localStorage.setItem("todo", todoJson);

function setTodos(todos){
  let todoJson = JSON.stringify(todos);
  localStorage.setItem("todos", todoJson);
}

function getTodos(todos){
  let todoJson = localStorage.getItem("todos");
  return JSON.parse(todoJson);
}

document.querySelector("form").addEventListener("submit", function(event){
  let newTodoTitle = document.querySelector("form input[name=title]").value;
  let newTodoDescription = document.querySelector("form input[name=description]").value;
  event.preventDefault();
  console.log(newTodoTitle, newTodoDescription);
});
