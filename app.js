const buttonEl = document.getElementById("todo-btn");

const todoApp = () => {
  const inputEl = document.getElementById("input");
  const inputValueEl = inputEl.value;

  if (inputValueEl !== "") {
    const taskListEl = document.getElementById("taskList");
    const todoItemsEl = document.createElement("li");
    taskListEl.appendChild(todoItemsEl);
    todoItemsEl.textContent = inputValueEl;

    // =================== Adding DELETE button ====================
    const deleteButtonEl = document.createElement("button");
    todoItemsEl.appendChild(deleteButtonEl);
    deleteButtonEl.textContent = "Delete";

    // =================== Adding Function to the button ==============
    deleteButtonEl.addEventListener("click", () => {
      taskListEl.removeChild(todoItemsEl);
    });

    // ================== Clear the input after the task has been added ======================
    inputEl.value = "";
  } else {
    inputEl.style.placeholder = "red";
  }
};

buttonEl.addEventListener("click", todoApp);
