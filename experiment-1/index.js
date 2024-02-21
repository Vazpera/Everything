console.log("Hello, world!");

const readline = require('readline').createInterface({
  	input: process.stdin,
  	output: process.stdout
});

readline.question('Who are you?', name => {
  	console.log(`Hey there ${name}!`);
	readline.close();
});

readline.question("How old are you?", age => {
	console.log(`${18-age} untill you're 18!`);
	readline.close();
});
