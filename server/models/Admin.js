module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Admin", {
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
  }, {timestamps: false});
}
