function sendSuccess(res) {
  return (data) => {
    res.status(200).json(data.data || data);
  };
}

module.exports = sendSuccess;
