const env = {
    host: 'localhost',
    username: 'root',
    password: 'Taggstar2020',
    database: 'taggdb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acuire: 30000,
        idle: 10000
    }
};

module.exports = env;