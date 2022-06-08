// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide your usage information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please select the license applicable:',
        name: 'license',
        choices: ['x', 'xx', 'xxx'],
    },
    {
        type: 'input',
        message: 'Do you have any guidelines for contributing?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Please provide the best way to reach you should there be any questions:',
        name: 'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt([questions]).then((data) => {
        const fileName = 'README.md';

        fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
