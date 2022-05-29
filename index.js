const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');




// Questions

const questions = [

   
      {
        type:'input',
        name: 'name',
        message: 'What is the name of the MANAGER?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their E-mail address?'
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is their office number?'
      },
      {
        type:'input',
        name: 'name',
        message: 'What is the name of the MANAGER?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their E-mail address?'
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is their office number?'
      },
      {
        type:'input',
        name: 'name',
        message: 'What is the name of the MANAGER?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their E-mail address?'
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is their office number?'
      },
      {
        type:'input',
        name: 'name',
        message: 'What is the name of the MANAGER?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is their E-mail address?'
      },
      {
        type: 'input',
        name: 'office',
        message: 'What is their office number?'
      }
    ];


function init() {
    inquirer.prompt(questions).then(function(userInput) {
    
        const pageHTML = generatePage(userInput)
    
        fs.writeFile('./index.html', pageHTML, err => {
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