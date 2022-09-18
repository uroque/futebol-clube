import TeamsModel from '../database/models/Teams.model';
import MatchesModel from '../database/models/Matches.model';
import { INewMatch } from '../interfaces';

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

  static create = async (newMatch: INewMatch): Promise<object> => {
    const createMatch = await MatchesModel.create(newMatch);

    return createMatch;
  };

  static updateProgress = async (id: number): Promise<object> => {
    const updatedProgress = await MatchesModel.update(
      {
        inProgress: false,
      },
      {
        where: { id },
      },
    );

    return updatedProgress;
  };

  static updateScore = async (
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<object> => {
    const updatedScore = await MatchesModel.update(
      {
        homeTeamGoals,
        awayTeamGoals,
      },
      {
        where: { id },
      },
    );
    return updatedScore;
  };

  static getFinishedMatches = async () => {
    const finishedMatches = await MatchesModel.findAll(
      {
        where: { inProgress: false },
      },
    );

    return finishedMatches;
  };
}
