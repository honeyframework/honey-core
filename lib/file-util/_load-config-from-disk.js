import fs from 'fs';
import path from 'path';
import { config } from '../index';

export default function loadConfigFromDisk(userLocalPath) {
  const userDefinedConfigPath = path.resolve(userLocalPath, config.defaultConfigFilenameWithExt);
  return new Promise((resolve, reject) => {
    fs.readFile(userDefinedConfigPath, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data.toString()));
    });
  });
}
