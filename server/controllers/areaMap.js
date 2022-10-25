const db = require('../models/index');
const {GarbageHub, Bin} = db;

exports.getGarbageHubDetails = async (req, res) => {
  GarbageHub.findAll({include: Bin})
    .then((hubs) => {
      return res.status(200).json({
        hubs: hubs,
      });
    });
}
