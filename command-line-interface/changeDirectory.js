#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs');

const changeDirectory = path => {
    const dirPath = `${process.cwd()}/${path}`;
    const directoryContainsDirectory = shell.test('-d', dirPath);
    if (directoryContainsDirectory) {
        process.chdir(dirPath);
        console.log(chalk.white.bgGreen.bold(`Успешно! Вы находитесь в ${process.cwd()}`));
    } else {
        console.log(chalk.white.bgRed.bold(`Ошибка! Каталога ${path} не существует!`));
    }
};

const run = () => {
    const fileName = process.argv[2];

    changeDirectory(fileName);
};

run();