'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.findTags = findTags;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tagsfile = _path2.default.join(__dirname, '../tags.txt');

function findTags() {
  return new _promise2.default(function (resolve, reject) {
    _fs2.default.readFile(tagsfile, 'utf8', function (err, res) {
      if (err) return reject(err);
      var arr = res.trim().split('\n');
      resolve(arr);
    });
  });
}