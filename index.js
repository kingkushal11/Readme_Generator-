// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for your project?'
    },
    {
        type: 'input',
        name: 'decription',
        message: 'Give a decription about your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How did you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for this project?',
        choices: ["MIT","None"]

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed on this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What test should be run for this project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'if you have any questions who do you contact?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) throw err 
        console.log('file written');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
    writeToFile('README.md', generateMarkdown(data)); 
    console.log(data)    
    })
}

// Function call to initialize app
init();
