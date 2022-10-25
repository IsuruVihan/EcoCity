const db = require('../models/index');
const bcrypt = require("bcrypt");
const {isRecordExists} = require("./common");
const {NFCTag, Bin, GarbageHub} = db;
const {Op} = require("sequelize");
const sequelize = require("sequelize");

exports.openLid = async (req, res) => {
    const {id, serial} = req.body;
    NFCTag.findAll({where: {id: id}, attributes: ['serialnumber']})
        .then(async (result) => {
            if (result.length === 0)
                return res.status(401).json({
                    data: "Invalid NFC"
                });
            if (await bcrypt.compare(serial, result[0].serialnumber)) {
                return res.status(200).json({
                    data: "Success"
                });
            } else {
                return res.status(401).json({
                    data: "Invalid NFC"
                });
            }
        });
}

exports.dumpGarbage = async (req, res) => {
    const {nfcId, hubId, binType, addingGarbageWeight, newGarbageWeight, newGarbageLevel} = req.body;

    Bin.update({garbageweight: newGarbageWeight, garbagelevel: newGarbageLevel}, {
        where: {GarbageHubId: hubId, bintype: binType}
    })
        .then(() => {
            return res.status(200).json({
                data: "Success",
            });
        });
}

//get all hub details
exports.getAllHubs = async (req, res) => {
    GarbageHub.findAll({
        include: [{
            model: Bin,
            attributes: {exclude: ['GarbageHubId']}
        }],
        where: {
            status: {[Op.ne]: "Removed"},
        }

    }).then((hubs) => {
        return res.status(200).json({
            hubs,
        });
    });
}

//get hub details
exports.getHub = async (req, res) => {
    const {id} = req.body.data;

    Bin.findAll({
            attributes: [
                "bintype",
                [sequelize.fn("SUM", sequelize.col("garbageweight")), "garbageweight"],
            ],
            group: ['bintype'],
            where: {
                "GarbageHubId": id
            }
        }
    ).then((hubs) => {
        return res.status(200).json({
            hubs,
        });
    });
    // GarbageHub.findAll({
    //         include: [{
    //             model:Bin,
    //             attributes: [
    //                 "bintype",
    //                 [sequelize.fn("SUM", sequelize.col("garbageweight")), "garbageweight"],
    //             ],
    //             group: ['bintype'],
    //         }],
    //         where: {
    //
    //         },
    //     }
    // ).then((hubs) => {
    //     return res.status(200).json({
    //         hubs,
    //     });
    // });
}

//update hub details
exports.updateHub = async (req, res) => {
    //check if exists
    const {id, lat, lon} = req.body.data;
    const isExists = await isRecordExists(GarbageHub, id);
    if (!isExists) {
        return res.status(400).json({
            status: "FAILED",
            message: "Hub Doesnt exists!!",
        })
    }
    GarbageHub.update({latitude: lat, longitude: lon}, {
        where: {
            id: id
        }
    }).then((hub) => {
        return res.status(200).json({
            status: "Hub Updated successfully",
            hub,
        });
    }).catch((err) => {
        return res.status(400).json({
            status: "failed",
            err
        })
    });
}

//Remove hub details
exports.removeHub = async (req, res) => {
    //check if exists
    const {id} = req.body.data;

    const isExists = await isRecordExists(GarbageHub, id);
    if (!isExists) {
        return res.status(400).json({
            status: "FAILED",
            message: "Hub Doesnt exists!!",
        })
    }

    GarbageHub.update({status: "Removed"}, {
        where: {
            id: id
        }
    }).then((hub) => {
        return res.status(200).json({
            status: "Hub Deleted successfully",
            hub,
        });
    }).catch((err) => {
        return res.status(400).json({
            status: "Failed",
            err
        })
    });
}
