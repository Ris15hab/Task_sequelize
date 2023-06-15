
// module.exports = (sequelize, DataTypes) => {
//     const userVehicle = sequelize.define("userVehicle", {
//         vehicleNumber: {
//             type: DataTypes.STRING,
//             unique: true,
//         },
//         userId: {
//             type: DataTypes.INTEGER,
//         }
//     },{
//         timestamps: false,
//     });

//     return userVehicle
// }


const Sequelize=require('sequelize');
const db=require('./index');

const userVehicle = db.define("userVehicle", {
    vehicleNumber: {
        type: Sequelize.STRING,
        unique: true,
    },
    userId: {
        type: Sequelize.INTEGER,
    }
},{
    timestamps: false,
});

module.exports = userVehicle;
