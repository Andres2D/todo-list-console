
// const {showMenu, pause} = require('./helpers/messages');

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const { saveDB } = require("./helpers/saveFile");
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
                console.log(tasks.listArr);
            break;
        }

        // saveDB(tasks.listArr);

        await pause();
    }while(opt !== '0');
    // pause();

}

main();
