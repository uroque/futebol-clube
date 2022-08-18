import { DataTypes, Model } from 'sequelize';
import db from '.';
import TeamsModel from './Teams.model';

class MatchesModel extends Model {
  public awayTeam!: string;
  public awayTeamGoals!: string;
  public inProgress!: string;
}

MatchesModel.init(
  {
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeam: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    modelName: 'matches',
    timestamps: false,
  },
);

TeamsModel.belongsTo(MatchesModel, { foreignKey: 'home_team', as: 'id' });
TeamsModel.belongsTo(MatchesModel, { foreignKey: 'away_team', as: 'id' });

export default MatchesModel;
