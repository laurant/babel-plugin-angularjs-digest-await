const pluginTester = require('babel-plugin-tester');
const plugin = require('./index.js').default;
const path = require('path');

pluginTester({
  plugin,
  fixtures: path.join(__dirname, 'tests', 'fixtures'),
  pluginName: 'angularjs-digest-await'
});