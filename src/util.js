const fs = require('fs')

function checkHTMLFile(file) {

    const pathToFileOrDir = __dirname + file

    if (fs.existsSync(pathToFileOrDir)) {
        console.log(`The file or directory at '${pathToFileOrDir}' exists.`)
        return true
    } else {
        console.log(`The file or directory at '${pathToFileOrDir}' does not exist.`);
    }

    return false

}

module.exports = { checkHTMLFile }