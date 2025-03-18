function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = function () {
            li.classList.toggle("done");
        };
        document.getElementById("task-list").appendChild(li);
        input.value = ""; // Clear input field
    }
}
