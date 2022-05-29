const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

//const Manager = require('./lib/Manager');
//const Employee = require('./lib/Employee');
//const Intern = require('./lib/Intern');
//const Engineer = require('./lib/Engineer');



// Questions

const questions = [

   
      {
        type:'input',
        name: 'managerName',
        message: 'What is the name of the MANAGER?'
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'What is their employee ID?'
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'What is their E-mail address?'
      },
      {
        type: 'input',
        name: 'managerOffice',
        message: 'What is their office number?'
      },
      {
        type:'input',
        name: 'engineerName',
        message: 'What is the name of the ENGINEER?'
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'What is their employee ID?'
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is their E-mail address?'
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is their Github username?'
      },
      {
        type:'input',
        name: 'internName',
        message: 'What is the name of the INTERN?'
      },
      {
        type: 'input',
        name: 'internId',
        message: 'What is their employee ID?'
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'What is their E-mail address?'
      },
      {
        type: 'input',
        name: 'internGithub',
        message: 'What is their Github username?'
      }
    ];


function init() {
    inquirer.prompt(questions).then(function(userInput) {
    
        const pageHTML = generatePage(userInput)
    
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Profile COMPLETE!')
            }
        });
    
    })
}

init();