import { Sequelize, DataTypes } from "sequelize";

import sequelize from "../../loaders/orm";

const UserSchema = {
    Id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    LastName: { type: DataTypes.STRING },
    FirstName: { type: DataTypes.STRING },
};

const UserModel = { tableName: 'User', timestamps: false, freezeTableName: true };

const User = sequelize.define('User', UserSchema, UserModel);

export default User;