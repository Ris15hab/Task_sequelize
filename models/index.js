const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('parkIt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: { max: 5, min: 0 },
    // logging:false
});

sequelize.authenticate().then(() => {
    console.log('connected to db');
}).catch((err) => {
    console.log(err);
});

module.exports = sequelize;
/*
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({ force: false }).then(() => {
    console.log("re synced");
}).catch((err) => {
    console.log(err);
});

db.user = require('./user')(sequelize, DataTypes);
db.userVehicle = require('./userVehicle')(sequelize, DataTypes);
db.log = require('./log')(sequelize, DataTypes);
db.parkingSpot = require('./parkingSpot')(sequelize, DataTypes);

db.user.hasMany(db.userVehicle);
db.userVehicle.belongsTo(db.user);

module.exports = db;
*/