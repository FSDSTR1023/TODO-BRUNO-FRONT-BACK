import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate('user');
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date, deadLine, status, isPrivate } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      deadLine,
      user: req.user.id,
      status,
      isPrivate,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('user');
    if (!task) return res.status(404).json({ message: 'Task not Found' });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Task not Found' });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskDeleted = await Task.findByIdAndDelete(req.params.id);
    if (!taskDeleted)
      return res.status(404).json({ message: 'Task not Found' });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: 'Task not Found' });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, date, deadLine, status, isPrivate } = req.body;
    const taskUpdated = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        date,
        deadLine,
        status,
        isPrivate,
      },
      { new: true }
    );
    if (!taskUpdated)
      return res.status(404).json({ message: 'Task not Found' });
    res.json({ message: `Task updated correctly ${taskUpdated}` });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: 'Task not Found' });
  }
};

export const getTasksByStatus = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
      status: req.params.status,
    }).populate('user');
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};
