const BLOCK_TYPES = {
  'class': '.',
  'element': ''
}

export default function cssBlock({ name, props, isAliased, symbol, type }) {

  const blockType = BLOCK_TYPES[type];
  const prefixIfAny = (isAliased) ? symbol : '';

  const stringifiedProps = props.map((prop) => {
    if (prop.prop === '@extend') {
      return ` ${prop.prop} ${prefixIfAny}${prop.val};`;
    } else {
      return ` ${prop.prop}: ${prefixIfAny}${prop.val};`;
    }
  }).join('\n');

  return `
${blockType}${name} {
${stringifiedProps}
}
  `
}
