module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('member', {
    // attributes
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Member.associate = (models) => {
    models.Task.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Member;
};
