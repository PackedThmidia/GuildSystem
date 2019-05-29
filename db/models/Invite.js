module.exports = (sequelize, DataTypes) => {
  const Invite = sequelize.define('Invite', {
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Invite.associate = (models) => {
    models.Invite.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
    models.Invite.belongsTo(models.Guild, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Invite;
};
