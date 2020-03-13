const chalk = require("chalk");

module.exports = (array)=>{
    console.clear();
    
    for(var row of array){
        for(var column of row){
            process.stdout.write(chalk.bgHsl(column[0], 50, 50)(column[1]))
        }
    }
}