// TODO: Include packages needed for this application

// This allows us to read/write files in a file system with Node
const fs = require('fs');
//Allows us to capture user input in your Node
const inquirer = require('inquirer');
// Name util is not bright blue might have to download the package
const util = require('util');
const generateMarkDown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
//This will show on the command Line for the user to input

const questions = [
    {
        type: "input",
        message: "What is your Github Username",
        name: "Username",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please use a valid Github username.");
            }
            return true;
        }
    },
    {
        message: "What is the name of this project?",
        name: "title",
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Please provide a title for the project");
            }
            return true;
        }
    },
    {
        message: "Please provide a description of the current project",
        name: "description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Provide a short description or use 'N/A'. ");
            }
            return true;
        }
    },
    {
        message: "Include a table of contents?",
        name: "table of contents"
    },
    {
        message: "How should this project be installed?",
        name: "install"
    },
    {
        type: "Checkbox",
        message: "What license do you want to include?",
        name: "license",
        choices: ["None", "GNU General Public License v3.0", "MIT", "Apache", "Mozilla Public License"],
    },
    {
        message: "Do you want to provide screenshots?",
        name: "screenshots"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => 
        err ? console.error(err) : console.log("Your README has been generated!")
    );
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput);
    })
};

// Function call to initialize app
init();
