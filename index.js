const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'The title of my project: ',
            name: 'title',
        },
        {
            type: "list",
            message: "License:",
            name: "license",
            choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License",  "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License"]
        },
        {
            type: 'input',
            message: 'Installation:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'usage:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contributing:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Tests. To run tests, run the following command:​ ',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'questions:',
            name: 'questions',
        }
    ])
];

// // function to write README file
// function writeToFile(readme, data) {
//     fs.writeFile(readme, JSON.stringify(response, null, `\t`), (err) => {
//         err ? console.log(err) : console.log("Success");
//     });
// }

// // writeToFile();


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
