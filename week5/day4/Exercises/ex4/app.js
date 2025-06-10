// app.js

import { TodoList } from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask("Apprendre JavaScript");
myTodoList.addTask("Faire les devoirs");
myTodoList.addTask("Aller courir");

myTodoList.completeTask(1);

myTodoList.listTasks();
