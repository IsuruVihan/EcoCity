module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Complaint", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    hubornfcid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    category: {
      type: DataTypes.ENUM,
      values: [
        'Hub', 'NFC', 'App', 'Other'
      ],
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'Open', 'Viewed', 'Removed', 'Resolved'
      ],
    },
    description: {
      type: DataTypes.STRING(1000),
    },
    remarks: {
      type: DataTypes.STRING(1000),
    },
  }, {timestamps: true});
}
