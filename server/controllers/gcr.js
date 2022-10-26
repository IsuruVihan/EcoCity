// const { Op } = require("sequelize");
const db = require('../models/index');
const {GarbageHub, Bin, GarbageCollectingJob, Driver, GCJRoute, Truck} = db;

exports.getGCRJobDetails = async (req, res) => {
  console.log('HELLO');
  const {email} = req.headers;
  let jobs = [];
  Driver.findAll({where: {email: email}, attributes: ['id']})
    .then((data) => {
      // console.log(data[0].id);
      GarbageCollectingJob.findAll({where: {DriverId: data[0].id}, include: Truck})
        .then((d) => {
          let tempGCJ = {
            id: d[0].id, date: d[0].date, time: d[0].time, bintype: d[0].bintype, status: d[0].status, truck: d[0].Truck, hubs: [],
          };
          // console.log("id: ", d[0].id);
          // console.log("date: ", d[0].date);
          // console.log("time: ", d[0].time);
          // console.log("bintype: ", d[0].bintype);
          // console.log("status: ", d[0].status);
          // console.log("Truck: ", d[0].Truck);

          // GCJRoute.findAll({where: {GarbageCollectingJobId: d[0].id}, include: GarbageHub})
          //   .then((f) => {
          //     console.log(f[0]);
          //   });
        });
    });
}
