const sequelize = require ('./connect_db');
const Sequelize = require('sequelize');

const Task = sequelize.define('TASK', {
    name: { type: Sequelize.STRING},
    severity : { type: Sequelize.STRING}
}, {timestamps:false, freezeTableName:true});


module.exports = Task;