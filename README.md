# Testing React with Jest and Enzyme

This simple application has been created as an exercise on my way to learn and master testing in JavaScript and TDD development.
The testing libraries that have been chosen are Jest (developed at Facebook) and Enzyme (developed at Airbnb). At the moment (March 2018) they are the most popular ones among the React Comunity.
The application has been built using `create-react-app`, which takes care of setting up the development environment and ships with Jest as default testing library.
The different commits are thought to be either separate features and subsequent steps in the learning process.

## Getting Started

To install this application you can (fork and) download it and then run the command `npm install` from your console.
To launch it, after the installation has successfully complete, launch it with the command `npm start`.
To test is, run the command `npm test` in a separate command prompt window.

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Jest](https://facebook.github.io/jest/) - A complete and easy to set-up JavaScript testing solution
* [Enzyme](http://airbnb.io/enzyme/) - A JavaScript Testing utility for React

## Author

* **Daniele Erbì** - [daniel-234](https://github.com/daniel-234)

## Notes

The examples on this application have been taken or inspired by the courses I followed to learn testing in JavaScript, all of them mentioned in the [Acknowledgments](#acknowledgments) section.

## Notes on the Installation process

If you want to install everything from scratch, there are some steps that at the time of this writing need to be taken, as something seems not to be working properly when installing Enzyme.
For the installation process using `create-react-app`, I followed the official React and Enzyme documentation, that are summarized in this article: [An introduction to testing React components with Enzyme 3](https://javascriptplayground.com/introduction-to-react-tests-enzyme/).
After the installation, though, some modules were deleted. I was faced with one error when trying to run the tests afterwards:
1. `Error: Cannot find module 'jest-cli'...`.
After reinstalling the 'jest-cli' module, another one showed up:
2. `TypeError: environment.setup is not a function...`.
The solution suggested on [this issue](https://github.com/facebook/jest/issues/5119) by Dan Abramov (Gaeron) solved the problem.
Here is what he wrote: "If you have both `react-scripts` and `jest` in your `package.json`, delete `jest` from it. Then delete `package-lock.json`, `yarn.lock` and `node_modules`. Then run `npm install` (or `yarn` if you use it)."
By just cloning the application and running `npm install` on your terminal, none of the above errors would show up.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Frontend Masters - Testing JavaScript Applications (feat. React and Redux) by Kent C. Dodds](https://frontendmasters.com/courses/testing-javascript/)
* [Egghead - Testing JavaScript with Jest, by Kent C. Dodds](https://egghead.io/playlists/testing-javascript-with-jest-a36c4074)
* [JavaScript Playground - Testing React with Jest and Enzyme](https://javascriptplayground.com/testing-react-enzyme-jest/)