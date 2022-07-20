module.exports = (sequelize, DataTypes) => {
  return sequelize.define("MJRoute", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    bintype: {
      type: DataTypes.ENUM,
      values: [
        'Organic', 'Glass', 'Plastic', 'Paper'
      ],
    },
    repaired: {
      type: DataTypes.BOOLEAN,
    },
  }, {timestamps: false});
}
