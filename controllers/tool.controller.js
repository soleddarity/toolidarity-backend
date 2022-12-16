const Tool = require("../models/Tool");

exports.createTool = async (req, res) => {
  const {
    name,
    description,
    icon,
    twitter,
    discord,
    website,
    tool,
    from,
    to,
    category,
    type,
  } = req.body;

  const toolExist = await Tool.findOne({ name: name });

  if (toolExist)
    return res.status(200).json({
      message: "tool aleady exists",
    });

  const newtool = new Tool({
    name,
    description,
    icon,
    twitter,
    discord,
    category,
    website,
    tool,
    from,
    to,
    type,
  });
  const savedtool = await newtool.save();

  res.status(200).json({ savedtool });
};

exports.getTools = async (req, res) => {
  const tools = await Tool.find({});

  res.status(200).json(tools);
};
