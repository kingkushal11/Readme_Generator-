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
