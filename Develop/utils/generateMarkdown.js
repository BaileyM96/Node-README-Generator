// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      if (!license) {
        return ` `;
      } else {
        return `![${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
      }
  }
  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
      return ` `;
    } else {
      return `## License
      The licsense used for this project is ${license}.` 
    }
}

// TODO: Create a function to generate markdown for README
//Start plugging in the sections of the readme like description and install sections
function generateMarkdown(data) {
  return `
  #  ${data.title}
  ${renderLicenseBadge(data.license)}
 

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Credits](#credits)
  - [License](#license)



  ## Installation
  ${data.install}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.test}


  ## Credits
  ${data.credits}
  

    Questions

    If you have any questions about the project please reach me at:
    Github: https://github.com/${data.username}
    or at
    ${data.email}
    

  `;

}

module.exports = generateMarkdown;


