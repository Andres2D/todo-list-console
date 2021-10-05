
// const {showMenu, pause} = require('./helpers/messages');

const { inquirerMenu, pause, readInput, deleteTaskQuestions, confirm, showListChecklist } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");

console.clear();
const main = async() => {
    
    let opt = '';
    const tasks = new Tasks();
    const taskDB = readDB();

    if(taskDB) {
        tasks.loadTaskFromArray(taskDB);
    }

    do {
        opt = await inquirerMenu();
        
        switch(opt) {
            case '1':
                const desc = await readInput('Description:');
                tasks.cretaeTask(desc);
            break;
            case '2':
                tasks.completeList();
            break;
            case '3':
                tasks.listFromTaskStatus(true);
            break;
            case '4':
                tasks.listFromTaskStatus(false);
            break; 
            case '5':
                const ids = await showListChecklist(tasks.listArr);
                tasks.toggleCompletedTasks(ids);
            break;
            case '6':
                const id = await deleteTaskQuestions(tasks.listArr);
                if(id !== '0') {
                    const ok = await confirm('Are you sure?');
    
                    if(ok) {
                        tasks.deleteTask(id);
                        console.log('Task deleted'.green);
                    }
                }
            break;
        }

        saveDB(tasks.listArr);

        await pause();
    }while(opt !== '0');
}

main();
