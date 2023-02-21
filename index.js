const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

inquirer
    .prompt([
        {
            type: 'input',
            message: 'The title of my project: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description: ',
            name: 'description',
        },
        {
            type: "list",
            message: "License:",
            name: "license",
            choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License"]
        },
        {
            type: 'input',
            message: 'Installation:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage:',
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
            message: 'Questions:',
            name: 'questions',
        }
    ])

    // function to write README file

    .then((data) => {
        // creates the new file name/adds lowercase/removes all spaces for file name
        // then adds the file extension as md.
        const filename = `${data.title.toLowerCase().split('').join('')}.md`;
        // file system writes a new file with the above file name and data from generateMarkdown
        // and If there is an error, the console.log(err) statement will log the error to the console. 
        // If the write was successful, the console.log("Success") statement will log a success message to the console.
        fs.writeFile(filename, generateMarkdown(data), (err) => {
            err ? console.log(err) : console.log("Success");
        });
    });
