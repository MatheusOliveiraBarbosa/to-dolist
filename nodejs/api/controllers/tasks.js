const Task = require('../models/task')

//GET ALL TASKS : <GET>
exports.tasks_get_all = (req, res, next) => {
    Task.findAll({}).then(function(tasks) {
        res.status(200).json(tasks);
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

//GET TASK BY ID : <GET>
exports.task_get_by_id = (req, res, next) => {
    const _id = req.params.id;
    Task.findOne({where : {id : _id}}).
    then(task => {
        if (task){
            res.status(200).json(task);
        }else{
            res.status(404).json({
                message: "Don't find any task with id: " + _id
            });
        }
    }).catch(err => {
        res.status(500).json({
            error : err.message
        });
    });
}

//CREATE A NEW TASK : <POST>
exports.task_create = (req, res, next) =>{
    Task.create({
        name : req.body.name,
        severity : req.body.severity
    }).then(task => {
        if(task.id){
            res.status(201).json({
                task
            });
        }else{
            res.status(500).json({
                message: "Don't created task"
            });
        }
    }).catch(err => {
        res.status(500).json({
            error: err.message
        });
    });
}

//UPDATES TASKS : <PUT> AND <PATCH>
exports.task_update_put = (req, res, next) => {
    const _id = req.params.id;
    Task.update(req.body, {where : {id : _id}}).then( updatedTask =>{
        res.status(200).json(updatedTask);
    })
    .catch( function (error) {
        res.status(500).json(error)
    });
}

exports.task_update_patch = (req, res, next) => {
    const _id = req.params.id;
    Task.update(req.body, {where : {id : _id}}).then( updatedTask =>{
        res.status(200).json(updatedTask);
    })
    .catch( function (error) {
        res.status(500).json(error)
    });
} 

//DELETE A TASK BY ID : <DELETE>
exports.task_delete = (req, res, next) => {
    const _id = req.params.id;
    Task.findByPk(_id).then(task => {
        if(task){
            Task.destroy({where: {id: _id}}).then(function(){
                res.status(200).json({
                    message:'Task by id: ' + _id + ' was deleted!'
                });
            }).catch(err => {
                res.status(500).json({
                    error: err.message
                });
            });
        }else{
            res.status(404).json({
                message: 'Task by id: ' + _id + " wasn't find and delete"
            })
        }
    }).catch(err =>{
        res.status(500).json({
            error: err.message
        });
    });

}