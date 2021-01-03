const inquirer = require("inquirer");
const fs = require("fs");

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
    name: "License",
    text: "Enter license information",
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
];
console.log(questions)
