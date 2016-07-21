export default function variable({ name, value, isAliased, symbol }) {
  const prefixIfAny = (isAliased) ? symbol : '';
  return `${symbol}${name} = ${prefixIfAny}${value};`;
}
