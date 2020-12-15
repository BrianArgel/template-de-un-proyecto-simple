import jwt from "jsonwebtoken";
import User from "../models/User";
import Role from "../models/Role";
import config from "../config";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const response = {
      url: user.pathImage,
      code: user.code,
      username: user.username,
      email: user.email,
      roles: user.roles,
      id: user._id
    }
    console.log(response.code)
    return res.status(201).json(response);
  } catch (error) {
    return res.status(403).json({message: "inavlid id user"});
  }
};
export const getUserParams = async (req, res) => {
  try {
    const user = await User.findOne({username: req.params.username, code: req.params.code});
    const response = {
      url: user.pathImage,
      code: user.code,
      username: user.username,
      email: user.email,
      roles: user.roles,
      id: user._id
    }
    console.log(response)
    return res.status(201).json(response);
  } catch (error) {
    return res.status(403).json({message: "inavlid id user"});
  }
};

export const getMyUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    return res.status(201).json({id: user._id});
  } catch (error) {
    return res.status(403).json({message: "inavlid id user"});
  }
};
