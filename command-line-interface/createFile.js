#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs');

const createFile = fileName => {
    const filePath = `${process.cwd()}/${fileName}`;
    const directoryContainsFile = shell.test('-f', fileName);
    if (directoryContainsFile) {
        console.log(chalk.white.bgRed.bold(`Ошибка! Файл с таким названием уже существует!`));
    } else {
        shell.touch(filePath);
        console.log(chalk.white.bgGreen.bold(`Успешно! Файл ${fileName} создан!`));
    }
};
const run = () => {
    const fileName = process.argv[2];

    createFile(fileName);
};

run();