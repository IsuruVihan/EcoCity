module.exports = (sequelize, DataTypes) => {
  return sequelize.define("MaintenanceCrew", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING(1000),
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    nic: {
      type: DataTypes.STRING,
    },
    latitude: {
      type: DataTypes.STRING,
    },
    longitude: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'Active', 'Inactive', 'Removed'
      ],
    },
  }, {timestamps: false});
}
