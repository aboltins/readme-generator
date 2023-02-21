function generateMarkdown(data) {
  // return statement is necessary to return the
  // generated markdown string to the writeFile function call in index.js.
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

## Installation

    ${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}.

## Tests

To run tests, run the following command:

    ${data.tests}

## Questions

Please feel free to visit my other projects on [github.com/${data.github}](https://github.com/${data.github}). If you have any questions feel free to reach out to me on <${data.email}>.
`;
}
// generateMarkdown function is being exported so that it can be used in other parts of the codebase.
module.exports = generateMarkdown;
