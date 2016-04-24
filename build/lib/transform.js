'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = function (tags, jsonfiles) {
  var values = (0, _wrapper.wrapGen)((0, _traverseJSON2.default)(jsonfiles));

  values.map(function (val) {
    valMap[val] = valMap[val] ? valMap[val] + 1 : 1;
  });

  tags.map(function (tag) {
    tagMap[tag] = valMap[tag] ? valMap[tag] : 0;
  });

  return (0, _keys2.default)(tagMap).sort(function (a, b) {
    return tagMap[a] - tagMap[b];
  }).reverse().map(function (key) {
    return { name: key, total: tagMap[key] };
  });
};

var _traverseJSON = require('./traverseJSON');

var _traverseJSON2 = _interopRequireDefault(_traverseJSON);

var _wrapper = require('./wrapper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var valMap = {};
var tagMap = {};