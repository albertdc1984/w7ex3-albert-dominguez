require("dotenv").config();
const debug = require("debug")("vacunacion");
const chalk = require("chalk");
const dbConnect = require("./database");
const questionsApp = require("./inquirer/inquirer");

const mongoString = process.env.MONGO_STRING;

(async () => {
  try {
    await dbConnect(mongoString);
    questionsApp();
  } catch (error) {
    debug(chalk.redBright(`Error: `, error.message));
  }
})();
