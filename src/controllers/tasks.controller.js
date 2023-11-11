import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id,
  }).populate('user');
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });
  const taskSaved = await newTask.save();
  res.json(taskSaved);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate('user');
  if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const taskDeleted = await Task.findByIdAndDelete(req.params.id);
  if (!taskDeleted)
    return res.status(404).json({ message: 'Tarea no encontrada' });
  //res.json({ message: `Tarea eliminada correctamente ${taskDeleted}` });
  return res.sendStatus(204);
};

export const updateTask = async (req, res) => {
  const { title, description, date } = req.body;
  const taskUpdated = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      date,
    },
    { new: true }
  );
  if (!taskUpdated)
    return res.status(404).json({ message: 'Tarea no encontrada' });
  res.json({ message: `Tarea actualizada correctamente ${taskUpdated}` });
};
