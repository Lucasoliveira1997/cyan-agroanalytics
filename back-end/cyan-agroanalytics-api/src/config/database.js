const db = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'cyan_agroanalytics',
    define: {
        timestamp: true,
        underscored: true
    }
}

module.exports = db