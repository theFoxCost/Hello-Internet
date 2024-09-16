document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return; // Prevent adding empty tasks

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Complete task toggle
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Delete button for each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent marking task as completed when clicking delete
            taskItem.remove();
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = ''; // Clear input field after adding task
    };

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on pressing Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});
