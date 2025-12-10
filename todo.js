const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task (button click)
addBtn.addEventListener("click", addTask);

// Add task using ENTER key
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    // Create <li>
    const li = document.createElement("li");

    // Emoji + text + delete button
    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span class="task-text"> ${text}</span>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
    taskInput.focus();

    // Checkbox complete effect
    li.querySelector(".checkbox").addEventListener("change", function() {
        li.querySelector(".task-text").classList.toggle("completed");
    });

    // Delete button
    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.style.animation = "fadeOut 0.3s forwards";
        setTimeout(() => li.remove(), 250);
    });
}