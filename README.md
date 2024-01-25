# <img src="https://github.com/LF-digitala-kanaler/favicon/blob/master/icon.svg" width="24"> LF Web Components

LF Web Components is a collection of reusable web components designed to enhance the development of web applications. These components provide a modular and customizable approach to building user interfaces, making it easier to create interactive and visually appealing experiences.

## Getting started
[ _How to install the NPM package_ ]

## Contributing

### Project Structure
- `Dockerfile`: Contains our visual testing environment, used for local visual tests.
- `Lib`: Contains all the web components.
- `Stories`: Contains our Storybook stories.
- `Test`: Contains our tests.
  - `Unit`: Contains unit tests written in Chai (`*.unit.js`).
  - `Visual`: Contains visual tests using Playwright (`*.visual.js`).
    - `Screenshots`: Screenshots that serve as the visual truth.

### Temporary Folders
- `Playwright-report`: HTML report of the visual tests.
- `Test/visual-result`: Screenshots used to compare with the visual truth.
- `Storybook-static`: Static build of the documentation.
- `Coverage`: HTML report of the unit test code coverage.

### NPM Commands
Here are the available NPM commands:

| Command                   | Description                                     |
| ------------------------- | ----------------------------------------------- |
| `analyze`                 | Generate Custom Element Manifest (CEM).         |
| `storybook`               | Starts the Storybook development server.        |
| `build-storybook`         | Builds a static version of Storybook.            |
| `test`                    | Runs all unit and visual tests.                  |
| `test:unit`               | Runs all unit tests.                             |
| `test:unit test/xxx.unit.test` | Runs a specified unit test.                   |
| `test:unit-watch`         | Runs unit tests on file change.                  |
| `test:visual`             | Runs all visual tests.                           |
| `test:update-visual xxx.visual.js` | Runs a specified visual test.               |
| `playwright:test`         | Only used by test commands and in CI.            |
| `playwright:update`       | Only used by test commands.                      |
| `playwright:report`       | Shows the visual test report in HTML format.     |

### Contributing Guidelines
To contribute to LF Web Components, please follow these guidelines:

#### Submitting Pull Requests
1. Fork the repository and create a new branch for your feature or bug fix.
2. Ensure that your code follows the project's coding conventions and standards.
3. Write clear and concise commit messages using the following format:
   ```
   [Category]: Brief summary of the change
   
   [Description (what and why)]

   Fixes: #123, #456
   BREAKING CHANGE: ...
   ```
   Categories can include:
   - `feat`: Feature
   - `fix`:  Bug Fix
   - `ref`:, Refactoring
   - `doc`: Changes to the documentation
   - `style`: Style or formatting change 

4. Test your changes thoroughly and ensure that all existing tests pass.
5. Submit a pull request to the `main` branch of the repository.
6. Provide a detailed description of your changes and the problem they solve.

#### Reporting Issues
If you encounter any issues or have suggestions for improvements, please report them using the GitHub issue tracker. When reporting issues, please provide the following information:
- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Any relevant error messages or screenshots

#### Coding Conventions and Standards
To maintain consistency and readability, please adhere to the following coding conventions and standards when contributing to LF Web Components:
- Use meaningful variable and function names.
- Follow the existing code formatting style.
- Comment your code when necessary to provide clarity.