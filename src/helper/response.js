module.exports = (status = false, message, data = {}, options = {}) => {
  return {
    status: status,
    message: message,
    data: data,
    options: options
  }
}
