import fs from 'fs';

export default function writeFileToDisk(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf8', (err) => {
      if (err) {
        return reject(err);
      }
      return resolve(true);
    });
  });
}
