import path from 'path';
import { omit as _omit } from 'lodash';
import { variable } from '../helpers/preprocessor';
import * as descriptors from './descriptors';
import { writeFileToDisk } from '../file-util';

function generateGuideFromDescriptors(description, config) {
  return Object.keys(description).map((descriptorSpecKey, i) => {

    const symbol = '$';
    const descriptor = description[descriptorSpecKey];

    switch(descriptorSpecKey) {
      case 'palette':
        return descriptors.generatePalette(descriptor, { symbol });
      case 'colour-map':
        return descriptors.generateColorMap(descriptor, { symbol });
      case 'spacing':
        return descriptors.generateSpacing(descriptor, { symbol });
      case 'font':
        return descriptors.generateFont(descriptor, { symbol });
      case 'typography':
        return descriptors.generateTypography(descriptor, { symbol });
      default:
        console.log('the descriptor type is not recognised');
    }
  }).join('\n\n');
}

export default function generate(description, config) {

  const guide = generateGuideFromDescriptors(_omit(description, 'font'), config);
  const guideWithFonts = generateGuideFromDescriptors(description, config);

  const guidePath = path.resolve(config.userPath, config.comb.output, config.comb.guideName);
  writeFileToDisk(guidePath, guide);

  const guideFPath = path.resolve(config.userPath, config.comb.output, config.comb.guideNameWithFonts);
  writeFileToDisk(guideFPath, guideWithFonts);

  return guide;
}
