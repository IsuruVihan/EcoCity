// const db = require('../models/index');
// const ItemGroup = db.ItemGroup;

// exports.getQuantity = async (req, res) => {
//   ItemGroup.findAll({
//     attributes: ['availableQuantity'],
//     where: {
//       id: req.params.id
//     }
//   })
//     .then((results) => {
//       res.status(200).json({
//         quantity: results
//       });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         message: `Unable to retrieve item quantity. (Id: ${req.params.id})`
//       });
//       console.log('> RETRIEVE ITEM QUANTITY ERROR: ', error);
//     });
// }