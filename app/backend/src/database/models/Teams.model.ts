import { DataTypes, Model } from 'sequelize';
import db from '.';

class TeamsModel extends Model {
  public teamName!: string;
}

TeamsModel.init(
  {
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    modelName: 'teams',
    timestamps: false,
  },
);

export default TeamsModel;
