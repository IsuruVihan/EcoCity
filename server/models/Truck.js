module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Truck", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    numberplate: {
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
