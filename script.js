function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement('li');
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function deleteTask(btn) {
    btn.parentElement.remove();
}

function toggleComplete(task) {
    task.parentElement.classList.toggle('completed');
}