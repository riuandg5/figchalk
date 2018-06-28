# figchalk
figlet + chalk

## Installation
```
npm install figchalk -g
```
## Usage
```js
// require the module
const figchalk = require('figchalk');

// modify string with both figlet and chalk
// syntax figchalk.mix(string, characterColor, fontStyle, horizontalSpacing, verticalSpacing)
console.log(figchalk.mix("figchalk", "blueBright", "Graffiti"));

// modify string with figlet only
// syntax figchalk.figlet(string, fontStyle, horizontalSpacing, verticalSpacing)
console.log(figchalk.figlet("figlet", "3d diagonal"));

// modify with chalk only
// syntax figchalk.chalk(string, characterColor, backgroundColor)
console.log(figchalk.chalk("chalk", "yellowBright"));

// set theme for particular chalk statements
// syntax figchalk.theme(characterColor, backgroundColor)
const theme = figchalk.theme("green", "bgWhiteBright");

// return chalk statement with theme
// syntax themeName(anyString)
console.log(theme("this statement has a theme"));
```
## CLI
```shell
  syntax : figchalk [-f or -c] [-s] <string> [--cc] <chalkColor> [--cb] <chalkBackground> [--ff] <figletFont> [--hl] <horizontalSpacing> [--vl] <verticalSpacing>

  --version           Show version number

  -f, --figlet        Figlet string
  -c, --chalk         Chalk coloured string
  -s, --string        String to be converted   [required]

  --cc, --chalkcolor  String color
  --cb, --chalkbg     String background color
  --ff, --figletfont  String font

  --hl, --horlay      Horizontal spacing
  --vl, --verlay      Verticalal spacing

  -h, --help          Show help


Examples:
  figchalk -f -s string                     // output figlet string with standard font
  figchalk -f -s string --ff Ghost          // output figlet string with Ghost font
  figchalk -c -s string                     // output default colored string
  figchalk -c -s string --cc cyanBright     // output cyanBright colored string
  figchalk -s string                        // output figlet string with default color and standard font
  figchalk -s string --cc greenBright --ff  // output figlet string with
  Small                                     // greenBright color and Doom font
```