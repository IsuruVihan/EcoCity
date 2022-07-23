module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Driver", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING(1000),
    },
    longitude: {
      type: DataTypes.STRING(1000),
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'Active', 'Inactive', 'Removed'
      ],
    },
  }, {timestamps: false});
}
