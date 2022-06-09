// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief run down on your project?',
        name: 'description',
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
        choices: ['MIT', 'Apache_2.0', 'GNU_GPL', 'None'],
    },
    {
        type: 'input',
        message: 'Do you have any guidelines for contributing?',
        name: 'contributing',
    },
    {
        type: 'list', 
        message: "Will you be adding screenshots?",
        choices: ['yes', 'no'],
        name: 'screenshot'
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'tests',
    }, {
        type: 'input',
        message: 'Please provide your name',
        name: 'name'
    }, {
        type: 'input',
        message: 'Please provide your github username',
        name: 'githubUser',
    },
    {
        type: 'input',
        message: 'Please provide your email to reach you at',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile('README.md', generatorMarkdown(data),
        (err) =>
            err ? console.log(err) : console.log('Success!')
    );
   
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            if(data.screenshot === 'no'){
                writeToFile(data); 
            }  else{
                inquirer.prompt([
                {
                    name: 'images', 
                    message: 'please provide the url for your screenshot',
                    type: 'input'
                }
                ]).then((res)=>{
                    var newObj= {
                        ...data,
                        images: res.images
                    }
                    console.log(newObj)
                    writeToFile(newObj)
                })
            }         
        });
}

// Function call to initialize app
init();
