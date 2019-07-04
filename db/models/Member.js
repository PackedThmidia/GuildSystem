module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('Member', {
    // attributes
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // GuildId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Guilds',
    //     key: 'id'
    //   },
    // },
    // UserId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Users', // Can be a string
    //     key: 'id'
    //   },
    // }
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
