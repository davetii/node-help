import path from 'path';
import klaw from 'klaw';


const items = [];
const rootFolder = '/Users/dave/IdeaProjects/node-help/dupfind/testdir';
const dups = arr => arr.filter((item, i) => arr.indexOf(item) != i);

const findDups = () => {
    const duplicateItems = dups(items);
    duplicateItems.forEach(function(s) { console.log(s) });
    console.log("Duplicate Items: " + duplicateItems.length);
};


async function test() {
    klaw(rootFolder)
        .on('data', function (item) {
            if(!item.stats.isDirectory() &&
                path.parse(item.path).ext != '.jpg' &&
                path.parse(item.path).ext != '.bif') {
                items.push(path.parse(item.path).base)
            }
        })
        .on('end', () => {
            findDups();
        });
}


async function main() {
    console.log("hello");
    test();
}
main();