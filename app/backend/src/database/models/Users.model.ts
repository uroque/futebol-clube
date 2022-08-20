import { DataTypes, Model } from 'sequelize';
import db from '.';

class UsersModel extends Model {
  public id!: number;
  public username!: string;
  public role!: string;
  public email!: string;
  public password!: string;
}

UsersModel.init(
  {
    // ... Campos
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  },
);

export default UsersModel;
