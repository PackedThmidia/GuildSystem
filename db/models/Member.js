module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    // attributes
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Member.associate = (models) => {
    models.Member.belongsTo(models.Guild, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Member;
};
