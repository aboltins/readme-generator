function generateMarkdown(data) {
  // switch statement to check which license has been selected by the developer and then
  // apply the according license badge.
  var licenseUsed = "";
  switch (data.license) {
    case data.license = "Apache License 2.0":
      licenseUsed = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case data.license = "GNU General Public License v3.0":
      licenseUsed = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case data.license = "MIT License":
      licenseUsed = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case data.license = "BSD 2-Clause 'Simplified' License":
      licenseUsed = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case data.license = "BSD 3-Clause 'New' or 'Revised' License":
      licenseUsed = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
  }
  // return statement is necessary to return the
  // generated markdown string to the writeFile function call in index.js.
  return `
# ${data.title}

${licenseUsed}

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

${data.contributing}

## Tests

To run tests, run the following command:

    ${data.tests}

## Questions

If you have any questions or want to check out my other projects, please visit me on [GitHub](https://github.com/${data.github}) or feel free to email me at <${data.email}>.
`;
}
// generateMarkdown function is being exported so that it can be used in other parts of the codebase.
module.exports = generateMarkdown;



