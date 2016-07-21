export default function fontface({ name, path, filename, symbol }) {
  return`
@font-face {
  font-family: '${name}';
  src: url('assets/fonts/${filename}.eot');
  src: url('assets/fonts/${filename}.eot?#iefix') format('embedded-opentype'),
       url('assets/fonts/${filename}.woff') format('woff'),
       url('assets/fonts/${filename}.ttf') format('truetype'),
       url('assets/fonts/${filename}.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}
`;
}
