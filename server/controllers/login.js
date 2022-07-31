const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models/index');
const {House, Driver, MaintenanceCrew, Admin} = db;

const manageTokens = async (req, result, res) => {
  if (await bcrypt.compare(req.body.password, result[0].password)) {
    const accessToken = jwt.sign(
      {aud: req.body.email, iss: 'EcoCity'},
      process.env.JWT_ACCESS_TOKEN_SECRET,
      {expiresIn: '1m'}
    );
    const refreshToken = jwt.sign(
      {aud: req.body.email, iss: 'EcoCity'},
      process.env.JWT_REFRESH_TOKEN_SECRET,
      {expiresIn: '1y'}
    );
    res.status(200).json({
      message: 'Logged in successfully.',
      email: req.body.email,
      accessToken: accessToken,
      refreshToken: refreshToken
    });
  } else {
    res.status(400).json({
      message: 'Incorrect username or password.'
    });
    console.log("> LOGIN ERROR (INCORRECT PASSWORD)");
  }
}

exports.logUser = (req, res) => {
  console.log("CONTROLLER: ", req.body.type, req.body.email, req.body.password);
  switch (req.body.type) {
    case "citizen":
      House.findAll({
        attributes: ['password'],
        where: {email: req.body.email}
      })
        .then(async (result) => {
          await manageTokens(req, result, res);
        })
        .catch((error) => {
          res.status(400).json({
            message: 'User not registered. Please contact admin.',
          });
          console.log("> LOGIN ERROR (USER DOESN'T EXIST): ", error);
        });
      break;
    case "driver":
      Driver.findAll({
        attributes: ['password'],
        where: {email: req.body.email}
      })
        .then(async (result) => {
          await manageTokens(req, result, res);
        })
        .catch((error) => {
          res.status(400).json({
            message: 'User not registered. Please contact admin.',
          });
          console.log("> LOGIN ERROR (USER DOESN'T EXIST): ", error);
        });
      break;
    case "maintenance":
      MaintenanceCrew.findAll({
        attributes: ['password'],
        where: {email: req.body.email}
      })
        .then(async (result) => {
          await manageTokens(req, result, res);
        })
        .catch((error) => {
          res.status(400).json({
            message: 'User not registered. Please contact admin.',
          });
          console.log("> LOGIN ERROR (USER DOESN'T EXIST): ", error);
        });
      break;
    case "admin":
      Admin.findAll({
        attributes: ['password'],
        where: {email: req.body.email}
      })
        .then(async (result) => {
          await manageTokens(req, result, res);
        })
        .catch((error) => {
          res.status(400).json({
            message: 'User not registered. Please contact admin.',
          });
          console.log("> LOGIN ERROR (USER DOESN'T EXIST): ", error);
        });
      break;
  }
}

exports.currentLoggedInUser = (req, res) => {
  const {accesstoken, refreshtoken} = req.headers;
  if (!accesstoken || !refreshtoken) {
    return res.status(400).json({
      email: null,
      newAccessToken: null,
      newRefreshToken: null
    });
  } else {
    jwt.verify(accesstoken, process.env.JWT_ACCESS_TOKEN_SECRET, (error, decode) => {
      if (error) {
        jwt.verify(refreshtoken, process.env.JWT_REFRESH_TOKEN_SECRET, (error2, decode2) => {
          if (error2) {
            return res.status(200).json({
              email: null,
              newAccessToken: null,
              newRefreshToken: null
            });
          } else {
            const newAccessToken = jwt.sign(
              {aud: decode2.aud, iss: 'EcoCity'},
              process.env.JWT_ACCESS_TOKEN_SECRET,
              {expiresIn: '1m'}
            );
            const newRefreshToken = jwt.sign(
              {aud: decode2.aud, iss: 'EcoCity'},
              process.env.JWT_REFRESH_TOKEN_SECRET,
              {expiresIn: '1y'}
            );
            return res.status(200).json({
              email: decode2.aud,
              newAccessToken: newAccessToken,
              newRefreshToken: newRefreshToken
            });
          }
        });
      } else {
        return res.status(200).json({
          email: decode.aud,
          newAccessToken: null,
          newRefreshToken: null
        });
      }
    });
  }
}
