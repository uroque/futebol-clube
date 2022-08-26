import TeamsModel from '../database/models/Teams.model';
import MatchesModel from '../database/models/Matches.model';

export default class MatchesService {
  static getAll = async (): Promise<object> => {
    const matches = await MatchesModel.findAll({
      include: [
        {
          model: TeamsModel,
          as: 'teamHome',
          attributes: ['teamName'],
        },
        {
          model: TeamsModel,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
    });

    return matches;
  };
}
