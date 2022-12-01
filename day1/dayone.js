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
let max = Math.max(...calorieData);
console.log('max: ', max);

// find the top 3 total calories
let topThree = 0;
let maxIndex = calorieData.indexOf(max);
for (let i = 0; i < 3; i++) {
    max = Math.max(...calorieData)
    topThree += max;
    maxIndex = calorieData.indexOf(max);
    calorieData[maxIndex] = 0;
}
console.log(topThree);
