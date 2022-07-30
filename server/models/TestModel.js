module.exports = (sequelize, DataTypes) => {
  return sequelize.define("TeamPlayer", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false
    },
    achievements: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    returnedOn: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    yearOfStudy: {
      type: DataTypes.ENUM,
      values: [
        'Orientation', '1st', '2nd', '3rd', '4th', '5th', 'Alumni'
      ],
      allowNull: true
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    to: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ongoing: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {timestamps: false});
}