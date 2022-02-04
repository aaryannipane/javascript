// validator is use to validate email 
// learn more :- https://www.npmjs.com/package/validator

const validator = require("validator");

// isEmail method returns true if email is correct else false
const res = validator.isEmail("AryanNipane.com");
console.log(res);

// ________________________________________________________________________________
const chalk = require("chalk");

// if(res){
//     console.log(chalk.bgGreen.black("Correct"));
// }
// else{
//     console.log(chalk.bgRed.black("Wrong"));
// }

// OR with ternary operator

res ? console.log(chalk.bgGreen.black("Correct")) : console.log(chalk.bgRed.black("Wrong"));