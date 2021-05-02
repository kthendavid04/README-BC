const inquirer = require('inquirer');
const fs = require('fs');
const md = require("./Assets/JS/markdown");

//README template
const generateREADME = (answers) =>
`# ${answers.title}
*** [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
#Table of Contents|
------------ | 
  * [Description](#description)
  * [Installation](#installation) 
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)


## Description
${answers.description}



## Installation
${answers.installation}


## Usage
${answers.usage}


## License
${answers.license}

list of license . When license selected; badge will appear near top of page. 
the explanataion of the license will be in this section.

## Contributing
${answers.license}
*
*
*
*
*

 

## Tests
${answers.tests}
show screen shots ![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

[Video Walkthrough]()add link to screencast video 

## Questions
[GitHub]()github user name
[E-mail]()e-mail address

`;
// User is asked about their README sections
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your application?"
    },
    {
      type: "input",
      name: "description",
      message: "Write a breif description of your application. What it is? How it should be used? Why you created it?"
    },
    {
      type: "input",
      name: "installation",
      message: "where and or how do you install the application?"
    },
    {
      type: "input",
      name: "usage",
      message: "What are the instructions on how to use? Provide examples for use. "
    },
    {
      type: "input",
      name: "checkbox",
      message: "What licenses did you use for your application?",
      choices: "",
    },
    // {
    //   type: "input",
    //   name: "title",
    //   message: "What is the title of your application?"
    // },
    // {
    //   type: "input",
    //   name: "title",
    //   message: "What is the title of your application?"
    // },
    // {
    //   type: "input",
    //   name: "title",
    //   message: "What is the title of your application?"
    // },
    
  ])
  .then(answers => {
    const MDcontent = generateREADME(answers);

    fs.writeFile('README.md', MDcontent, (err) =>
    err ? console.log(err) : console.log ('Successfully created README.md!'));[]
});
