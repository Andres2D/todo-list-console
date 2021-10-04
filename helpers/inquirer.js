const inquirer = require('inquirer');
require('colors');
const {
    questions,
    pauseQuestion
} = require('../constants/menu');

const inquirerMenu = async() => {
    console.clear();
    console.log('======================'.green);
    console.log('   Select an option   '.green);
    console.log('======================\n'.green);

    const {option} = await inquirer.prompt(questions);

    return option;
}

const pause = async() => {
    console.log('\n');
    await inquirer.prompt(pauseQuestion);
    return;
}

const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0){
                    return 'Please input a value'
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;

}

module.exports = {
    inquirerMenu,
    pause,
    readInput
}
