const db = require('../models/index');
const {House, Bin} = db;
const sequelize = require('sequelize');

exports.getAllWeights = async (req, res) => {
    const {email} = req.params;
    Bin.findAll({
        attributes: [
            "bintype",
            [sequelize.fn("SUM", sequelize.col("garbageweight")), "garbageweight"],
        ],
        group: "bintype",
    })
        .then((result) => {
            return res.status(200).json({
                weights: result,
            });
        });
}
