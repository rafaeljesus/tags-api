"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = traverseJSON;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [traverseJSON].map(_regenerator2.default.mark);

function traverseJSON(json) {
  var i, val;
  return _regenerator2.default.wrap(function traverseJSON$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < json.length)) {
            _context.next = 11;
            break;
          }

          val = json[i];

          if (!val.tags) {
            _context.next = 6;
            break;
          }

          _context.next = 6;
          return val.tags;

        case 6:
          if (!val.children) {
            _context.next = 8;
            break;
          }

          return _context.delegateYield(traverseJSON(val.children), "t0", 8);

        case 8:
          i++;
          _context.next = 1;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}