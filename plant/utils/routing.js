const createNode = (path, importComponent) => ({
  path,
  getComponent: (nextState, cb) => {
    importComponent.then(component => cb(null, component.default));
  },
});

export default function configureNodes(basicNodes, advancedNodes = []) {
  return Object
    .keys(basicNodes)
    .reduce((nodes, path) =>
      nodes.concat(createNode(path, basicNodes[path])),
      advancedNodes
    );
}
