
import MemberService from '../services/MemberService';
import Util from '../utils/Utils';

const util = new Util();

class MemberController {
  static async getAllMembers(req, res) {
    try {
      const allMembers = await MemberService.getAllMembers();
      if (allMembers.length > 0) {
        util.setSuccess(200, 'Members retrieved', allMembers);
      } else {
        util.setSuccess(200, 'No Member found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addMember(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newMember = req.body;
    try {
      const createdMember = await MemberService.addMember(newMember);
      util.setSuccess(201, 'Book Added!', createdMember);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedMember(req, res) {
    const alteredMember = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedMember = await MemberService.updatedMember(id, alteredMember);
      if (!updatedMember) {
        util.setError(404, `Cannot find Member with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Member updated', updatedMember);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAMember(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theMember = await MemberService.getAMember(id);

      if (!theMember) {
        util.setError(404, `Cannot find Member with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Member', theMember);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteMember(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const MemberToDelete = await MemberService.deleteMember(id);

      if (MemberToDelete) {
        util.setSuccess(200, 'Book deleted');
      } else {
        util.setError(404, `Book with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default MemberController;
