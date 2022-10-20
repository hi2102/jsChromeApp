const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	li.id = newTodo.id;
	const span = document.createElement("span");
	const button = document.createElement("button");

	span.innerText = newTodo.text;
	button.textContent = "❌";

	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newToDoObj = {
		id: Date.now(),
		text: newTodo,
	};
	toDos.push(newToDoObj);
	paintToDo(newToDoObj);
	saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
