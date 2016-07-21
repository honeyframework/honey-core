import fs from 'fs';

export default function loadFileFromDisk(filePath, isScript) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, isScript ? 'utf8' : null, (err, data) => {
      if (err) {
        reject(err);
      }

      if (isScript) {
        console.log('\n\nFS.READFILE:\n', data, typeof data, '\n\n');
      } else {
        resolve(JSON.parse(data.toString()));
      }
    });
  });
}
