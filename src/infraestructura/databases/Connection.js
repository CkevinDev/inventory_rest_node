const mongoose = require("mongoose")

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log("Connection DB success");
    }catch(error){
        console.log(error);
        throw new Error("Error de coneccion con la DB")
    }
}

module.exports = {
    dbConnection
}