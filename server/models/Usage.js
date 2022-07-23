module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Usage", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    time: {
      type: DataTypes.TIME,
    },
  }, {timestamps: false});
}
