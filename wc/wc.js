import fs from 'fs/promises';

async function readBytes(f) {
  try {
      const stats = await fs.stat(f);
      return stats.size;
  } catch (err) {
      console.error(`Error reading file: ${err}`);
  }
}

if (process.argv.length == 4) {
  if (process.argv[2] == '-c') {
    const target = process.argv[3];
    
    (async () => {
      try {
          const result =  await readBytes(target)
          console.log(result + " " + target)
      } catch (error) {
          console.error(error);
      }
    })();
  } else {
    console.log("Invalid proccess called");
  }
} else {
  console.log('Invalid arguments provided');
}


