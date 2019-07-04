
const GuildService = require('../services/GuildService');
const Util = require('../utils/Utils');

const util = new Util();

class GuildController {
  static async getAllGuilds(req, res) {
    try {
      const allGuilds = await GuildService.getAllGuilds();
      if (allGuilds.length > 0) {
        util.setSuccess(200, 'Guilds retrieved', allGuilds);
      } else {
        util.setSuccess(200, 'No guild found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addGuild(req, res) {
    if (!req.body.name || !req.body.description || !req.body.leader) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newGuild = req.body;
    try {
      const createdGuild = await GuildService.addGuild(newGuild);
      util.setSuccess(201, 'Guild Added!', createdGuild);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedGuild(req, res) {
    const alteredGuild = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedGuild = await GuildService.updateGuild(id, alteredGuild);
      if (!updatedGuild) {
        util.setError(404, `Cannot find guild with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Guild updated', updatedGuild);
      }
      return util.send(res);
    } catch (error) {
      console.log(error);
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAGuild(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theGuild = await GuildService.getAGuild(id);

      if (!theGuild) {
        util.setError(404, `Cannot find guild with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Guild', theGuild);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteGuild(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const guildToDelete = await GuildService.deleteGuild(id);

      if (guildToDelete) {
        util.setSuccess(200, 'Guild deleted');
      } else {
        util.setError(404, `Guild with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}
module.exports = GuildController;
