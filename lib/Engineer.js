const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name = '') {
    super(name);

  }
  getGithub() {
    const github = 
    inquirer.prompt(
      {
        type: 'text',
        name: 'github',
        message: 'What is your github username?'
      }).then(({ github }) => {
        this.github = new Engineer("Otis");
      });
  }

}
module.exports = Engineer;