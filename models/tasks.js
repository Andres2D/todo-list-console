const Task = require("./task");
const colors = require('colors');

/**
 * _list: 
 *      {'uuid-2134234-3434-4: {id: 1, description: 'sfsdf', completedIn: 432535345}}
 *      {'uuid-2134234-3434-4: {id: 1, description: 'sfsdf', completedIn: 432535345}}
 *      {'uuid-2134234-3434-4: {id: 1, description: 'sfsdf', completedIn: 432535345}}
 *      {'uuid-2134234-3434-4: {id: 1, description: 'sfsdf', completedIn: 432535345}}
 */

class Tasks {

    get listArr(){
        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    constructor() {
        this._list = {};
    }

    cretaeTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    loadTaskFromArray(tasks = []) {        
        tasks.forEach( task => {
            this._list[task.id] = task;
        }); 
    }

    completeList() {
        console.log();
        this.listArr.forEach( (task, index) => {
            const {description, completedIn} = task;
            const taskOutput = `${colors.green(index+1)}: ${description} :: ${(completedIn !== null) 
                                                                    ? 'Completed'.green 
                                                                    : 'Pending'.red}`;
            console.log(taskOutput);
        });
    }

    listFromTaskStatus(completed = true) {
        console.log();

        const list = completed 
            ? this.listArr.filter(t => t.completedIn !== null)
            : this.listArr.filter(t => t.completedIn === null); 

        list.forEach( (task, index) => {
            const {description, completedIn} = task;
            const taskOutput = `${colors.green(index+1)}: ${description} :: ${(completedIn !== null) 
                                                                    ? `${completedIn}`.green
                                                                    : 'Pending'.red}`;
            console.log(taskOutput);
        });
    }

    deleteTask(id = '') {
        if(this._list[id]) {
            delete this._list[id];
        }
    }

    toggleCompletedTasks(ids = []) {

        ids.forEach(id => {
            const task = this._list[id];
            if(!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }
        });

        this.listArr.forEach(task => {
            if(!ids.includes(task.id)) {
                this._list[task.id].completedIn = null;
            }
        });

    }

}

module.exports = Tasks;
