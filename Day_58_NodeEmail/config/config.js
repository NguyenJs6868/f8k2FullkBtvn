console.log('config');

// require("dotenv").config();
// module.exports = {
//   development: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     port: process.env.DB_PORT,
//   },
//   test: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     port: process.env.DB_PORT,
//   },
//   production: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//     port: process.env.DB_PORT,
//   },
// };

require('dotenv').config();
const pg = require('pg');
module.exports = {
	development: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DATABASE,
		host: process.env.POSTGRES_HOST,
		dialect: process.env.DB_DIALECT || 'postgres',
		port: process.env.DB_PORT || 5432,
		// dialectOptions: {
		// 	// ssl: {
		// 	//   require: true,
		// 	//   rejectUnauthorized: false,
		// 	// }
		// 	ssl: false,
		// },
		dialectModule: pg
	},
	test: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DATABASE,
		host: process.env.POSTGRES_HOST,
		dialect: process.env.DB_DIALECT || 'postgres',
		port: process.env.DB_PORT || 5432,
		// dialectOptions: {
		// 	// ssl: {
		// 	//   require: true,
		// 	//   rejectUnauthorized: false,
		// 	// }
		// 	ssl: false,
		// },
		dialectModule: pg
	},
	production: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DATABASE,
		host: process.env.POSTGRES_HOST,
		dialect: process.env.DB_DIALECT || 'postgres',
		port: process.env.DB_PORT || 5432,
		// dialectOptions: {
		// 	// ssl: {
		// 	//   require: true,
		// 	//   rejectUnauthorized: false,
		// 	// }
		// 	ssl: false,
		// },
		dialectModule: pg
	}
};
