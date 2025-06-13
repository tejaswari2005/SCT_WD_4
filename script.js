document.getElementById("task-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const taskText = document.getElementById("task").value;
  const taskTime = document.getElementById("task-time").value;
  if (!taskText || !taskTime) return;

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  const taskInfo = document.createElement("span");
  taskInfo.innerHTML = `<strong>${taskText}</strong><br><small>${new Date(taskTime).toLocaleString()}</small>`;
  li.appendChild(taskInfo);

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("task-buttons");

  // Complete
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✔️";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Edit
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", taskText);
    if (newText) taskInfo.innerHTML = `<strong>${newText}</strong><br><small>${new Date(taskTime).toLocaleString()}</small>`;
  };

  // Delete
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.onclick = () => {
    li.remove();
  };

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(deleteBtn);
  li.appendChild(btnContainer);

  taskList.appendChild(li);
  document.getElementById("task-form").reset();
});
