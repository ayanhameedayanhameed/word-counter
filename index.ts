#! /usr/bin/env node


//---------------> word counter project >------------------------

import inquirer from "inquirer"
import chalk from "chalk"


console.log(chalk.green.italic.underline("\t\t-----> WORD COUNTER >-----"))
const answers: {
    sentence: string
} = await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count the word: "
}])

 const words = answers.sentence.trim().split(" ")

 console.log(words)

 console.log(`Your sentence word count is ${words.length}`);
 