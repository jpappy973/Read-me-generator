// TODO: Include packages needed for this application

import inq from 'inquirer';
import colors from 'colors';
import fs from 'fs'

import generateMarkdown from './utils/generateMarkdown.js'




// This function creates the readme file on your local storage 
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>{
        if(err){
            console.log(err)
        }
    })
}

// This function ask the user the question needed to make readme file it also pass the date and file name to the function writeToFile
function init() {
    console.log(colors.green(`

        
▗▄▄▖ ▗▄▄▄▖ ▗▄▖ ▗▄▄▄ ▗▖  ▗▖▗▄▄▄▖    ▗▖ ▗▖▗▄▄▄▖▗▄▄▄▄▖ ▗▄▖ ▗▄▄▖ ▗▄▄▄ 
▐▌ ▐▌▐▌   ▐▌ ▐▌▐▌  █▐▛▚▞▜▌▐▌       ▐▌ ▐▌  █     ▗▞▘▐▌ ▐▌▐▌ ▐▌▐▌  █
▐▛▀▚▖▐▛▀▀▘▐▛▀▜▌▐▌  █▐▌  ▐▌▐▛▀▀▘    ▐▌ ▐▌  █   ▗▞▘  ▐▛▀▜▌▐▛▀▚▖▐▌  █
▐▌ ▐▌▐▙▄▄▖▐▌ ▐▌▐▙▄▄▀▐▌  ▐▌▐▙▄▄▖    ▐▙█▟▌▗▄█▄▖▐▙▄▄▄▖▐▌ ▐▌▐▌ ▐▌▐▙▄▄▀
                
        `))
    inq
.prompt([
    {
        type: 'input',
        message: 'what is the name of your project?',
        name: 'Projectname'
    },

    {
        type: 'input',
        message: 'In One sentenc what does your code do?',
        name: 'Summary',
    },

    {
        type: 'input',
        message: 'Give a full discription about you code?',
        name: 'FullSummary',
    },

    

    {
        type: 'input',
        message: 'Does your code have any Dependencies?',
        name: 'Dependencies',

    },

    {
        type: 'input',
        message: 'How and where to insatall?',
        name: 'Install',

    },

    {
        type: 'input',
        message: 'How to execiut your code?',
        name: 'init',

    },

    {
        type:'checkbox',
        message:'Pick a license.',
        choices:['MIT','Apache','Boost','ISC','Mozilla','Attribution-License-BY'],
        name:'Lic',
    }

    
]
).then((resp)=>{
    const data = generateMarkdown(resp);
    writeToFile('readme.md', data)

    

    
}

)
}



// Function call to initialize app
init();






