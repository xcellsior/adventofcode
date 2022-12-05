/*
Starting stack
[S]                 [T] [Q]
[L]             [B] [M] [P]     [T]
[F]     [S]     [Z] [N] [S]     [R]
[Z] [R] [N]     [R] [D] [F]     [V]
[D] [Z] [H] [J] [W] [G] [W]     [G]
[B] [M] [C] [F] [H] [Z] [N] [R] [L]
[R] [B] [L] [C] [G] [J] [L] [Z] [C]
[H] [T] [Z] [S] [P] [V] [G] [M] [M]
 1   2   3   4   5   6   7   8   9
 */

const fs = require('fs');
let rawdata = fs.readFileSync('input.txt', 'utf-8');

let stack = ['','SLFZDBRH','RZMBT','SNHCLZ','JFCS', 'BZRWHGP', 'TMNDGZJV', 'QPSFWNLG','RZM','TRVGLCM',
    ];
rawdata.split(/\r?\n/).forEach(line => {
    let numbers = line.split(" ").map( (x) => parseInt(x)).filter((x) => !isNaN(x));

    // get the chars to be moved
    let pop = stack[numbers[1]].substring(0, numbers[0]);

    // remove from stack
    stack[numbers[1]] = stack[numbers[1]].substring(numbers[0]);

    // process in reverse order for replacement
    // Uncomment this line for part 1
    //pop = pop.split("").reverse().join("");

    stack[numbers[2]] = pop.concat(stack[numbers[2]]);
});

let answer = "";
for (const word of stack) {
    const firstLetter = word.charAt(0);
    answer = answer.concat(firstLetter);
}
console.log(answer);


