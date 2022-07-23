module.exports = (sequelize, DataTypes) => {
  return sequelize.define("NFCTag", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    currentusertype: {
      type: DataTypes.ENUM,
      values: [
        'House', 'Driver', 'Maintenance'
      ],
    },
    serialnumber: {
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
