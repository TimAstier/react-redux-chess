// From https://gist.github.com/jslatts/1c5d4d46b6e5b0ac0e917fa3b6f7968f
const bindSelectors = (slicer: (any) => any, selectors: *) => {
  const keys = Object.keys(selectors);
  const boundMethods = {};

  keys.forEach(k => {
    boundMethods[k] = fullState => selectors[k](slicer(fullState));
  });

  return boundMethods;
};

export default bindSelectors;
