const db = require('../models/index');
const bcrypt = require("bcrypt");
const {isRecordExists} = require("./common");
const {Bin, GarbageHub, Truck, Driver, GarbageCollectingJob, GCJRoute, MaintenanceCrew, Complaint} = db;
const {Op, Sequelize} = require("sequelize");
const sequelize = require("sequelize");

//get initial details
exports.getInitialDetails = async (req, res) => {
    const complaints = await Complaint.findAll({
            attributes: ['id', 'description','hubornfcid'],
            where: {
                category: 'Garbage hub'
            }
        }
    )

    // const hubIdList = complaints.map((c)=>{
    //     return c.hubornfcid;
    // })

    // const hubDetails = GarbageHub.findAll({
    //     attributes:['id','bintype'],
    //     where:{
    //         id:hubIdList
    //     }
    // })

    const crew = await MaintenanceCrew.findAll({
        attributes: ['id',
            [sequelize.fn('concat', sequelize.col('firstname'), sequelize.col('lastname')), 'name']
        ],
        where: {
            status: 'Active'
        }
    })
    return res.status(200).json({
        complaints: complaints,
        crew: crew,
    });
}

//getAll jobs
exports.getAllGCJ = async (req, res) => {
    const allGCjs = await GarbageCollectingJob.findAll({
        include: [{
            model: Driver,
        }, {
            model: Truck
        }]
    });
    return res.status(200).json({
        'gcjs': allGCjs
    });
}

//create collection job
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
