// Packages required
const inquirer = require('inquirer');
const fs = require('fs');

// internal
const generateMarkdown = require('./util/generateMarkdown.js');
const gitInfo = require('./util/gitInfo.js');
const api = require('./util/gitInfo.js');

// Inquirer prompts
const ask = [
        {
            type: 'input',
            name: 'name',
            message: '[Required] What is the title of your project?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A project title is required to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'tagline',
            message: 'Input a tagline or hook (1-2 sentences ideal):',
        },
        {
            type: 'input',
            name: 'username',
            message: '[Required] What is your github username?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Username is required to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'repo',
            message: '[Required] What is the name of the GitHUb repo?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Repository name is required to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: '[Required] What email address are you reachable by for project support?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Email is required to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "[Required] Description: What is your project about? Why? How was it made?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Description is required to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'If applicable, what is the installation process?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'If applicable, provide instructions for using the project:',
        },
        {
            type: 'input',
            name: 'page',
            message: 'If applicable, provide a link to a live page demo:',
        },
        {
            type: 'input',
            name: 'image',
            message: '[Required] What is the file path to reach your demo screenshot/gif? (example: assets/images/demo.png)',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Demo is required to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'alt',
            message: '[Required] ] Provide an alt text for your screenshot/gif for accessibility:',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Alt text is required to continue.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'If applicable, how can one contribute to the project?',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'If applicable who else should recieve credit for work on this project? (ex: x, y, and z)',
        },
    ]

// write file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        err ? console.log(err) : console.log('README generation successful!');
    });
}

// initialize
async function init() {
    try {
        //ask questions
        const response = await inquirer.prompt(ask);
        console.log("Saving Responses...");

        // github api
        const git = await api.getUser(response);
        console.log("Retriving GitHub profile...");

        //generate markdown
        const draft = generateMarkdown(response, git);
        console.log("Generating README...");

        //write file
        await writeToFile(`${response.name.toLowerCase().split(' ').join('')}-README.md`, draft);

    } catch (error) {
        console.log(error);
    }
}

init();

// Include a walkthrough video that demonstrates functionality

//License
    // List of options
    // Badge for that license is added near top of readme 
    // Notice added to license section explaining which license the app is under
