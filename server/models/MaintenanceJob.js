module.exports = (sequelize, DataTypes) => {
  return sequelize.define("MaintenanceJob", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING(1000),
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    time: {
      type: DataTypes.TIME,
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'Not started', 'Ongoing', 'Finished'
      ],
    },
    completeddate: {
      type: DataTypes.DATEONLY,
    },
    completedtime: {
      type: DataTypes.TIME,
    },
  }, {timestamps: false});
}
