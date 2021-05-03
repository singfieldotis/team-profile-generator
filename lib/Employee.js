const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  
    getName() {
      const name = 
      inquirer.prompt(
        {
          type: 'text',
          name: 'name',
          message: 'What is your name?'
        }).then(({ name }) => {
          this.name = new Employee(name);
        });
    }
    getId() {
      const id = 
      inquirer.prompt(
        {
          type: 'input',
          name: 'id',
          message: 'What is your ID numer?'
        }).then(({ id }) => {
          this.id = new Employee(id);
        })
    }
    getEmail() {
      const email = 
      inquirer.prompt(
        {
          type: 'text',
          name: 'email',
          message: 'What is your Email address?;'
        }).then(({ email }) => {
          this.email = new Employee(email);
        })
    }

    getRole() {
      return `Employee`
    }
  }


module.exports = Employee;