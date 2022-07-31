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
db.Truck = require('./Truck')(sequelize, DataTypes);
db.Usage = require('./Usage')(sequelize, DataTypes);

/* Relations */

// Complaints
db.House.hasMany(db.Complaint);
db.Complaint.belongsTo(db.House);

// ComplaintMedias
db.Complaint.hasMany(db.ComplaintMedia);
db.ComplaintMedia.belongsTo(db.Complaint);

// Usages
db.NFCTag.hasMany(db.Usage);
db.Usage.belongsTo(db.NFCTag);
db.House.hasMany(db.Usage);
db.Usage.belongsTo(db.House);
db.Driver.hasMany(db.Usage);
db.Usage.belongsTo(db.Driver);
db.MaintenanceCrew.hasMany(db.Usage);
db.Usage.belongsTo(db.MaintenanceCrew);

// GarbageCollectingJobs
db.Driver.hasMany(db.GarbageCollectingJob);
db.GarbageCollectingJob.belongsTo(db.Driver);
db.Truck.hasMany(db.GarbageCollectingJob);
db.GarbageCollectingJob.belongsTo(db.Truck);

// NFCTags
db.House.hasMany(db.NFCTag);
db.NFCTag.belongsTo(db.House);
db.Driver.hasMany(db.NFCTag);
db.NFCTag.belongsTo(db.Driver);
db.MaintenanceCrew.hasMany(db.NFCTag);
db.NFCTag.belongsTo(db.MaintenanceCrew);

// GCJRoutes
db.GarbageCollectingJob.hasMany(db.GCJRoute);
db.GCJRoute.belongsTo(db.GarbageCollectingJob);
db.GarbageHub.hasMany(db.GCJRoute);
db.GCJRoute.belongsTo(db.GarbageHub);

// MaintenanceJobs
db.MaintenanceCrew.hasMany(db.MaintenanceJob);
db.MaintenanceJob.belongsTo(db.MaintenanceCrew);

// MJRoutes
db.MaintenanceJob.hasMany(db.MJRoute);
db.MJRoute.belongsTo(db.MaintenanceJob);
db.GarbageHub.hasMany(db.MJRoute);
db.MJRoute.belongsTo(db.GarbageHub);

// Bins
db.GarbageHub.hasMany(db.Bin);
db.Bin.belongsTo(db.GarbageHub);

// Sync
db.sequelize.sync()
  .then(() => {
    console.log("> DATABASE SYNCED");
  })
  .catch((error) => {
    console.log("> DATABASE SYNC ERROR: ", error);
  });

module.exports = db;
