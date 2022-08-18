const db = require('../models/index');
const {House} = db;

exports.getHouseByEmail = async (req, res) => {
  const {email} = req.params;
  House.findAll({where: {email: email}, attributes: ['id']})
    .then((result) => {
      return res.status(200).json({
        id: result,
      });
    });
}
