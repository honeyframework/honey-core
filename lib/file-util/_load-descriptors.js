import {
  loadConfigFromDisk,
  loadFileFromDisk
} from './index';
import invariant from 'invariant';
import path from 'path';

/**
 * Using the user defined config file `.hnyrc`, this function
 * will:
 *
 *  1. fetch the root descriptor, referenced in `config.input`
 *  2. pull out descriptors[] from the root descriptor
 *  3. fetch each of the individual descriptors defined in descriptors[]
 *  4. return an array, where each item == descriptor
 *
 * @param {string} userLocalPath The root path of the user's repo
 * @returns {Promise} resolves with an array of all the descriptors
 */

export default function loadDescriptors(userLocalPath, inputPath) {
  return new Promise((resolve, reject) => {

    let rootDescriptorPath = path.resolve(userLocalPath, inputPath);
    loadFileFromDisk(rootDescriptorPath).then((rootDescriptor) => {
      invariant(rootDescriptor.descriptors, "No");

      let loadDescriptorPromises = rootDescriptor.descriptors.map((descriptorPath) => {
        let fullDescriptorPath = path.resolve(userLocalPath, path.dirname(inputPath), descriptorPath);
        return loadFileFromDisk(fullDescriptorPath);
      });

      Promise
        .all(loadDescriptorPromises)
        .then((descriptorsArray) => {
          console.log(descriptorsArray.length);
          resolve(descriptorsArray);
        });
    })
    .catch((err) => {
      reject(err);
    });
  });
}
