const fs = require('fs');
let rawdata = fs.readFileSync('input.txt', 'utf-8');
let rsPriorities = 0;

rawdata.split(/\r?\n/).forEach(line => {
    const half1 = line.slice(0, line.length / 2).split("");
    const half2 = line.slice(line.length / 2).split("");

    const common = half1.filter(item => half2.includes(item));
    const asciiVal = common[0].charCodeAt(0);

    let char;
    // convert lowercase
    if (asciiVal >= 97 && asciiVal <= 122) {
        char = asciiVal - 96;
    }
    // convert uppercase
    if (asciiVal >= 65 && asciiVal <= 90) {
        char = asciiVal - 38;
    }
    rsPriorities += char;
});

console.log(rsPriorities);

// part 2
let lines = rawdata.split("\n");
rsPriorities = 0;
for (let i = 0; i < lines.length; i += 3) {
    for (let j = 0; j < 3; j++) {
        lines[i+j] = lines[i+j].replace("\r", "");
    }
    const group = lines.slice(i, i + 3);
    const rs1 = group[0].split("");
    const rs2 = group[1].split("");
    const rs3 = group[2].split("");

    const commonItem = rs1.filter(item => rs2.includes(item) && rs3.includes(item))

    const asciiVal = commonItem[0].charCodeAt(0);
    let char;
    // convert lowercase
    if (asciiVal >= 97 && asciiVal <= 122) {
        char = asciiVal - 96;
    }
    // convert uppercase
    if (asciiVal >= 65 && asciiVal <= 90) {
        char = asciiVal - 38;
    }
    rsPriorities += char;

}
console.log(rsPriorities);
