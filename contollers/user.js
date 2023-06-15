// var db = require('../models/index');
// const User = db.user;
// const Vehicle = db.userVehicle;
const { createError } = require('../middleware/error');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();
const Models = require('../utils/Models');
const User = Models.user;
// const Vehicle = Models.userVehicle;

const register = async (req, res, next) => {
    try {
        const { name, mobileNumber, password } = req.body;
        // console.log(Users);
        const user = await User.create({
            name,
            mobileNumber,
            password
        });
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        const { mobileNumber, password } = req.body;
        const user = await User.findOne({
            where: {
                mobileNumber
            }
        })
        if (user) {
            let passwordCheck = await bcrypt.compare(password, user.password);
            if (passwordCheck) {
                const token = jwt.sign({ user }, process.env.SECRET_KEY);
                // const response = await User.count({
                //     // include: Vehicle
                //     group:['name'],
                // })
                // res.header('token',token).status(200).json(user);
                res.cookie("access_token", token, {
                    httpOnly: true,
                }).status(200).json(user);
            } else {
                return next(createError(401, 'invalid login details'));
            }
        } else {
            return next(createError(401, 'invalid login details'));
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    register,
    login
}