const jwt = require('jsonwebtoken');

exports.validateToken = async (req, res, next) => {
  const {accesstoken, refreshtoken} = req.headers;

  if (
    typeof accesstoken == 'undefined' || accesstoken === '' || accesstoken == null ||
    typeof refreshtoken == 'undefined' || refreshtoken === '' || refreshtoken == null
  ) {
    return res.status(403).json({
      message: "Please login."
    });
  } else {
    jwt.verify(accesstoken, process.env.JWT_ACCESS_TOKEN_SECRET, (error, decode) => {
      if (error) {
        jwt.verify(refreshtoken, process.env.JWT_REFRESH_TOKEN_SECRET, (error2, decode2) => {
          if (error2) {
            return res.status(403).json({
              message: "Please login."
            });
          } else {
            return next();
          }
        });
      } else {
        return next();
      }
    });
  }
}
