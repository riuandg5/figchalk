var figchalk = require('./index.js');

var ok    = figchalk.theme("green", "bgWhiteBright"),
	notok = figchalk.theme("redBright");

console.log(figchalk.mix("figchalk", "blueBright", "Graffiti"));

console.log(figchalk.figlet("figlet", "3d diagonal"));

console.log(figchalk.chalk("chalk", "yellowBright"), ok("theme 1"), notok("theme 2"));