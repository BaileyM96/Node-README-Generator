// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
     "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
     break;
     case "GNU":
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
      case "Apache":
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
        case "Mozilla Public license":
          "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)" 
          break;
          case "None":
            return ' ';
  }
  };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      //Add in the copyright details for the license
  }
}

// TODO: Create a function to generate markdown for README
//Start plugging in the sections of the readme like description and install sections
function generateMarkdown(data) {
  return `
  #  ${data.title}
 

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## License
  ${data.license}

  ## Credits
  ${data.credits}
  `;

}

module.exports = generateMarkdown;
