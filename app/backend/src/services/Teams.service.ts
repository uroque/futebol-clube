import TeamsModel from '../database/models/Teams.model';

export default class TeamsService {
  static getAll = async (): Promise<object> => {
    const teams = await TeamsModel.findAll();

    return teams;
  };

  static getById = async (id: string): Promise<object | boolean> => {
    const team = await TeamsModel.findOne({ where: { id } });

    if (team) return team;

    return false;
  };
}
