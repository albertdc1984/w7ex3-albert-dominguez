const inquirer = require("inquirer");
const debug = require("debug")("vacunacion:cuestionario");

const questionsApp = () => {
  inquirer.prompt([{ name: "que_pasa", message: "Que pasa tete" }]).then(() => {
    debug("Aha");
  });
};

module.exports = questionsApp;
