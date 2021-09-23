// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Prompt user
inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'checkbox',
            choices: ['HTML', 'CSS', 'JavaSCript', 'C#', 'C++', 'Python 1', 'Scratch'],
            name: 'stack',
            message: 'What languages do you know?',
        },
        {
            type: 'list',
            choices: ['Email', 'Phone', "Don't talk to me"],
            name: 'communication',
            message: 'What is your preferred method of communication?',
        },
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
        
        fs.writeFile(filename, JSON.stringify(data, null, '/t'), (err) => 
            err ? console.log(err) : console.log('Success!')
        );
    });

// Create the HTML and incorporate user responses (from response object)
// probably using Template Literal syntax to build the HTML
// Write/output HTML file to the application root director (same folder that contains the .js)
// use the fs.writeFile(fileName, htmlString, (err) => {...}) method
// Need to write out Success message after successfully outputing HTML
// inside writeFile callback, verify that there was no error.
// Just use console.log() for this

// HOMEWORK PSUEDO
// What the app is for
// How to use the app
// How to install it
// How to report issues
// How to make contributions 
//Dynamically generates a README.md file

// Include a walkthrough video that demonstrates functionality

// Project title
    // displayed as title of README
// Description
// Table of Contents
// Installation
// Usage
//License
    // List of options
    // Badge for that license is added near top of readme 
    // Notice added to license section explaining which license the app is under
// Contributing
// Tests 
// Questions

// When I enter my Github username
    // added to Questions w link to github profile
// email address
    // added to README entitled questions w instructions for how to reach
// Table of contents
    //take you to that readme section



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();