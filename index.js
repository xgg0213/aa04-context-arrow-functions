const User = require('./classes/user');

const michelle = new User('Michelle');

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

debugger
greetAfterNameChange(michelle.changeName, 'Elle');
greetAfterNameChange(michelle.changeName.bind(michelle), 'Elle');
  // should print out: Hi my name is Elle

  // has 2 solutions
  // solution 1: update user: change the changeName function in user to arrow function;
  // solution 2: update index: add bind(michelle) to the greetAfterNameChange;
