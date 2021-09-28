// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response, git) {
  
  // dynamic table of contents
  let toc = `## Table of Contents`;

  if (response.install !== ``) {toc += `
  * [Installation](#installation)`};

  toc += `
  * [Usage](#usage)`
  
  if (response.questions !== ``) {toc += `
  * [Questions](#questions)`};

  if (response.contributions !== '') {toc += `
  * [Contributions](#contributions)`};

  if (response.credits !== '') { toc += `
  * [Credits](#credits)`};

  // markdown
  // REQUIRED project name
  let markdown =
  `# ${response.name}
  `
  
  // OPTIONAL tagline
  if (response.tagline !==``) {
  markdown +=
  `## *${response.tagline}*`
  };

  //REQUIRED description
  markdown +=`
  ## Description
  *What is it and why was it made?*

  ${response.description}

  ![License for GitHub repo](https://img.shields.io/github/license/${response.username}/${response.repo})
  `

  //generated toc
  markdown += toc;

  // OPTIONAL installation
  if (response.install !==``) {
  markdown +=`
  ## Installation
  *How to install the project:*

  ${response.install}
  `
  };

  // REQUIRED usage and questions: 
  // OPTIONAL instructions/live page
  // REQUIRED image/alt
  markdown +=`
  ## Usage
  *Instructions and/or Examples for utilizing the project:*

  `

  if (response.usage !==``) {
  markdown += `
  ${response.usage}`
  };

  if (response.page !==``) {
  markdown +=`

  Live demo can be viewed at: ${response.page}
  
  `
  };

  markdown += `

  ![${response.alt}](${response.image})
  
  ## Questions

  GitHub: [@${git.login}](${git.url})

  ${response.name} is originally made by ${response.username}. 
  If you have any questions or need specialized help, the project manager 
  can be reached at ${response.email}. 
  Include the subject line "${response.name} SUPPORT".
  `

  // OPTIONAL contributions
  if (response.contributions !==``) {
  markdown +=`
  ## Contributions
  *Want to help? Here's how*

  ${response.contributions}
  `
  };

  //OPTIONAL Credits
  if (response.credits !==``) {
  markdown +=`
  ## Credits
  *Special thanks to...*
  
  ${response.name} is made in part by ${response.credits}. 
  `
  };

  return markdown;
}

module.exports = generateMarkdown;
