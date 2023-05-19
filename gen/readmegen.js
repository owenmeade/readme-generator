class markDown {
    static renderBadge(lisence){
        const badges = {

        }
    }



    static generateReadme(answers){
    return `# ${answers.title}

    ## Description:
        ${answers.description}

    ## Installation
        ${answers.installation}

    ## Usage:
        ${answers.usage}

    ## Credits
        ${answers.credits}

    ## Lisence
        Lisenced under the ${answers.lisence} lisence.

    ## Badge
        (https://img.shields.io/badge/Lisence-${answers.lisence}-blueviolet.svg)

    ## Tests
        ${answers.test}
    `
    }
}

module.exports = markDown