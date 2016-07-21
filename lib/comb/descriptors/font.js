import {
  variable as generateVar,
  fontface as generateFontface
} from '../../helpers/preprocessor';

function generateFontClass({ name, style }) {
  return `
.font-${style} {
  font-family: "${name}", sans-serif;
}
`
}

export default function generateFont(descriptor, { symbol }) {
  return descriptor.groups.map((group) => {
    return group.map((groupItem) => {
      return ''.concat(
        generateFontface({
          name: groupItem.name,
          path: groupItem.path,
          filename: groupItem.filename,
          symbol
        }),
        generateFontClass({
          name: groupItem.name,
          style: groupItem.style
        })
      );
    }).join('\n\n');
  }).join('\n\n');
}
