export default function parse(descriptorsArray) {
  let description = {},
      descriptorValues = {};
  for (var descriptor of descriptorsArray) {
    if (!description[descriptor.type]) {
      description[descriptor.type] = { groups: [] };
    }
    if (Array.isArray(descriptor.values)) {
      descriptorValues = descriptor.values.map((val) => {
        return Object.assign({}, descriptor.global, val);
      });
    } else {
      descriptorValues = Object.keys(descriptor.values).map((key, i) => {
        return Object.assign({}, descriptor.global, {
          name: key,
          value: descriptor.values[key]
        });
      });
    }
    description[descriptor.type].groups.push(descriptorValues);
  }
  return description;
}
