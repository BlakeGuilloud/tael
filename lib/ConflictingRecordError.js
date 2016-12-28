'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConflictingRecordError = function ConflictingRecordError(err) {
  (0, _classCallCheck3.default)(this, ConflictingRecordError);

  this.statusCode = 409;
  this.message = err || 'Conflict';
  this.stack = new Error().stack;
};

ConflictingRecordError.prototype = (0, _create2.default)(Error.prototype);
ConflictingRecordError.prototype.constructor = ConflictingRecordError;

module.exports = ConflictingRecordError;