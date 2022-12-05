const fs = require('fs');
let rawdata = fs.readFileSync('input.txt', 'utf-8');

let count = 0;
let overlap = 0;
rawdata.split(/\r?\n/).forEach(line => {

    let pairs = line.split(',');
    let pair1 = pairs[0];
    let pair2 = pairs[1];
    let pair1arr = pair1.split("-").map(Number);
    let pair2arr = pair2.split("-").map(Number);

    let lowerBound = pair1arr[0];
    let upperBound = pair1arr[1];


    if (pair2arr[0] >= lowerBound && pair2arr[1] <= upperBound) {
        count++;
    }
    else if (lowerBound >= pair2arr[0] && upperBound <= pair2arr[1])
    {
        count++;
    }

    if (pair1arr[0] <= pair2arr[1] && pair1arr[1] >= pair2arr[0]) {
        overlap++;
    }

});
console.log(count);
console.log(overlap);
