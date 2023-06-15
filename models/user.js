const bcrypt = require('bcrypt');

// module.exports = (sequelize, DataTypes) => {
//     const user = sequelize.define("user", {
//         name: {
//             type: DataTypes.STRING,
//         },
//         mobileNumber: {
//             type: DataTypes.STRING,
//             unique: true,
//         },
//         password: {
//             type: DataTypes.STRING,
//         }
//     }, {
//         timestamps: false,
//     });

//     user.beforeCreate(async (user) => {
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         user.password = hashedPassword;
//     });

//     return user
// }


const Sequelize=require('sequelize');
const db=require('./index');

const user = db.define("user", {
    name: {
        type: Sequelize.STRING,
    },
    mobileNumber: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
    }
}, {
    timestamps: false,
});

user.beforeCreate(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
});

module.exports = user;