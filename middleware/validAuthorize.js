const { apiResponse } = require("../utils/apiResponse");

exports.validAuthorize = (req, res, next) => {
    
   
    if(req.session.user?.login){
      next()
    }else{
    apiResponse(res, 401, "Access denied. Please login first.")
    }
};