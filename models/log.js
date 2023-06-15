// module.exports = (sequelize, DataTypes) => {
//     const log = sequelize.define("log", {
//         checkInTime: {
//             type: DataTypes.DATE,
//         },
//         checkOutTime: {
//             type: DataTypes.DATE,
//         },
//         duration: {
//             type: DataTypes.INTEGER,
//         },
//         vehicleId:{
//             type: DataTypes.INTEGER,
//             unique: true
//         },
//         parkingSpotId: {
//             type: DataTypes.INTEGER,
//             unique: true
//         }
//     },{
//         timestamps: false,
//     });
// }

const Sequelize=require('sequelize');
const db=require('../utils/dbconnection');

const log = db.define("log", {
    checkInTime: {
        type: Sequelize.DATE,
    },
    checkOutTime: {
        type: Sequelize.DATE,
    },
    duration: {
        type: Sequelize.INTEGER,
    },
    vehicleId:{
        type: Sequelize.INTEGER,
        unique: true
    },
    parkingSpotId: {
        type: Sequelize.INTEGER,
        unique: true
    }
},{
    timestamps: false,
});

module.exports = log;