const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const alertContainer = document.getElementById("alert-container");

let tasks = [];

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    showAlert("Task cannot be empty!", "danger");
    return;
  }

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  const span = document.createElement("span");
  span.textContent = taskText;
  span.style.cursor = "pointer";
  span.addEventListener("click", () => {
    span.classList.toggle("text-decoration-line-through");
  });

  const delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger btn-sm";
  delBtn.textContent = "Delete";
  delBtn.onclick = function () {
    taskList.removeChild(li);
    updateCount();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  updateCount();
  showAlert("Task added successfully!", "success");
});

function updateCount() {
  taskCount.textContent = taskList.children.length;
}

function showAlert(message, type) {
  alertContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}
