
// const {showMenu, pause} = require('./helpers/messages');

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

console.clear();
const main = async() => {
    
    let opt = '';
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();
        
        switch(opt) {
            case '1':
                const desc = await readInput('Description:');
                tasks.cretaeTask(desc);
            break;
            case '2':
                console.log(tasks._list);
            break;
        }

        if(opt !== '0') await pause();
    }while(opt !== '0');
    // pause();

}

main();
