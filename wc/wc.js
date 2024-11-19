import fsp from 'fs/promises';
import fs from 'fs';

async function readLines(f) {
  try {
    const content = await fs.promises.readFile(f, 'utf8');
    return  content.split('\n').length;
} catch (err) {
    console.error(`Error reading file: ${err}`);
}
}

async function readBytes(f) {
  try {
      const stats = await fsp.stat(f);
      return stats.size;
  } catch (err) {
      console.error(`Error reading file: ${err}`);
  }
}

async function handleBytes(target) {
  (async () => {
    try {
        const result =  await readBytes(target)
        console.log(result + " " + target)
    } catch (error) {
        console.error(error);
    }
  })();
}

async function handleLines(target) {
  (async () => {
    try {
        const result =  await readLines(target)
        console.log(result + " " + target)
    } catch (error) {
        console.error(error);
    }
  })();
}

if (process.argv.length == 4) {
  const proc = process.argv[2];
  if ( proc == '-c') {
    handleBytes(process.argv[3]);
  } else if (proc == '-l') {
    handleLines(process.argv[3]);
  } else {
    console.log("Invalid proccess called");
  }
} else {
  console.log('Invalid arguments provided');
}


