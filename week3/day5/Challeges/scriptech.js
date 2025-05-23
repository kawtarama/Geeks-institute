// Array to store tasks
const tasks = [];
let nextTaskId = 0;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    bindEvents();
    updateEmptyState();
});

// Bind event listeners
function bindEvents() {
    const form = document.getElementById('taskForm');
    const clearBtn = document.getElementById('clearBtn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask();
    });

    clearBtn.addEventListener('click', function() {
        clearAllTasks();
    });
}

// Main function to add a task
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    // Check if input is not empty
    if (taskText === '') {
        input.focus();
        return;
    }

    // Create task object with required properties
    const task = {
        task_id: nextTaskId,
        text: taskText,
        done: false
    };

    // Add to tasks array
    tasks.push(task);
    nextTaskId++;

    // Add to DOM
    renderTask(task);

    // Clear input and focus
    input.value = '';
    input.focus();

    // Update empty state
    updateEmptyState();
}

// Function to render a task in the DOM
function renderTask(task) {
    const listTasks = document.getElementById('listTasks');
    
    // Create task element
    const taskElement = document.createElement('div');
    taskElement.className = 'task-item new-task';
    taskElement.setAttribute('data-task-id', task.task_id);

    taskElement.innerHTML = `
        <button class="delete-btn" onclick="deleteTask(${task.task_id})">
            <i class="fas fa-times"></i>
        </button>
        <input 
            type="checkbox" 
            class="task-checkbox" 
            id="task-${task.task_id}"
            ${task.done ? 'checked' : ''}
            onchange="doneTask(${task.task_id})"
        >
        <label 
            for="task-${task.task_id}" 
            class="task-label ${task.done ? 'completed' : ''}"
        >
            ${task.text}
        </label>
    `;

    // Insert at the beginning (newest first)
    if (listTasks.firstChild && !listTasks.firstChild.classList?.contains('empty-state')) {
        listTasks.insertBefore(taskElement, listTasks.firstChild);
    } else {
        listTasks.appendChild(taskElement);
    }

    // Remove animation class after animation completes
    setTimeout(() => {
        taskElement.classList.remove('new-task');
    }, 300);
}

// BONUS I: Function to mark task as done/undone
function doneTask(taskId) {
    // Find task in array
    const task = tasks.find(t => t.task_id === taskId);
    if (!task) return;

    // Toggle done status
    task.done = !task.done;

    // Update DOM
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    const label = taskElement.querySelector('.task-label');
    const checkbox = taskElement.querySelector('.task-checkbox');

    if (task.done) {
        label.classList.add('completed');
    } else {
        label.classList.remove('completed');
    }

    checkbox.checked = task.done;
}

// BONUS II: Function to delete a specific task
function deleteTask(taskId) {
    // Remove from tasks array
    const taskIndex = tasks.findIndex(task => task.task_id === taskId);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
    }

    // Remove from DOM with animation
    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskElement) {
        taskElement.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            taskElement.remove();
            updateEmptyState();
        }, 300);
    }
}

// Function to clear all tasks
function clearAllTasks() {
    if (tasks.length === 0) return;

    if (confirm('Are you sure you want to clear all tasks?')) {
        // Clear the tasks array
        tasks.length = 0;
        
        // Clear the DOM
        const listTasks = document.getElementById('listTasks');
        listTasks.innerHTML = '';
        
        // Update empty state
        updateEmptyState();
    }
}

// Function to show/hide empty state message
function updateEmptyState() {
    const listTasks = document.getElementById('listTasks');
    const emptyState = document.getElementById('emptyState');

    if (tasks.length === 0) {
        if (!emptyState) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'empty-state';
            emptyDiv.id = 'emptyState';
            emptyDiv.textContent = 'No tasks yet. Add one above!';
            listTasks.appendChild(emptyDiv);
        }
    } else {
        if (emptyState) {
            emptyState.remove();
        }
    }
}