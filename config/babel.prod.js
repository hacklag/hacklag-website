module.exports = {
  // Don't try to find .babelrc because we want to force this configuration.
  babelrc: false,
  presets: [
    // Latest stable ECMAScript features
    require.resolve('babel-preset-latest'),
    // JSX, Flow
    require.resolve('babel-preset-react'),
  ],
  plugins: [
    require.resolve('babel-plugin-transform-react-remove-prop-types'),
    // @decorator class MyClass {}
    require.resolve('babel-plugin-transform-decorators-legacy'),
    // export Module from './Module'
    require.resolve('babel-plugin-transform-export-extensions'),
    // class { handleClick = () => { } }
    require.resolve('babel-plugin-transform-class-properties'),
    // { ...todo, completed: true }
    require.resolve('babel-plugin-transform-object-rest-spread'),
    // Optimization: hoist JSX that never changes out of render()
    require.resolve('babel-plugin-transform-react-constant-elements'),
  ],
};
