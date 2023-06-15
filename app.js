//import modules
const express = require('express');
const dotenv= require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());


require('./utils/dbconnection');
//relations 
require('./utils/relations').modelRelationships();

//importing routes
const userRoute = require('./routes/user');
const vehicleRoute = require('./routes/vehicle');

//assigning routes
app.use('/user',userRoute);
app.use('/vehicle',vehicleRoute);

//error handling
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})


//setting port
const PORT = process.env.PORT || 8000;

//server
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})