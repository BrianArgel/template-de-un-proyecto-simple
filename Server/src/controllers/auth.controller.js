import User from "../models/User";
import Role from "../models/Role";
import path from "path"

import jwt from "jsonwebtoken";
import config from "../config";


export const signUp = async (req, res) => {
  try {
    // Getting the Request Body
    const { username, email, password, roles } = req.body;

    const code = Math.round(Math.random() * (999 - 100) + 100);
  

    // Creating a new User Object
    const newUser = new User({
      username: "@" + username,
      email,
      code,
      password: await User.encryptPassword(password)
    });

    // checking for roles
    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });
    const response = {token};
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const signupImg = async (req, res) => {
  const filename = req.img_filename;
  const pathFile = config.URL + "api/images/users/" + filename;
  User.findByIdAndUpdate(
    req.userId,
    {$set: {'pathImage': pathFile}},
    {new: true}
  ).exec((err, result) => {
    if(err) {
      return res.status(500).json({
          error: err.message
      });
    }
    if(!result) {
        return res.status(400).json({
            error: 'Esto es extraño, ya que se supone que el ID existe'
        });
    }
    console.log('Usuario actualizado');
    return res.status(201).json(result); 
  })
};

export const signin = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    );

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });
      
    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });
    const response = {token};
    console.log(response);

    res.json(response);
  } catch (error) {
    console.log(error);
  }
};
