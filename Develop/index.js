// TODO: Include packages needed for this application

// This allows us to read/write files in a file system with Node
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
//This will show on the command Line for the user to input

const questions = [
    {
        message: "What is your email?",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("If no email use N/A.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is your Github Username",
        name: "username",
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
        message: "Provide Installation instructions",
        name: "install",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide installation instructions or use N/A");
            }
            return true;
        }
    },
    {
        type: "list",
        message: "What license do you want to include?",
        name: "license",
        choices: ["None", "GNUv3.0", "MIT", "Apache", "MozillaPublicLicense"],
    },
    {
        message: "Do you want to include credits??",
        name: "credits",
        validate:  function (answer) {
            if (answer.length < 1) {
                return console.log("If no credits please use N/A");
            }
            return true;
        }
    },
    {
        message: "Include tests if used",
        name: "test",
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("If no tests were ran please use N/A");
            }
            return true;
        }
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
        const newMarkDown = generateMarkDown(userInput);
        console.log(newMarkDown);
        writeToFile('test.md', newMarkDown);
    })
};

// Function call to initialize app
init();
