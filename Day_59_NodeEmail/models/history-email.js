console.log('model email');

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class HistoryEmail extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

	}
  HistoryEmail.init(
    {
      id: {
        type: DataTypes.INTEGER, //Kiểu dữ liệu
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      email_to: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "HistoryEmail",
      tableName: "historyemail", //Tên bảng trong Database
      createdAt: "created_at",
      updatedAt: "updated_at",
      // deletedAt: "deleted_at",
      // paranoid: true,
      // timestamps: false
    },
  );

	return HistoryEmail;
};
