module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Bin", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    bintype: {
      type: DataTypes.ENUM,
      values: ['Organic', 'Plastic', 'Paper', 'Glass'],
    },
    garbagelevel: {
      type: DataTypes.ENUM,
      values: ['0%', '25%', '50%', '75%', '100%'],
    },
    garbageweight: {
      type: DataTypes.FLOAT,
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    methane: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  }, {timestamps: false});
}
