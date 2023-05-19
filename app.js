const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./gen/readmegen')

//questions
inquirer.prompt ([
    {
       type: 'input',
       name: 'title',
       message: 'project title?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'project usage?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'collaborators, third-party assets, or help links?'
    },
    {
        type: 'list',
        name: 'lisence',
        message: 'does the project have a lisence?',
        choices: ['MIT','ISC','GNUPLv3','Apache_2.0', 'Boost_1.0', 'BSD_3--Clause', 'EPL_1.0', 'MPL_2.0', 'OFL_1.1','Zlib'],
    },
    // {
    //     type: 'input',
    //     name: 'badge',
    //     message: 'lisence badge?'
    // },
    {
        type: 'input',
        name: 'tests',
        message: 'project tests?'
    }
    ]).then((answers)=> {
    const mark = markDown.generateReadme(answers)
    fs.writeFile('README.md',mark, (err) => {if(err){
        console.log('Could not write file')
    } else {
        console.log('SUCCESS: new README.md file generated')
    }})
    }).catch((error)=> {console.log(error)});

