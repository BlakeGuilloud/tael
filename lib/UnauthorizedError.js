'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnauthorizedError = function UnauthorizedError(err) {
  (0, _classCallCheck3.default)(this, UnauthorizedError);

  this.statusCode = 401;
  this.message = err || 'Unauthorized';
  this.stack = new Error().stack;
};

UnauthorizedError.prototype = (0, _create2.default)(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

module.exports = UnauthorizedError;