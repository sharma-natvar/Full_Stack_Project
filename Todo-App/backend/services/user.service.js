const { userModel } = require("../model")


const registerUser =(body)=>{
    return userModel.create(body)
}

const checkEmail = (email)=>{
    return userModel.findOne({email})
}



module.exports = {registerUser , checkEmail}