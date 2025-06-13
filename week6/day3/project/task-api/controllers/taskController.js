const { readTasks, writeTasks } = require('../utils/fileHandler');
const { v4: uuidv4 } = require('uuid');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read tasks' });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read task' });
  }
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    const tasks = await readTasks();
    const newTask = {
      id: uuidv4(),
      title,
      description: description || '',
      completed: false
    };
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const tasks = await readTasks();
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Task not found' });

    if (title !== undefined) tasks[index].title = title;
    if (description !== undefined) tasks[index].description = description;
    if (completed !== undefined) tasks[index].completed = completed;

    await writeTasks(tasks);
    res.json(tasks[index]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const tasks = await readTasks();
    const updatedTasks = tasks.filter(t => t.id !== req.params.id);
    if (updatedTasks.length === tasks.length) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await writeTasks(updatedTasks);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
