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

${data.questions}
`;
}
// generateMarkdown function is being exported so that it can be used in other parts of the codebase.
module.exports = generateMarkdown;
