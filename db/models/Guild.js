module.exports = (sequelize, DataTypes) => {
  const Guild = sequelize.define('Guild', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    leader: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  // Guild.associate = (models) => {
  //   models.Guild.hasMany(models.Member, { onDelete: 'CASCADE', allowNull: false });
  // };

  return Guild;
};
