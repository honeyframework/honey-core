import { variable as generateVar } from '../../helpers/preprocessor';

export default function generatePalette(descriptor, { symbol }) {
  return descriptor.groups.map((group) => {
    return group.map((groupItem) => {
      return generateVar({
        name: groupItem.name,
        value: groupItem.value,
        symbol
      });
    }).join('\n\n');
  }).join('\n\n');
}
