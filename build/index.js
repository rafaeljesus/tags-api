'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _micro = require('micro');

var _micro2 = _interopRequireDefault(_micro);

var _tags = require('./lib/tags');

var _files = require('./lib/files');

var _wrapper = require('./lib/wrapper');

var _transform = require('./lib/transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var srv = (0, _micro2.default)((0, _wrapper.wrapReply)((0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var _ref, _ref2, tags, files;

  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _promise2.default.all([(0, _tags.findTags)(), (0, _files.findFiles)()]);

        case 2:
          _ref = _context.sent;
          _ref2 = (0, _slicedToArray3.default)(_ref, 2);
          tags = _ref2[0];
          files = _ref2[1];
          return _context.abrupt('return', (0, _transform2.default)(tags, files));

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}))));

srv.listen(3000);