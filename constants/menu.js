const options = [
    {
        value: '1',
        name: '1. Create task'
    },
    {
        value: '2',
        name: '2. List tasks'
    },
    
    {
        value: '3',
        name: '3. List completed tasks'
    },
    
    {
        value: '4',
        name: '4. List pending tasks'
    },
    
    {
        value: '5',
        name: '5. Complete task(s)'
    },
    {
        value: '6',
        name: '6. Delete task'
    },
    {
        value: '0',
        name: '0. Exit'
    }
];

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Waht do you wanna do?',
        choices: options
    }
];

const pauseQuestion = [
    {
        type: 'input',
        name: 'enter',
        message: `Press ${'ENTER'.green} to continue`
    }
];

module.exports = {
    options,
    questions,
    pauseQuestion
}
