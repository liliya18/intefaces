#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs');

const renameFile = (currentName, newName) => {
    const currentDirectory = process.cwd();
    fs.rename(`${currentDirectory}/${currentName}`, `${currentDirectory}/${newName}`, error => {
        if (error) console.log(chalk.white.bgRed.bold(currentName));
    })
};

const run = () => {
    const args = process.argv.slice(2);
    args.map(arg => {
        const names = arg.split('/');
        renameFile(names[0], names[1]);
    });
};

run();