# React Chrome Extension Template 
A React based template for building Chrome extensions

## Libs/Build Tools
- React
- Redux
- SASS
- Webpack
- Babel
- ESLint
- Jest/Enzyme

## Project Structure
```
.
│   .babelrc // babel config
│   .eslintignore // eslint ignore file
│   .eslintrc // eslint config
│   package.json // project dependency file. Use yarn to amend
│   README.md // this file
│   webpack.config.js // webpack config file
│   yarn.lock // yarn dep lock file
└───dist // output folder for build commands
└───node_modules
└───src // source code
|   │   background.js // chrome background script
|   │   index.jsx // react app entry point
|   │   manifest.json // chrome manifest file
|   |   ui.html // ui html template
│   └───assets // images, fonts etc.
│   └───components // react components
│   └───devtools // devtools files
│   └───styles // global styles
│   |   │   main.scss // global SASS styles entry point
│   |   └───mixins // SASS mixins
│   |   └───partials // SASS partials
│     
└───test // contains test mocks. test are kept with components

```

## Development
It is recommended that Yarn is used for development
1. `git clone` this repository
2. Install dependencies using `yarn` (or npm install if not using yarn)
3.  Run `yarn:dev` to build the extension and start watching the src folder for changes

The built extension will be output to the `dist` folder. You can load this folder as an unpacked extension (visit `chrome://extensions` and select enable developer mode).

The project also uses ESLint for linting. Run `yarn lint:fix` to perform linting

## Distribution
To package the extension for distribution run `yarn build:prod`. This will output the compiled extension to the `dist` folder

## Tests
Tests can be ran by executing `yarn test` or if you do not have yarn installed via `npm test`. Jest is the testing framework of choice
