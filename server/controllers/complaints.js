const db = require('../models/index');
const {Complaint, ComplaintMedia} = db;

exports.submitComplaint = async (req, res) => {
  const {category, description, files, id, HouseId} = req.body;
  if ((category === 'Garbage hub' || category === 'NFC tags') && id === '')
    return res.status(406).json({
      error: 'Please insert Garbage hub / NFC tag ID',
    });
  Complaint.create({
    hubornfcid: (category === 'Garbage hub' || category === 'NFC tags') ? id : null,
    category: category,
    status: 'Not Viewed',
    description: description,
    HouseId: HouseId,
  })
    .then((complaint) => {
      if (files.uri) {
        // TODO: Upload file to the google cloud
        // TODO: Save the record inside 'ComplaintsMedia' table
      }
      return res.status(200).json({
        complaint: complaint,
      });
    });
}

exports.getComplaintsByUserId = async (req, res) => {
  const {id} = req.params;
  Complaint.findAll({where: {HouseId: id}})
    .then((complaints) => {
      return res.status(200).json({
        complaints: complaints,
      });
    });
}

exports.removeComplaint = async (req, res) => {
  const {id} = req.body;
  Complaint.update({status: "Removed"}, {
    where: {
      id: id
    }
  })
    .then((complaint) => {
      return res.status(200).json({
        complaint: complaint,
      });
    })
    .catch((err) => {
      console.log("REMOVE COMPLAINT ERROR: ", err);
      return res.status(400).json({
        error: err,
      });
    });
}
