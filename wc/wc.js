import fsp from 'fs/promises';

async function countBytes(f) {
    try {
        let stats = await fsp.stat(f);
        return stats.size;
    } catch (error) {
        console.error('Error:', error);
    }
}


async function countWords(f) {
    try {
        const content = await fsp.readFile(f, 'utf8');
        return  content.split(/\s+/).length;
    } catch (err) {
        console.error(`Error reading file: ${err}`);
    }
}

async function countLines(f) {
    try {
        const content = await fsp.readFile(f, 'utf8');
        return content.split('\n').length;
    } catch (err) {
        console.error(`Error reading file: ${err}`);
    }
}

async function main() {
    if (process.argv.length === 4) {
        const proc = process.argv[2];
        let result;
        if ( proc === '-c')
            result = await countBytes(process.argv[3]);
        else if (proc === '-l')
            result = await countLines(process.argv[3]);
        else if (proc === '-w')
            result = await countWords(process.argv[3]);
        else
            result = "Invalid process called";
        console.log(result + " " + process.argv[3]);
    } else if (process.argv.length === 3) {
        const bytes = await countBytes(process.argv[2]);
        const lines = await countLines(process.argv[2]);
        const words = await countWords(process.argv[2]);
        console.log(bytes + " " + lines + " " +  words + " " + process.argv[2]);
    } else {
        console.log('Invalid arguments provided');
    }
}

main();

