'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BadRequestError(err) {
  this.statusCode = 400;
  this.message = err || 'Bad request';
  this.stack = new Error().stack;
}

BadRequestError.prototype = (0, _create2.default)(Error.prototype);
BadRequestError.prototype.constructor = BadRequestError;

module.exports = BadRequestError;