module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // attributes
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.associate = (models) => {
    models.User.hasMany(models.Member, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return User;
};
