const db = require('../models/index');
const {House, Bin, Driver, MaintenanceCrew, GarbageHub,} = db;
const sequelize = require('sequelize');

exports.getAllWeights = async (req, res) => {
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

exports.getAllUserCount = async (req, res) => {
    console.log()
    const driver = await Driver.count();
    const maintenance = await MaintenanceCrew.count();
    const hubs = await GarbageHub.count();
    const house = await House.count();

    return res.status(200).json({
        driver: driver,
        maintenance: maintenance,
        hubs: hubs,
        house: house
    });

}
