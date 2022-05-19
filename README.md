# Testing React with Jest, Enzyme and Cypress


## :red_circle: This repository is now archived!

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

This simple application has been created as an exercise on my way to learn and master testing in JavaScript and React.
The testing libraries that have been chosen are Jest, Enzyme and Cypress. [Update June 2018 - In my future projects I will switch to `react-testing-library` in place of Enzyme]. 
The application has been built using `create-react-app`, which takes care of setting up the development environment and ships with Jest as default testing library.

## Getting Started

To install this application you can (fork and) download it and then run the command `npm install` from your terminal.
After the installation has successfully complete, you can launch it with the command `npm start`.
To run the unit tests, use the command `npm test` in a separate command prompt window.
To run the end-to-end tests (at the moment there's only a basic one) with Cypress, type `npx cypress open` at the root of the project folder and then `Run all specs` in the Cypress window that will open. 

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Jest](https://facebook.github.io/jest/) - A complete and easy to set-up JavaScript testing solution
- [Enzyme](http://airbnb.io/enzyme/) - A JavaScript Testing utility for React
- [Cypress](https://www.cypress.io/) - A test runner for anything that runs in a browser

## Author

- **Daniele Erbì** - [daniel-234](https://github.com/daniel-234)

## Notes

The tests to mock a call to an external API are taken from the course [Testing React with Jest and Enzyme](https://javascriptplayground.com/testing-react-enzyme-jest/). The article [But really, what is a JavaScript mock?](https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d) by Kent C. Dodds helped me simplify the mock test even further by using a `mock` directory.
Instead of using the built-in React Router v4 library, I re-wrote the custom version built by Tyler McGinnis in his course (reference in [Acknowledgments](#acknowledgments) below).

## Notes on the Installation process

It's probably enough to follow the instructions on the [Getting Started](#getting-started) section above to install and run the application. If you encounter an error about missing the `jest-cli` module, though, here are some steps to follow.

First error message: 

1.  `Error: Cannot find module 'jest-cli'`.

After reinstalling the 'jest-cli' module, another one would show up:

2.  `TypeError: environment.setup is not a function`.

The solution suggested on [this issue](https://github.com/facebook/jest/issues/5119) by Dan Abramov (Gaeron) solved the problem.
Here is what he wrote: "If you have both `react-scripts` and `jest` in your `package.json`, delete `jest` from it. Then delete `package-lock.json`, `yarn.lock` and `node_modules`. Then run `npm install` (or `yarn` if you use it)."

## Notes on Flow, flow-typed and Visual Studio Code

As Visual Studio Code has been used as IDE for this project and there seems to be [issues](https://github.com/flowtype/flow-for-vscode/issues/240) about the extension it uses to support Flow, this project commits regarding Flow have been reverted.   
All code regarding Flow has been moved to another branch, while in the master branch it will be only added type checking with PropTypes. 

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Frontend Masters - Testing JavaScript Applications (feat. React and Redux) by Kent C. Dodds](https://frontendmasters.com/courses/testing-javascript/)
- [Egghead - Testing JavaScript with Jest, by Kent C. Dodds](https://egghead.io/playlists/testing-javascript-with-jest-a36c4074)
- [An introduction to testing React components with Enzyme 3](https://javascriptplayground.com/introduction-to-react-tests-enzyme/)
- [JavaScript Playground - Testing React with Jest and Enzyme](https://javascriptplayground.com/testing-react-enzyme-jest/)
- [Medium - But really, what is a JavaScript mock?](https://blog.kentcdodds.com/but-really-what-is-a-javascript-mock-10d060966f7d)
- [Google Developers - Async Functions: Making Promises Friendly](https://developers.google.com/web/fundamentals/primers/async-functions)
- [Tyler McGinnis - Build your own React Router v4](https://tylermcginnis.com/build-your-own-react-router-v4/)
- [React Training GitHub - testing the Route Component](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/__tests__/Route-test.js)
- [Stackoverflow - Updating address bar with new URL without hash or reloading the page](https://stackoverflow.com/questions/3338642/updating-address-bar-with-new-url-without-hash-or-reloading-the-page)
- [MDN Web Docs - Manipulating the browser history](<https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState()_method>)
- [39Digits - Configure Prettier and ESLint in Visual Studio Code](https://www.39digits.com/configure-prettier-and-eslint-in-visual-studio-code/)
- [39Digits - Automatically format your JavaScript commits using Prettier and Husky](https://www.39digits.com/automatically-format-your-javascript-commits-using-prettier-and-husky/)
- [Stackoverflow - Unexpected use of no restricted globals](https://stackoverflow.com/questions/50058258/unexpected-use-of-screen-no-restricted-globals-reactjs)
