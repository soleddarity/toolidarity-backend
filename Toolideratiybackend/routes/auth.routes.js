const express = require("express");
const authToken = require("../middleware/authToken");
const router = express.Router();
const authCtrl = require("../controllers/auth.controller");
const categoryCtrl = require("../controllers/category.controller");
const toolCtrl = require("../controllers/tool.controller");

router.post("/signup", authCtrl.signUp);
router.post("/login", authCtrl.logIn);
router.post("/updatenickname", authCtrl.updateNickname);

router.post("/createCategory", categoryCtrl.createCategory);
router.get("/getCategorys", categoryCtrl.getCategorys);

router.post("/createTool", toolCtrl.createTool);

module.exports = router;
