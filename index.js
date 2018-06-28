#!/usr/bin/env node

const chalk  = require('chalk');
const figlet = require('figlet');
var figchalkObj = {};

figchalkObj.figlet = (figletString = 'Provide String', figletFont = 'Standard', figletHorizontalLayout = 'fitted', figletVerticalLayout = 'default') => {
	figletString = figlet.textSync(
		figletString,
		{
			font: figletFont,
			horizontalLayout: figletHorizontalLayout,
			verticalLayout: figletVerticalLayout
		}
	)
	return figletString;
}

figchalkObj.chalk = (string = 'Provide String', chalkColour = 'default', chalkBg) => {
	if (chalkBg) {
		return chalk `{${chalkColour}.${chalkBg} ${string}}`;
	} else {
		return chalk `{${chalkColour} ${string}}`;
	}
}

figchalkObj.theme = (chalkColour = 'default', chalkBg) => {
	return (string) => {
		if (chalkBg) {
			return chalk `{${chalkColour}.${chalkBg} ${string}}`;
		} else {
			return chalk `{${chalkColour} ${string}}`;
		}
	}
}

figchalkObj.mix = (figletString = 'Provide String', chalkColour = 'default', figletFont = 'Standard', figletHorizontalLayout = 'fitted', figletVerticalLayout = 'default') => {
	figletString = figlet.textSync(
		figletString,
		{
			font: figletFont,
			horizontalLayout: figletHorizontalLayout,
			verticalLayout: figletVerticalLayout
		}
	)
	return chalk `{${chalkColour} ${figletString}}`;
}

function run(){
	var argv = require('yargs')
		.usage('Get figlet string, chalk colored string or figlet string coloured with chalk.')
		.example('figchalk -f -s string', '-output figlet string with standard font')
		.example('figchalk -f -s string --ff Ghost', '-output figlet string with Ghost font')
		.example('figchalk -c -s string', '-output default colored string')
		.example('figchalk -c -s string --cc cyanBright', '-output cyanBright colored string')
		.example('figchalk -s string', '-output figlet string with default color and standard font')
		.example('figchalk -s string --cc greenBright --ff Small', '-output figlet string with greenBright color and Doom font')
		.alias('f', 'figlet').describe('f', 'Figlet string')
		.alias('c', 'chalk').describe('c', 'Chalk coloured string')
		.required('s', 'String must be provided!').alias('s', 'string').describe('s', 'String to be converted')
		.alias('cc', 'chalkcolor').describe('cc', 'String color')
		.alias('cb', 'chalkbg').describe('cb', 'String background color')
		.alias('ff', 'figletfont').describe('ff', 'String font')
		.alias('hl', 'horlay').describe('hl', 'Horizontal spacing')
		.alias('vl', 'verlay').describe('vl', 'Verticalal spacing')
		.help('h').alias('h', 'help')
		.argv;
	if ((argv.figlet) && (!argv.chalk)) {
		console.log(figchalkObj.figlet(argv.string, argv.figletfont, argv.horlay, argv.verlay));
	}
	if ((!argv.figlet) && (argv.chalk)) {
		console.log(figchalkObj.chalk(argv.string, argv.chalkcolor, argv.chalkbg));
	}
	if ((!argv.figlet) && (!argv.chalk)) {
		console.log(figchalkObj.mix(argv.string, argv.chalkcolor, argv.figletfont, argv.horlay, argv.verlay));
	}
	if ((argv.figlet) && (argv.chalk)) {
		console.log(chalk `{redBright ERROR: Specify -f for figlet only, -c for chalk only or none for combining both!}`);
	}
}

module.exports = figchalkObj;
if (require.main === module) {
	run();
}