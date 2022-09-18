import { ILeaderboardTeam, IMatchGoals } from '../interfaces';
import TeamsModel from '../database/models/Teams.model';
import MatchesService from './Matches.service';

export default class LeaderboardService {
  static teamTotalPoints = (matches: IMatchGoals[]) => {
    const totalPoints = matches.reduce((total: number, { goalsFavor, goalsOwn }) => {
      if (goalsFavor > goalsOwn) return total + 3;
      if (goalsFavor === goalsOwn) return total + 1;
      return total;
    }, 0);

    return totalPoints;
  };

  static teamTotalVictories = (matches: IMatchGoals[]) => {
    const totalVictories = matches.reduce((total: number, { goalsFavor, goalsOwn }) => {
      if (goalsFavor > goalsOwn) return total + 1;
      return total;
    }, 0);

    return totalVictories;
  };

  static teamTotalDraws = (matches: IMatchGoals[]) => {
    const totalDraws = matches.reduce((total: number, { goalsFavor, goalsOwn }) => {
      if (goalsFavor === goalsOwn) return total + 1;
      return total;
    }, 0);

    return totalDraws;
  };

  static matchesResults = (matches: IMatchGoals[]) => {
    const totalGames = matches.length;
    const totalVictories = this.teamTotalVictories(matches);
    const totalDraws = this.teamTotalDraws(matches);
    const totalLosses = totalGames - totalVictories - totalDraws;

    return { totalGames, totalVictories, totalDraws, totalLosses };
  };

  static teamTotalGoalsFavor = (matches: IMatchGoals[]) => {
    const teamGoalsFavor = matches.reduce((total: number, { goalsFavor }) => total + goalsFavor, 0);

    return teamGoalsFavor;
  };

  static teamTotalGoalsOwn = (matches: IMatchGoals[]) => {
    const teamGoalsOwn = matches.reduce((total: number, { goalsOwn }) => total + goalsOwn, 0);

    return teamGoalsOwn;
  };

  static createLeaderboard = (matches: IMatchGoals[], teamName: string) => {
    const { totalGames, totalVictories, totalDraws, totalLosses } = this.matchesResults(matches);
    const totalPoints = this.teamTotalPoints(matches);
    const goalsFavor = this.teamTotalGoalsFavor(matches);
    const goalsOwn = this.teamTotalGoalsOwn(matches);
    const goalsBalance = goalsFavor - goalsOwn;
    const efficiency = Number(((totalPoints / (totalGames * 3)) * 100).toFixed(2));

    return {
      name: teamName,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency,
    };
  };

  static sortTable = (board: ILeaderboardTeam[]) => {
    const sortedByGoalsOwn = board.sort((a, b) => a.goalsOwn - b.goalsOwn);
    const sortedByGoalsFavor = sortedByGoalsOwn.sort((a, b) => b.goalsFavor - a.goalsFavor);
    const sortedByBalance = sortedByGoalsFavor.sort((a, b) => b.goalsBalance - a.goalsBalance);
    const sortedByVictory = sortedByBalance.sort((a, b) => b.totalVictories - a.totalVictories);
    const sortedByPoints = sortedByVictory.sort((a, b) => b.totalPoints - a.totalPoints);
    return sortedByPoints;
  };

  static getLeaderboardHome = async () => {
    const teams = await TeamsModel.findAll();
    const matches = await MatchesService.getFinishedMatches();

    const results: ILeaderboardTeam[] = [];

    teams.forEach((team) => {
      const goalsResult = matches
        .filter((match) => match.homeTeam === team.id)
        .map((match) => ({ goalsFavor: match.homeTeamGoals, goalsOwn: match.awayTeamGoals }));

      const leaderboard = this.createLeaderboard(goalsResult, team.teamName);

      results.push(leaderboard);
    });

    return this.sortTable(results);
  };

  static getLeaderboardAway = async () => {
    const teams = await TeamsModel.findAll();
    const matches = await MatchesService.getFinishedMatches();

    const results: ILeaderboardTeam[] = [];

    teams.forEach((team) => {
      const goalsResult = matches
        .filter((match) => match.awayTeam === team.id)
        .map((match) => ({ goalsFavor: match.awayTeamGoals, goalsOwn: match.homeTeamGoals }));

      const leaderboard = this.createLeaderboard(goalsResult, team.teamName);

      results.push(leaderboard);
    });

    return this.sortTable(results);
  };
}
