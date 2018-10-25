const express = require('express');
const router = express.Router();


router.get('/',(req, res, next) => {
    const tasks = [
        {id:"1", severity:"HIGH", name: "task initial"},
        {id:"2", severity:"LOW", name: "task initial"},
        {id:"3", severity:"MEDIUM", name: "task initial"},
        {id:"4", severity:"HIGH", name: "task initial"},
        {id:"5", severity:"LOW", name: "task initial"}
    ];
    res.status(200).json(
       {tasks}
    );
});

router.get('/:taskId',(req, res, next) => {
    const _id = req.params.taskId;
    res.status(200).json({
        message: "Tasks id: " + _id
    });
});


router.post('/', (req, res, next) =>{
    const task = {
        name: req.body.name,
        severity: req.body.severity
    }
    res.status(201).json({
        message : "Created Task",
        createdTask: task
    });
});


router.patch('/:taskId',(req, res, next) => {
    const _id = req.params.taskId;
    res.status(200).json({
        message: "Patch Tasks id: " + _id
    });
});

router.delete('/:taskId',(req, res, next) => {
    const _id = req.params.taskId;
    res.status(200).json({
        message: "Delete Tasks id: " + _id
    });
});



module.exports = router;