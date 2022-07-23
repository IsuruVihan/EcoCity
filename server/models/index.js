const {Sequelize, DataTypes} = require('sequelize');

// Config
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

// Authenticate
sequelize.authenticate()
  .then(() => {
    console.log("> DATABASE AUTHENTICATED");
  })
  .catch((error) => {
    console.log("> DATABASE AUTHENTICATION ERROR: ", error);
  });

const db = {};

// Tables
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Admin = require('./Admin')(sequelize, DataTypes);
db.Bin = require('./Bin')(sequelize, DataTypes);
db.Complaint = require('./Complaint')(sequelize, DataTypes);
db.ComplaintMedia = require('./ComplaintMedia')(sequelize, DataTypes);
db.Driver = require('./Driver')(sequelize, DataTypes);
db.GarbageCollectingJob = require('./GarbageCollectingJob')(sequelize, DataTypes);
db.GarbageHub = require('./GarbageHub')(sequelize, DataTypes);
db.GCJRoute = require('./GCJRoute')(sequelize, DataTypes);
db.House = require('./House')(sequelize, DataTypes);
db.MaintenanceCrew = require('./MaintenanceCrew')(sequelize, DataTypes);
db.MaintenanceJob = require('./MaintenanceJob')(sequelize, DataTypes);
db.MJRoute = require('./MJRoute')(sequelize, DataTypes);
db.NFCTag = require('./NFCTag')(sequelize, DataTypes);
db.Truck = require('./Usage')(sequelize, DataTypes);

/* Relations */

// db.Player.hasMany(db.BorrowRecord);
// db.BorrowRecord.belongsTo(db.Player);

// db.BorrowRecord.hasMany(db.BorrowedItemGroup);
// db.BorrowedItemGroup.belongsTo(db.BorrowRecord);

// db.BorrowedItemGroup.belongsTo(db.ItemGroup);

// db.Tournament.hasMany(db.TeamPlayer);
// db.TeamPlayer.belongsTo(db.Tournament);

// db.TeamPlayer.belongsTo(db.Player);

// db.PracticeParticipant.belongsTo(db.Player);

// db.PracticeSession.hasMany(db.PracticeParticipant);

// Sync
db.sequelize.sync()
  .then(() => {
    console.log("> DATABASE SYNCED");
  })
  .catch((error) => {
    console.log("> DATABASE SYNC ERROR: ", error);
  });

module.exports = db;
