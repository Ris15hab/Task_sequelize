// const db = require('../models/index');
// const Vehicle = db.userVehicle;

const Models = require("../utils/Models");
const Vehicle = Models.userVehicle;

const add = async(req,res,next)=>{
    try{
        const {vehicleNumber} = req.body;
        const user = req.user;
        const userId = user.user.id;
        const vehicle = await Vehicle.create({
            vehicleNumber,
            userId
        });
        res.status(201).json(vehicle);
    }catch(err){
        next(err);
    }
}

const remove = async(req,res,next)=>{
    try{
        const {vehicleNumber} = req.body;
        await Vehicle.destroy({
            where:{
                vehicleNumber
            }
        })
        res.status(200).json({'message':'Record successfully deleted'});
    }catch(err){
        next(err);
    }
}

module.exports = {
    add,
    remove
}