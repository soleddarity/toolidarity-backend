const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const { publicKey, pfp, nickname } = req.body;

  const userExist = await User.findOne({ publicKey: publicKey });

  if (userExist)
    return res.status(200).json({
      message: "User aleady exists",
    });

  const newUser = new User({
    publicKey,
    pfp,
    nickname,
  });
  const savedUser = await newUser.save();

  const newToken = jwt.sign({ id: savedUser._id }, "secretKey", {
    expiresIn: 86400,
  });

  res.status(200).json({ newToken });
};

exports.logIn = async (req, res) => {
  const userExist = await User.findOne({
    publicKey: req.body.publicKey,
  });
  if (!userExist)
    return res.status(400).json({
      message: "User not exists",
    });

  const token = jwt.sign({ id: userExist._id }, "secretKey", {
    expiresIn: 86400,
  });

  return res.json({
    _id: userExist._id,
    publicKey: userExist.publicKey,
    pfp: userExist.pfp,
    nickname: userExist.nickname,
    token: token,
  });
};

exports.updateNickname = async (req, res) => {
  const userExist = await User.findOne({
    publicKey: req.body.publicKey,
  });
  if (!userExist)
    return res.status(400).json({
      message: "User not exists",
    });

  const thing = new User({
    _id: userExist._id,
    nickname: req.body.nickname,
    pfp: req.body.pfp ? req.body.pfp : userExist.pfp,
  });

  User.updateOne({ publicKey: req.body.publicKey }, thing)
    .then(() => {
      res.status(201).json({
        message: "Nickname updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
