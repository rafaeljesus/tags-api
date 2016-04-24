'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findFiles = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var findFiles = exports.findFiles = function () {
  var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var files;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return listDataDir();

          case 2:
            files = _context.sent;
            _context.next = 5;
            return _promise2.default.all(files.map(function (file) {
              return readFile(file);
            }));

          case 5:
            return _context.abrupt('return', _context.sent);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return function findFiles() {
    return ref.apply(this, arguments);
  };
}();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataPath = _path2.default.join(__dirname, '../data');

function listDataDir() {
  return new _promise2.default(function (resolve, reject) {
    _fs2.default.readdir(dataPath, function (err, res) {
      if (err) return reject(err);
      resolve(res);
    });
  });
}

function readFile(file) {
  return new _promise2.default(function (resolve, reject) {
    _fs2.default.readFile(dataPath + '/' + file, 'utf8', function (err, json) {
      if (err) return reject(err);
      var obj = parseJSON(json, _path2.default);
      resolve(obj);
    });
  });
}

function parseJSON(json, path) {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.error('file ' + path + ' ignored');
    return {};
  }
}