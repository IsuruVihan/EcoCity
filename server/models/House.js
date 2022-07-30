module.exports = (sequelize, DataTypes) => {
  return sequelize.define("House", {
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
    addressline1: {
      type: DataTypes.STRING,
    },
    addressline2: {
      type: DataTypes.STRING,
    },
    addressline3: {
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
      allowNull: true
    },
  }, {timestamps: false});
}
