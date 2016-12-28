"use strict";

function sendSuccess(res) {
  return function (data) {
    res.status(200).json(data.data || data);
  };
}

module.exports = sendSuccess;