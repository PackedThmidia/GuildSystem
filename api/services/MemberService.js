import database from '../../db/models';

class MembershipService {
  static async getAllMemberships() {
    try {
      return await database.Membership.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addGuild(newMembership) {
    try {
      return await database.Membership.create(newMembership);
    } catch (error) {
      throw error;
    }
  }

  static async updateMembership(id, updateMembership) {
    try {
      const membershipToUpdate = await database.Membership.findOne({
        where: { id: Number(id) },
      });

      if (membershipToUpdate) {
        await database.Membership.update(updateMembership, { where: { id: Number(id) } });

        return updateMembership;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAMembership(id) {
    try {
      const theMembership = await database.Membership.findOne({
        where: { id: Number(id) },
      });

      return theMembership;
    } catch (error) {
      throw error;
    }
  }

  static async deleteMembership(id) {
    try {
      const membershipToDelete = await database.Membership.findOne({ where: { id: Number(id) } });

      if (membershipToDelete) {
        const deletedMembership = await database.Membership.destroy({
          where: { id: Number(id) },
        });
        return deletedMembership;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default MembershipService;
