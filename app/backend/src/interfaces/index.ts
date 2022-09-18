import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface ErrorHandler extends Error {
  status?: number;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRequest extends Request {
  auth?: JwtPayload | string;
}

export interface INewMatch {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatches extends INewMatch {
  id: number;
  inProgress: boolean;
}

export interface IHomeTeamMatches {
  id: number;
  teamName: string;
  teamHome?: Array<IMatches>;
}

export interface IMatchGoals {
  goalsFavor: number;
  goalsOwn: number;
}
export interface ILeaderboardTeam {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}
