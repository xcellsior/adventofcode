const fs = require('fs');
let rawdata = fs.readFileSync('input.txt', 'utf-8');

/* Key
A, X = Rock
B, Y = Paper
C, Z = Scissor
 */

let strategyGuide = [], index = 0;
rawdata.split(/\r?\n/).forEach(line => {
    line = line.trim().split(/\s+/);
    strategyGuide[index] = line;
    index++;
});

// could make a matchup chart but it's easier to make a few if-statements. Not going for optimization.
let points = 0;
for (let i = 0; i < strategyGuide.length; i++) {
    switch (strategyGuide[i][0]) {
        case 'A': // Rock
            switch(strategyGuide[i][1]) {
                case 'X': // Tie
                    points += 1;
                    points += 3;
                    break;
                case 'Y':
                    points += 2;
                    points += 6;
                    break;
                case 'Z':
                    points += 3;
                    break;
            }
            break;
        case 'B': // Paper
            switch(strategyGuide[i][1]) {
                case 'X':
                    points += 1;
                    break;
                case 'Y':
                    points += 2;
                    points += 3;
                    break;
                case 'Z':
                    points += 3;
                    points += 6;
                    break;
            }
            break;
        case 'C': // Scissors
            switch(strategyGuide[i][1]) {
                case 'X':
                    points += 1;
                    points += 6;
                    break;
                case 'Y':
                    points += 2;
                    break;
                case 'Z':
                    points += 3;
                    points += 3;
                    break;
            }
    }
}
console.log(points);
points = 0;
for (let i = 0; i < strategyGuide.length; i++) {
    switch (strategyGuide[i][1]) {
        case 'X': // Lose
            switch(strategyGuide[i][0]) {
                case 'A': // They play rock
                    points += 3; // you play scissors
                    break;
                case 'B':
                    points += 1;
                    break;
                case 'C':
                    points += 2;
                    break;
            }
            break;
        case 'Y': // Tie
            switch(strategyGuide[i][0]) {
                case 'A':
                    points += 1;
                    points += 3;
                    break;
                case 'B':
                    points += 2;
                    points += 3;
                    break;
                case 'C':
                    points += 3;
                    points += 3;
                    break;
            }
            break;
        case 'Z': // Win
            switch(strategyGuide[i][0]) {
                case 'A':
                    points += 2;
                    points += 6;
                    break;
                case 'B':
                    points += 3;
                    points += 6;
                    break;
                case 'C':
                    points += 6;
                    points += 1;
                    break;
            }
    }
}
console.log(points);