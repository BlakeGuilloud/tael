function sendError(res) {
  return (error) => {

    if (!error.statusCode) {
      res.status(500).json({ code: 500, message: error.message });
    } else {
      res.status(error.statusCode).json({ code: error.statusCode, message: error.message });
    }
  };
}

module.exports = sendError;
