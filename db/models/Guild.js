module.exports = (sequelize, DataTypes) => {
  const Guild = sequelize.define('guild', {
    // attributes
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Guild.associate = (models) => {
    models.Task.hasMany(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Guild;
};
