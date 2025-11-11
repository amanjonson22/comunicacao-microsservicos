import sequelize, { Sequelize } from 'sequelize';

const sequel = new Sequelize("auth-db", "admin", "udemyC0urs3", {
    host: "localhost",
    dialect: "postgres",
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        underscored:true,
        underscoredAll: true,
        freezeTableName: true,
    }
});

sequel
.authenticate()
.then(() => {
    console.info('Connection has been stablished')
})
.catch((err) => {
    console.error('Unable to connect to the database');
    console.error(err.message);
});

export default sequel;