const inquirer = require("inquirer");
const fs = require("fs");
const { throwError } = require("rxjs");

const questions = [
  {
    type: "input",
    name: "title",
    text: "enter title of the readme",
  },
  {
    type: "input",
    name: "description",
    text: "Write a description",
  },
  {
    type: "input",
    name: "instillation",
    text: "Instillation instructions",
  },
  {
    type: "input",
    name: "Usage",
    text: "Usage instructions",
  },
  {
    type: "input",
    name: "Contributing",
    text: "Contributing section",
  },
  {
    type: "input",
    name: "Tests",
    text: "Enter Tests",
  },
  {
    type: "input",
    name: "Github",
    text: "enter github username",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a License",
    choices: ["MIT", "Apache", "Affero", "GPL"],
  },
  {
    type: "input",
    name: "Email",
    text: "enter email address",
  }
];

startPrompts()

function startPrompts(){
  inquirer.prompt(questions).then(function(response){
    console.log(response)
var filecreate = `
# Project: ${response.title}
## Description: ${response.description}
### Table of Contents: 
* (Usage)[#usage]
* (Contributing)[#contributors]
* (License)[#license]
* (Tests)[#test}]
* (Github)[#github]
* (Email)[#email]


## Usage: 

${response.Usage}


## Contributors:

${response.Contributing}

## License:

![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Test:

${response.Tests}

## GitHub: 
https://github.com/${response.Github}

## Email:
If you have any questions please reach out to me at ${response.Email}
`
fs.writeFileSync("./README.md", filecreate, function(error){
if(error) throw error
console.log(filecreate)
})


  })
}