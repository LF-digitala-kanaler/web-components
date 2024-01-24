# <img src="https://github.com/LF-digitala-kanaler/favicon/blob/master/icon.svg" width="24"> LF Web Components

## Getting started
[ _How to install the NPM package_ ]

## Contributing

### Project structure

- `Dockerfile`: contains our visual testing environment.
- `Lib`: contains all components.
- `Stories`: contains our Storybook stories.
- `Test`: contains our tests.
	- `Unit`: contains unit tests `*.unit.js`. Written in Chai.
	- `Visual`: contains visual tests `*.visual.js`. Playwright i used for these tests.
		- `Screenshots`: Screenshots that acts as the _visual truth_.

#### Temp folders
- `Playwright-report`: HTML report of the visual tests.
- `Test/visual-result`: Screenshots used to comopaire with the _visual truth_.
- `Storybook-static`: Static build of documentation
- `Coverage`: HTML report of the unit test code coverage.
