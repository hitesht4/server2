const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controller/usercontroller");
const { protect } = require("../middleware/authmiddleware");
router.post("/", registerUser);
router.post("/login", loginUser);

router.get("/me", protect, getMe);
// router.post("/",registerUser)

module.exports = router;
