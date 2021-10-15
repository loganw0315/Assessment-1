console.log("Welcome to the password validator tool!");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter password for validation: ", function(input){
    password = input
    if (password.length >= 10){
        console.log('Password validation successful!');
    } else {
        console.log('Password validation failed!');
    }
    reader.close()
});