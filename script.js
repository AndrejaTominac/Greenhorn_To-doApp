const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("input-todo-list");
const addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();

  if (inputBox.value.trim() === "") {
    alert("Please add a new task!");
    return;
  }

  const taskLi = document.createElement("li");
  taskLi.classList.add("task");
  taskLi.addEventListener("click", function () {
    this.classList.toggle("checked");
  });

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  removeButton.addEventListener("click", function () {
    this.parentElement.remove();
  });

  taskLi.innerHTML =
    '<span class="task-description">' +
    inputBox.value +
    '</span><span class="checkbox"></span>';
  //taskLi.appendChild(checkbox);
  taskLi.appendChild(removeButton);

  todoList.appendChild(taskLi);

  inputBox.value = "";

  console.log(taskLi);
  console.dir(taskLi);
}
