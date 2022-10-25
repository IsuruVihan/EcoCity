const { Op } = require("sequelize");
const db = require('../models/index');
const {GarbageHub, Bin, GarbageCollectingJob, Driver, GCJRoute} = db;

exports.getGarbageHubDetails = async (req, res) => {
  const {email} = req.headers;
  let tempHubs = [];
  GarbageHub.findAll({include: Bin})
    .then((hubs) => {
      hubs.map((hub) => {
        tempHubs.push({...hub, assigned: false,});
      });
      Driver.findAll({where: {email: email}, attributes: ['id']})
        .then((driverId) => {
          GarbageCollectingJob.findAll({
            where: {
              DriverId: driverId[0].id,
              [Op.or]: [
                { status: 'Not started' },
                { status: 'Ongoing' },
              ],
            }, attributes: ['id']
          })
            .then((garbageCollectingJobs) => {
              if (garbageCollectingJobs.length === 0) {
                return res.status(200).json({
                  hubs: tempHubs
                });
              } else {
                let gcjIDs = [];
                garbageCollectingJobs.map((gcj) => {
                  gcjIDs.push(gcj.id);
                });
                GCJRoute.findAll({where: {GarbageCollectingJobId: gcjIDs}, attributes: ['GarbageHubId']})
                  .then((results) => {
                    let temp = results;
                    let gcjHubIDs = [];
                    temp.map((t) => {
                      gcjHubIDs.push(t.GarbageHubId);
                    });

                    let uniqueGCJHubIDs = [...new Set(gcjHubIDs)];
                    tempHubs.map((th) => {
                      if (uniqueGCJHubIDs.includes(th.dataValues.id)) {
                        th.assigned = true;
                      }
                    });
                    let hubsToBeSent = [];
                    tempHubs.map((th) => {
                      let obj = {
                        id: th.dataValues.id,
                        latitude: th.dataValues.latitude,
                        longitude: th.dataValues.longitude,
                        status: th.dataValues.status,
                        assigned: th.assigned,
                        Bins: [],
                      };
                      th.dataValues.Bins.map((bin) => {
                        obj.Bins.push({
                          id: bin.dataValues.id,
                          bintype: bin.dataValues.bintype,
                          garbagelevel: bin.dataValues.garbagelevel,
                          garbageweight: bin.dataValues.garbageweight,
                          temperature: bin.dataValues.temperature,
                          methane: bin.dataValues.methane,
                        });
                      });
                      hubsToBeSent.push(obj);
                    });
                    // console.log("hubsToBeSent: ", hubsToBeSent);
                    return res.status(200).json({
                      data: hubsToBeSent
                    });
                  });
              }
            });
        });
    });
}
