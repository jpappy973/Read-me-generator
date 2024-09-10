//function creates first part of badge for license
function renderLicenseBadge(license) {
  if(license == 'MIT'){
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }else if(license == 'Apache'){
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  }else if(license == 'ISC'){
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`;
  }else if(license == 'Mozilla'){
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  }else if(license == 'Boost'){
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
  }else if(license == 'Attribution-License-Be'){
      return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]`;
  }else{
      return'';
  }

}

//function creats link for badge
function renderLicenseLink(license) {

  if(license == 'MIT'){
      return `(https://opensource.org/licenses/MIT)`
  }else if(license == 'Apache'){
      return `(https://opensource.org/licenses/Apache-2.0)`
  }else if(license == 'ISC'){
      return `(https://opensource.org/licenses/IPL-1.0)`
  }else if(license == 'Mozilla'){
      return `(https://opensource.org/licenses/MPL-2.0)`
  }else if(license == 'Boost'){
      return `(https://www.boost.org/LICENSE_1_0.txt)`
  }else if(license == 'Attribution-License-Be'){
      return `(https://opendatacommons.org/licenses/by/)`
  }else{
      return'';
  }
}

// function puts together badge image and link to created badge
function renderLicenseSection(license) {
  const Lic = `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;

    return Lic;

}

//function creats unordered list
const Dependencies = (str)=>{
  let arr = str.split(',');

  for(let i =0; i<arr.length;i++){
      arr[i] = `* ${arr[i]}`;

  }

  let NewStr = arr.toString();

  NewStr = NewStr.replace(/,/g,'\n')

  return NewStr
}





// This function takes the user input and turns it to markdown data that'll be passes to 
//fs to creat readme file
function generateMarkdown(data) {
  let init = "``` sh\n"+data.init+"\n```"
  const Lic = `${renderLicenseSection(data.Lic)}`
  
  return `

### ${data.Projectname}
----
${data.Summary}
## Table of Contents
1. [Description](#description)
2. [Getting Started](#getting-started)
3. [Installing](#installing)
4. [Executing Program](#executing-program)

## Description
${data.FullSummary}
## Getting Started
-----
### Dependencies
${Dependencies(data.Dependencies)}

### Installing
${data.Install}

### Executing Program
${init}

## License

${Lic}

`;
}



export default generateMarkdown;
