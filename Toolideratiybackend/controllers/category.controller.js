const User = require("../models/User");
const Category = require("../models/Category");
const jwt = require("jsonwebtoken");

exports.createCategory = async (req, res) => {
  const { categoryName, categoryColor } = req.body;

  const categoryExist = await Category.findOne({ categoryName: categoryName });

  if (categoryExist)
    return res.status(200).json({
      message: "Category aleady exists",
    });

  const newCategory = new Category({
    categoryName,
    categoryColor,
  });
  const savedCategory = await newCategory.save();

  res.status(200).json({ savedCategory });
};

exports.getCategorys = async (req, res) => {
  const categorys = await Category.find({});

  res.status(200).json(categorys);
};
