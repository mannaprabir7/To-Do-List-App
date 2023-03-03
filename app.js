// Selecting elements from the DOM
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const totalTasks = document.getElementById("total-tasks");

// Initializing the task count
let count = 0;

// Function to create a new task item
function createTaskItem(taskText) {
  // Creating the task item
  const taskItem = document.createElement("li");

  // Creating the task text element
  const taskTextElem = document.createElement("span");
  taskTextElem.classList.add("task-text");
  taskTextElem.textContent = taskText;

  // Creating the delete button element
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Adding event listener to the delete button
  deleteBtn.addEventListener("click", function () {
    taskItem.remove();
    count--;
    updateTotalTasks();
  });
  // Creating the checkbox element
  const checkboxElem = document.createElement("input");
  checkboxElem.type = "checkbox";

  // Adding event listener to the checkbox
  checkboxElem.addEventListener("change", function () {
    if (checkboxElem.checked) {
      taskTextElem.style.textDecoration = "line-through";
    } else {
      taskTextElem.style.textDecoration = "none";
    }
  });

  // Appending the elements to the task item
  taskItem.appendChild(checkboxElem);
  taskItem.appendChild(taskTextElem);
  taskItem.appendChild(deleteBtn);
  // Incrementing the task count and updating the total tasks element
  count++;
  updateTotalTasks();

  // Returning the task item
  return taskItem;
}

// Function to update the total tasks element
function updateTotalTasks() {
  totalTasks.textContent = count;
}

// Adding event listener to the add task button
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  // Checking if the task text is not empty
  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

// Adding event listener to the task input element for "Enter" key press
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});
