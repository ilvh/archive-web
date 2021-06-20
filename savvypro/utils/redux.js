export function createRedux({ namespace, action, reducer }) {
  const ACTION = `${namespace}::${action}`;

  return ACTION;
}
