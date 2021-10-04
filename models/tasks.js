const Task = require("./task");

/**
 * _list: 
 *      {'uuid-2134234-3434-4: {id: 1, description: 'sfsdf', completedIn: 432535345}}
 *      {'uuid-2134234-3434-4: {id: 1, description: 'sfsdf', completedIn: 432535345}}
 *      {'uuid-2134234-3434-4: {id: 1, description: 'sfsdf', completedIn: 432535345}}
 *      {'uuid-2134234-3434-4: {id: 1, description: 'sfsdf', completedIn: 432535345}}
 */

class Tasks {
    constructor() {
        this._list = {};
    }

    cretaeTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }
}

module.exports = Tasks;
