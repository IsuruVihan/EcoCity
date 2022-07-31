module.exports = (sequelize, DataTypes) => {
  return sequelize.define("GCJRoute", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    order: {
      type: DataTypes.INTEGER,
    },
    collected: {
      type: DataTypes.BOOLEAN,
    },
  }, {timestamps: false});
}
