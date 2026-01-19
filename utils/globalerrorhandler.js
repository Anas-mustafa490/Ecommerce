const { apiResponse } = require("./ApiResponce");
exports.globalErrorHandler = (err, req, res, next) => {
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    apiResponse(res, 404, `${field} already in use`);
  }
  if (err.name === "ValidationError") {
    let errors = {};
    Object.keys(err.errors).forEach((key) => {
      errors[key] = err.errors[key].message;
    });
    apiResponse(res, 404, errors);
  }
  return apiResponse(res, 500, err.message || "Something went wrong");
};
