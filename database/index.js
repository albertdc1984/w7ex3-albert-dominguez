const debug = require("debug")("vacunacion:database");
const chalk = require("chalk");
const mongoose = require("mongoose");

const dbConnect = (mongoString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(mongoString, (error) => {
      if (error) {
        reject(error);
        return;
      }
      debug(chalk.green("Connected to database"));
      resolve();
    });
  });

module.exports = dbConnect;
