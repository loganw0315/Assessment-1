console.log(` /$$$$$$$                                                                      /$$       /$$    /$$          /$$ /$$       /$$             /$$                        
| $$__  $$                                                                    | $$      | $$   | $$         | $$|__/      | $$            | $$                        
| $$  \\ $$ /$$$$$$   /$$$$$$$ /$$$$$$$ /$$  /$$  /$$  /$$$$$$   /$$$$$$   /$$$$$$$      | $$   | $$ /$$$$$$ | $$ /$$  /$$$$$$$  /$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$ 
| $$$$$$$/|____  $$ /$$_____//$$_____/| $$ | $$ | $$ /$$__  $$ /$$__  $$ /$$__  $$      |  $$ / $$/|____  $$| $$| $$ /$$__  $$ |____  $$|_  $$_/   /$$__  $$ /$$__  $$
| $$____/  /$$$$$$$|  $$$$$$|  $$$$$$ | $$ | $$ | $$| $$  \\ $$| $$  \\__/| $$  | $$       \\  $$ $$/  /$$$$$$$| $$| $$| $$  | $$  /$$$$$$$  | $$    | $$  \\ $$| $$  \\__/
| $$      /$$__  $$ \\____  $$\\____  $$| $$ | $$ | $$| $$  | $$| $$      | $$  | $$        \\  $$$/  /$$__  $$| $$| $$| $$  | $$ /$$__  $$  | $$ /$$| $$  | $$| $$      
| $$     |  $$$$$$$ /$$$$$$$//$$$$$$$/|  $$$$$/$$$$/|  $$$$$$/| $$      |  $$$$$$$         \\  $/  |  $$$$$$$| $$| $$|  $$$$$$$|  $$$$$$$  |  $$$$/|  $$$$$$/| $$      
|__/      \\_______/|_______/|_______/  \\_____/\\___/  \\______/ |__/       \\_______/          \\_/    \\_______/|__/|__/ \\_______/ \\_______/   \\___/   \\______/ |__/      

`);
console.log("Welcome to the password validator tool!");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter password for validation, must be at least 10 characters and contain numbers and letters: ", function(input){
    password = input
    if (password.length >= 10 && password.match(/\d+/g) && password.match(/[a-zA-Z]/g)){
        console.log('Password validation successful!');
    } else {
        console.log('Password validation failed!');
    }
    reader.close();
});