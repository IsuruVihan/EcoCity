const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models/index');
const {Complaint, ComplaintMedia} = db;

exports.submitComplaint = async (req, res) => {
  const {category, description, files, id} = req.body;
  console.log("CATEGORY: ", category);
  console.log("DESCRIPTION: ", description);
  console.log("FILE: ", files);
  console.log("ID: ", id);
  return res.json({
    message: 'tahikei',
  });
}
