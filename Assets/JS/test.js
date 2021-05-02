console.log(process.argv);
const inquirer = require('inquirer');
const fs = require('fs');
//const { message } =require('status')

inquirer
.prompt([
{//title Prompt
    type: 'input',
    name: 'title',
    message: 'What is the name of your application?',
    //validate: (value) =>( if(value)(return true) else(return "Enter a value to continue")),
  },
  //Description Section
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation for this application?',
  },
  {
    type: 'input',
    name: 'build',
    message: 'Why did you build this application?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem did this application solve?',
  },
  //Installation Section
  {
    type: 'input',
    name: 'where',
    message: 'Where do you go to install this application?',
  },
  {
    type: 'input',
    name: 'required',
    message: 'What is required before installation?.',
  },
  //Usage
  {
    type: 'input',
    name: 'instructions',
    message: 'What instructions are needed to use the app?',
  },
  //Credits
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'Enter your GitHub username',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Enter your LinkedIn URL.',
  },
])