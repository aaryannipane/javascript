
// our first module is chalk
const chalk = require("chalk");
// get more info of chalk module :- https://www.npmjs.com/package/chalk

// to write text in blue color inside terminal
console.log(chalk.blue("Hello World!"));

// give background color to text
console.log(chalk.bgYellow.red("Hello World!"))

// underline your text
console.log(chalk.underline("Hello World!"));

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello World!'));