'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ConflictingRecordError(err) {
  this.statusCode = 409;
  this.message = err || 'Conflict';
  this.stack = new Error().stack;
}

ConflictingRecordError.prototype = (0, _create2.default)(Error.prototype);
ConflictingRecordError.prototype.constructor = ConflictingRecordError;

module.exports = ConflictingRecordError;