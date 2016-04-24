'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.wrapGen = wrapGen;
exports.wrapReply = wrapReply;

var _micro = require('micro');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapGen(it) {
  var arr = [];
  var res = it.next();

  while (!res.done) {
    arr = arr.concat(res.value);
    res = it.next();
  }

  return arr;
}

function wrapReply(fn) {
  var _this = this;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res) {
      var body;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fn.apply(_this, args);

            case 3:
              body = _context.sent;

              (0, _micro.send)(res, 200, body);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              (0, _micro.sendError)(req, res, _context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }();
}