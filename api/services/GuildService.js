import database from '../../db/models';

class GuildService {
  static async getAllGuilds() {
    try {
      return await database.Guild.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addGuild(newGuild) {
    try {
      return await database.Guild.create(newGuild);
    } catch (error) {
      throw error;
    }
  }

  static async updateGuild(id, updateGuild) {
    try {
      const guildToUpdate = await database.Guild.findOne({
        where: { id: Number(id) },
      });

      if (guildToUpdate) {
        await database.Guild.update(updateGuild, { where: { id: Number(id) } });

        return updateGuild;
      }
      return null;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getAGuild(id) {
    try {
      const theGuild = await database.Guild.findOne({
        where: { id: Number(id) },
      });

      return theGuild;
    } catch (error) {
      throw error;
    }
  }

  static async deleteGuild(id) {
    try {
      const guildToDelete = await database.Guild.findOne({ where: { id: Number(id) } });

      if (guildToDelete) {
        const deletedGuild = await database.Guild.destroy({
          where: { id: Number(id) },
        });
        return deletedGuild;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}
export default GuildService;
