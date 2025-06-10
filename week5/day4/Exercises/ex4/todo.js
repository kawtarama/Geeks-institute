// todo.js

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = {
      description,
      completed: false
    };
    this.tasks.push(task);
    console.log(`Tâche ajoutée : "${description}"`);
  }

  completeTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].completed = true;
      console.log(`Tâche complétée : "${this.tasks[index].description}"`);
    } else {
      console.log("Index invalide.");
    }
  }

  listTasks() {
    console.log("\nListe des tâches :");
    this.tasks.forEach((task, index) => {
      const status = task.completed ? "✅" : "❌";
      console.log(`${index}. ${status} ${task.description}`);
    });
  }
}
