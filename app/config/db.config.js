module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Taggstar2020',
    DB: 'taggdb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acuire: 30000,
        idle: 10000
    }
}


// require('dotenv').config();
// import mysql from "mysql2";

// let connection = mysql.createConnection({
//     HOST: process.env.DB_HOST,
//     USER: process.env.DB_USERNAME,
//     PASSWORD: process.env.DB_PASSWORD,
//     DB: process.env.DB_NAME
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Database connected!");
// });

// module.exports = connection;
