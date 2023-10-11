const { readFileSync: readFile, writeFileSync: writeFile } = require('fs');
const { join: path } = require('path');

const inputFilePath = path(__dirname, 'input.txt');
const outputFilePath = path(__dirname, 'output.txt');
const encoding = 'utf8';

const input = readFile(inputFilePath, encoding);

const output = input.replace(
    /^.+?(\w+)\s+(\d(?:\.\d+)+).*$/gim,
    'ghcup install $1 $2'
);

writeFile(outputFilePath, output, encoding);
