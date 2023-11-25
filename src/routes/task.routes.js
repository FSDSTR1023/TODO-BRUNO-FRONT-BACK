import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
  getTasksByStatus,
} from '../controllers/tasks.controller.js';
import { createTaskSchema } from '../schemas/task.schema.js';

import { validateSchemaTask } from '../middlewares/validate.middleware.js';

const router = Router();

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/completed', authRequired, getTasksByStatus);
router.get('/tasks/pending', authRequired, getTasksByStatus);
router.get('/tasks/onprogress', authRequired, getTasksByStatus);
router.get('/tasks/:id', authRequired, getTask);
router.post(
  '/tasks',
  authRequired,
  validateSchemaTask(createTaskSchema),
  createTask
);
router.delete('/tasks/:id', authRequired, deleteTask);
router.put('/tasks/:id', authRequired, updateTask);

export default router;
