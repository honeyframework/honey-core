import {
  variable as generateVar,
  cssBlock as genereteCSSBlock
} from '../../helpers/preprocessor';

const SPEC = {
  'fore': 'color',
  'back': 'background-color'
};

export default function generateColorMap(descriptor, { symbol }) {
  return descriptor.groups.map((group) => {
    return group.map((groupItem) => {
      return ''.concat(

        generateVar({
          name: groupItem.name,
          value: groupItem.value,
          isAliased: groupItem.isAliased,
          symbol
        }),'\n',

        genereteCSSBlock({
          name: groupItem.name,
          props: [{ prop: SPEC[groupItem.is], val: groupItem.value}],
          isAliased: groupItem.isAliased,
          type: 'class',
          symbol
        })
      );
    }).join('\n\n');
  }).join('\n\n');
}
