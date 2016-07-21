import {
  cssBlock as genereteCSSBlock
} from '../../helpers/preprocessor';

export default function generateTypography(descriptor, { symbol }) {
  return descriptor.groups.map((group) => {
    return group.map((groupItem) => {
      return genereteCSSBlock({
        name: groupItem.element,
        props: [
          //{ prop: '@extend', val: `.font-${groupItem.style}` },
          { prop: 'font-size', val: `${groupItem.size}px` }
        ],
        type: 'element',
        symbol
      });
    }).join('\n\n');
  }).join('\n\n');
}
