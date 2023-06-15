
// module.exports = (sequelize, DataTypes) => {
//     const parkingSpot = sequelize.define("parkingSpot", {
//         name: {
//             type: DataTypes.STRING,
//         },
//         code: {
//             type: DataTypes.STRING,
//             unique: true,
//         },
//         address: {
//             type: DataTypes.STRING,
//         }
//     },{
//         timestamps: false,
//     });
// }

const Sequelize=require('sequelize');
const db=require('../utils/dbconnection');

const parkingSpot = db.define("parkingSpot", {
    name: {
        type: Sequelize.STRING,
    },
    code: {
        type: Sequelize.STRING,
        unique: true,
    },
    address: {
        type: Sequelize.STRING,
    }
},{
    timestamps: false,
});

module.exports = parkingSpot;