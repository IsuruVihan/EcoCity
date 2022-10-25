const db = require('../models/index');
const bcrypt = require("bcrypt");
const {NFCTag, Bin} = db;

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
