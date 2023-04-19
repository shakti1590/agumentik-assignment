const mongoose = require("mongoose");

const connect = async ()=>{
    return await mongoose.connect("mongodb+srv://agumentik:agumentik@cluster0.yukkdpk.mongodb.net/test");
    
}

module.exports = connect;