module.exports = (sequelize, DataTypes) => {
  return sequelize.define("GarbageCollectingJob", {
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
    bintype: {
      type: DataTypes.ENUM,
      values: [
        'Organic', 'Glass', 'Paper', 'Plastic'
      ],
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'Not started', 'Ongoing', 'Finished'
      ],
    },
  }, {timestamps: false});
}
