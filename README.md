# <img src="https://github.com/LF-digitala-kanaler/favicon/blob/master/icon.svg" width="24"> LF Web Components

## Getting started
[ _How to install the NPM package_ ]

## Contributing

### Project structure

- `Dockerfile`: contains our visual testing environment, used for visual tests localy.
- `Lib`: contains all components.
- `Stories`: contains our Storybook stories.
- `Test`: contains our tests.
	- `Unit`: contains unit tests `*.unit.js`. Written in Chai.
	- `Visual`: contains visual tests `*.visual.js`. Playwright i used for these tests.
		- `Screenshots`: Screenshots that acts as the **_visual truth_**.

#### Temp folders
- `Playwright-report`: HTML report of the visual tests.
- `Test/visual-result`: Screenshots used to comopaire with the **_visual truth_**.
- `Storybook-static`: Static build of documentation
- `Coverage`: HTML report of the unit test code coverage.

### Build

Install all dependencies:
```
npm install
```


### NPM commands

| Command | Description |
| -------- | ------ |
| `analyze` | Generate Custom Element Manifest (CEM) |
| `storybook` | Starts Storybook dev server |
| `build-storybook`| Build a static version of storybook |
| `test`| Run all unit and visual tests |
| `test:unit` | Run all unit tests |
| `test:unit test/xxx.unit.test` | Run specified unit test |
| `test:unit-watch` | Run unit test on file change |
| `test:visual` | Run all visual tests |
| `test:update-visual xxx.visual.js` | Run specified visual test |
| `playwright:test` | Only use by test commands and in CI |
| `playwright:update` | Only use by test commands |
| `playwright:report` | Show visual test report (HTML format) |