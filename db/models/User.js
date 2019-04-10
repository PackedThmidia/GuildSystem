module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    // attributes
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  User.associate = (models) => {
    models.User.belongsTo(models.Member, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return User;
};
