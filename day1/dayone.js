const fs = require('fs');
let rawdata = fs.readFileSync('input.txt', 'utf-8');

let index =0, sum = 0;
let calorieData = [];
rawdata.split(/\r?\n/).forEach(line =>  {
    let thisLine = parseInt(line, 10)
    if (isNaN(thisLine)){
        calorieData[index] = sum;
        index++;
        sum = 0;
    }
    else {
        sum += thisLine;
    }
});

// find the greatest
const max = Math.max(...calorieData);
console.log('max: ', max);