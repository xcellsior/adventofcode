const fs = require('fs');
let rawdata = fs.readFileSync('input.txt', 'utf-8');

let commandStream = [], i = 0;

rawdata.split(/\r?\n/).forEach(line => {
    commandStream[i] = line;
    i++;
});
let currentDir = ['/'];
let tree = { '/':{size:0}};
// parse commands
commandStream.forEach(cmd => {
    cmd = cmd.split(' ');

    if (cmd[0].startsWith('$')) {
        if (cmd[1] === 'cd') {
            if (cmd[2] === '..') {
                currentDir.pop();
            }
            else {
                currentDir.push(cmd[2]);
                let path = currentDir.join('/');
                tree[path] = {};
                tree[path].size = 0;
            }
        }
    }
    else if (cmd[0] === 'dir') return;
    else {
        let size = parseInt(cmd[0]);
        const temp=[];
        currentDir.forEach(dir => {
            temp.push(dir);
            const temp2 = temp.join('/');
            tree[temp2].size += size;
        });
    }
});

console.log(tree);

let sum = 0;
for (let dir in tree) {
    if (tree[dir].size <= 100000) {
        sum+= tree[dir].size;
    }
}
console.log(sum);

// part 2
const sizeToFree=tree['/'].size-70000000+30000000
let dirToDelete=70000000;
for(let dir in tree) {
    if(tree[dir].size>sizeToFree && tree[dir].size<dirToDelete)
        dirToDelete=tree[dir].size;
}
console.log(dirToDelete);
