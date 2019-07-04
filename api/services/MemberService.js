import database from '../../db/models';

class MemberService {
  static async getAllMembers(id) {
    try {
      return await database.Member.findAll({
        where: {
          GuildId: id
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async addMember(newMember) {
    try {
      return await database.Member.create(newMember);
    } catch (error) {
      throw error;
    }
  }

  static async updateMember(id, updateMember) {
    try {
      const memberToUpdate = await database.Member.findOne({
        where: { id: Number(id) },
      });

      if (memberToUpdate) {
        await database.Member.update(updateMember, { where: { id: Number(id) } });

        return updateMember;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAMember(id) {
    try {
      const theMember = await database.Member.findOne({
        where: { id: Number(id) },
      });

      return theMember;
    } catch (error) {
      throw error;
    }
  }

  static async deleteMember(id) {
    try {
      const memberToDelete = await database.Member.findOne({ where: { id: Number(id) } });

      if (memberToDelete) {
        const deletedMember = await database.Member.destroy({
          where: { id: Number(id) },
        });
        return deletedMember;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default MemberService;
