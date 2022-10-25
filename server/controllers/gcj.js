const db = require('../models/index');
const bcrypt = require("bcrypt");
const {isRecordExists} = require("./common");
const {NFCTag, Bin, GarbageHub, Truck, Driver, GarbageCollectingJob, GCJRoute} = db;
const {Op, Sequelize} = require("sequelize");
const sequelize = require("sequelize");

//get hub details
exports.getInitialDetails = async (req, res) => {
    const hubs = await GarbageHub.findAll({
            attributes: ['id'],
            include: [{
                model: Bin,
                attributes: ['id', 'bintype']
            }]
        }
    )
    const trucks = await Truck.findAll({
        attributes: ['id', 'numberplate'],
        where: {
            status: 'Active'
        }
    })
    const drivers = await Driver.findAll({
        attributes: ['id',
            [sequelize.fn('concat', sequelize.col('firstname'), sequelize.col('lastname')), 'name']
        ],
        where: {
            status: 'Active'
        }
    })
    return res.status(200).json({
        hubs: hubs,
        trucks: trucks,
        drivers: drivers
    });
    // .then((hubs) => {
    //     return res.status(200).json({
    //         hubs,
    //     });
    // });
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
exports.createCollectionJob = async (req, res) => {
    //check if exists
    const {hubs, driver, truck, date, binType} = req.body.cj;
    const timeNow = new Date().toLocaleTimeString('en-GB');

    //write to gcjJobs table
    const gcj = await GarbageCollectingJob.create({
        date: date,
        time: timeNow,
        bintype: binType,
        status: 'Not started',
        'DriverId': driver,
        'TruckId': truck
    })
    const records = hubs.map((hub, index) => {
        return {
            order: index + 1,
            collected: false,
            'GarbageCollectingJobId': gcj.id,
            'GarbageHubId': hub
        }
    })
    const gcjRoute = await GCJRoute.bulkCreate(records);
    return res.status(200).json({
        status: 'SUCCESS',
        message: 'Job Created Succesfully'
    });
}

// //Remove hub details
// exports.removeHub = async (req, res) => {
//     //check if exists
//     const {id} = req.body.data;
//
//     const isExists = await isRecordExists(GarbageHub, id);
//     if (!isExists) {
//         return res.status(400).json({
//             status: "FAILED",
//             message: "Hub Doesnt exists!!",
//         })
//     }
//
//     GarbageHub.update({status: "Removed"}, {
//         where: {
//             id: id
//         }
//     }).then((hub) => {
//         return res.status(200).json({
//             status: "Hub Deleted successfully",
//             hub,
//         });
//     }).catch((err) => {
//         return res.status(400).json({
//             status: "Failed",
//             err
//         })
//     });
// }
