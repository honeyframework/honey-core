/**
 * This parser accepts an array of all the descriptor objects defined
 * in the user's repo (according to the descriptor spec).
 *
 * It will go through each one, format and combine to produce
 * the `the style description` (according to the description spec).
 *
 * (explain this better)
 *
 * @param  {[type]} descriptorsArray [description]
 * @return {[type]}                  [description]
 */

export default function parse(descriptorsArray = []) {

  let descriptorValues = {};
  const description = descriptorsArray.reduce(
    (descriptionAccumulator, currentDescriptor) => {

      // If this is the first of a particular type
      // we have come across, then initialise it in the description.

      if (!descriptionAccumulator[currentDescriptor.type]) {
        descriptionAccumulator[currentDescriptor.type] = { groups: [] };
      }

      // Description values can be either lists or pre-defined,
      // requiring different data types for each.

      //  1. `listed` values would be defined as arrays,
      //      and can have n possible values.

      if (Array.isArray(currentDescriptor.values)) {
        descriptorValues = currentDescriptor.values.map((val) => {
          return {
            ...currentDescriptor.global,
            ...val
          }
        });
      }

      //  2. `pre-defined` values are defined as an object,
      //      and have named params; being the pre-definitions.

      else {
        descriptorValues = Object.keys(currentDescriptor.values).map((key, i) => {
          return {
            ...currentDescriptor.global,
            ...{
              name: key,
              value: currentDescriptor.values[key]
            }
          }
        });
      }

      // I know ...
      descriptionAccumulator[currentDescriptor.type].groups.push(descriptorValues);
      return descriptionAccumulator;
    },
    {}
  );

  return description;
}
