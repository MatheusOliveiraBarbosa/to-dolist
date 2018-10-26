const express = require('express');
const router = express.Router();

const tasksControllers = require('../controllers/tasks');

router.get('/', tasksControllers.tasks_get_all);

router.get('/:id',tasksControllers.task_get_by_id);

router.post('/', tasksControllers.task_create);

router.patch('/:id', tasksControllers.task_update_patch);

router.put('/:id', tasksControllers.task_update_put);

router.delete('/:id', tasksControllers.task_delete);

module.exports = router;