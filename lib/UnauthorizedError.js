'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UnauthorizedError(err) {
  this.statusCode = 401;
  this.message = err || 'Unauthorized';
  this.stack = new Error().stack;
}

UnauthorizedError.prototype = (0, _create2.default)(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

module.exports = UnauthorizedError;