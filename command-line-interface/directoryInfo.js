#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs');

const run = () => {
    const files = shell.ls('-l');
    files.forEach(file => {
        console.log(chalk.green(file.name));
    });
};

run();