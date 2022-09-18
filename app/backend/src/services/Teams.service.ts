import TeamsModel from '../database/models/Teams.model';
import MatchesModel from '../database/models/Matches.model';
import { IHomeTeamMatches } from '../interfaces';

export default class TeamsService {
  static getAll = async (): Promise<object> => {
    const teams = await TeamsModel.findAll();

    return teams;
  };

  static getById = async (id: number): Promise<object | boolean> => {
    const team = await TeamsModel.findOne({ where: { id } });

    if (team) return team;

    return false;
  };

  static teamsExists = async (homeTeam: number, awayTeam: number): Promise<boolean> => {
    const homeExists = await TeamsModel.findOne(
      {
        where: { id: homeTeam },
      },
    );

    const awayExists = await TeamsModel.findOne(
      {
        where: { id: awayTeam },
      },
    );

    if (!homeExists || !awayExists) return false;

    console.log('homeExists', homeExists);

    console.log('awayExists', awayExists);

    return true;
  };
}
