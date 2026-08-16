const User = require('../models/user');
const bcrypt = require("bcrypt");

const SALT_ROUND = 10;

const signup = async (req, res) => {
  res.render('auth/sign-up.ejs');
};



const register = async (req, res) => {
  try {
   //verify if the username already exists
   const userInDatabase = await User.findOne({ username ; req.body.username});
   //if the user exists send error msg
   if(userInDatabase){
      return res.send("Username or Password invalid");
   }
   //else lets check if the password match 
   if (req.body.password !== req.body.confirmedPassword) {
      return res.send("Username or Password invalid");
   }
   //if password matches, create the new user
   const user = User.create(req.body);
   //redirect to homepage
   //else send an error message
  } catch (err) {
    console.log(err);
  }
   res.send('something went wrong');
};

module.exports = {
  signup,
};