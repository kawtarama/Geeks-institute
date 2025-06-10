// colorful-message.js
import chalk from 'chalk';

export function showColorfulMessage() {
  console.log(chalk.blue.bgYellow.bold('✨ Voici un message coloré avec Chalk ! ✨'));
}
