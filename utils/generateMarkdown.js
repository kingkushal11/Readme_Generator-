// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return ''
  }else{
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return ''
  }else{
    return `
## License
${license} `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## License
${renderLicenseLink(data.license)}  
## Table of Contents  
- [Decription](#decription)  
- [Installation](#installation)
- [Usage](#usage) 
- [Contributing](#contributing)  
- [Tests](#tests)   
- [Questions](#questions) 
## Decription
${data.decription}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
- GitHub Profile Page:(https://github.com/${data.questions}).
- Any other question contact: ${data.email}
`;
}

module.exports = generateMarkdown;
