const fs = require('fs');
let dataStream = fs.readFileSync('input.txt', 'utf-8');


function findStartOfPacketMarker(dataStream) {
    let lastFourChars = "";
    for (let i = 0; i < dataStream.length; i++) {
        lastFourChars += dataStream[i];

        if (lastFourChars.length > 4) {
            lastFourChars = lastFourChars.substring(1);  // remove the first character
        }

        if (lastFourChars.length === 4 &&
            lastFourChars[0] !== lastFourChars[1] &&
            lastFourChars[0] !== lastFourChars[2] &&
            lastFourChars[0] !== lastFourChars[3] &&
            lastFourChars[1] !== lastFourChars[2] &&
            lastFourChars[1] !== lastFourChars[3] &&
            lastFourChars[2] !== lastFourChars[3]) {
            return i +1;
        }
    }
    return -1;
}

let markerIndex = findStartOfPacketMarker(dataStream);
console.log(markerIndex);

const dataStream1 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
const markerIndex1 = findStartOfPacketMarker(dataStream1);
console.log(markerIndex1); // Output: 5

const dataStream2 = "nppdvjthqldpwncqszvftbrmjlhg";
const markerIndex2 = findStartOfPacketMarker(dataStream2);
console.log(markerIndex2); // Output: 6

const dataStream3 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
const markerIndex3 = findStartOfPacketMarker(dataStream3);
console.log(markerIndex3); // Output: 10

const dataStream4 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";
const markerIndex4 = findStartOfPacketMarker(dataStream4);
console.log(markerIndex4); // Output: 11

// Part 2
function findStartOfMessageMarker(dataStream) {
    let lastFourteenChars = "";

    for (let i = 0; i < dataStream.length; i++) {
        lastFourteenChars += dataStream[i];

        if (lastFourteenChars.length > 14) {
            lastFourteenChars = lastFourteenChars.substring(1);
        }

        // Use a set to determine if all chars are different
        // Much better than a massive if-statement
        if (lastFourteenChars.length === 14) {
            const lastFourteenCharsSet = new Set(lastFourteenChars);
            if (lastFourteenCharsSet.size === 14) {
                return i + 1;
            }
        }
    }
    return -1;
}
markerIndex = findStartOfMessageMarker(dataStream);
console.log(markerIndex);