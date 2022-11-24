//logic , bl

const User = require("../model/userModel")


//Home routes

exports.home = (req, res) => {
    console.log("welcome home")
    res.send("Hell0 alpha")
}

// createUser Routes 
exports.createUser = async (req, res) => {
    try {
         const { name , email} = req.body


    //to check all details 

    if(!(name &&email)){
        throw new Error("Name and Email reqired")
    }

    const userExist = await User.findOne({ email});
     console.log(userExist)
    if(userExist){
        throw new Error("Email already Exists");
    }

// inserting to database

const user = await User.create({name, email});
res. status(201).json({
    success:true,
    message: " User Create Succesfully",
    user,
});
    } catch(error) {
        console.log(error);
    }
   
};

// get all user routes

exports.getUsers = async (req, res) => {
    try {
     const users = await User.find();
     res.status(200).json({
        success : true,
        users,
     });
    }catch (err){
        console.log(err);
        res.status(401).json({
            success:false,
            message: err.message
        });
    }
}


//edit user

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "User updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

//delete user

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};