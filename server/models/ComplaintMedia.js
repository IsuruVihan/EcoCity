module.exports = (sequelize, DataTypes) => {
  return sequelize.define("ComplaintMedia", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING(1000),
    },
  }, {timestamps: false});
}
