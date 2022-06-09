// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  if(license === 'None'){
    return ''
  }
  return `![${license}](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license === 'None'){
    return ''
  }
  return '* [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

if(license === 'None'){
  return ''
}
return `## License

This project is licensed under the ${license} license.`
}

function screenShots(array){
// var arr = JSON.parse(array);
// console.log(array)

// for (let i = 0; i < arr.length; i++) {
//  return `![${arr[i]}](https://img.shields.io/badge/License-${arr[i]}-blue.svg)`
  
// }
return `![${array}](${array})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}

## Description

${data.description}

#Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Please do the following to run the application: ${data.installation}

## Usage

In order to use this app: ${data.usage}
${renderLicenseSection(data.license)}
## Contributing
Contributors: ${data.contributing}

## Tests

The following is needed to run the test: ${data.tests}

## Questions

If you have any questions or issues with the application, please reach out to ${data.name} with the information provided below:
![GitHub](https://github.com${data.githubUser})
${data.email}

${screenShots(data.images)}
`;
}

module.exports = generateMarkdown;
