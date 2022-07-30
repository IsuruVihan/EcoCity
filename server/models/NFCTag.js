module.exports = (sequelize, DataTypes) => {
  return sequelize.define("NFCTag", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
