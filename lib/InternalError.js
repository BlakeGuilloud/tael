'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

exports.InternalError = InternalError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InternalError(err) {
  this.statusCode = 500;
  this.message = err || 'Internal server error';
  this.stack = new Error().stack;
}

InternalError.prototype = (0, _create2.default)(Error.prototype);
InternalError.prototype.constructor = InternalError;

module.exports = InternalError;