const express = require("express");
const router = express.Router();

const {
  createUser,
  deleteUser,
  editUser,
  fetchAllUsers,
  loginUser,
  setUserPassword,
} = require("../controllers/user-controller");

const { hashPassword, authenticateToken } = require("../middlewares/user");

/*userRole Route */
router.get("/", function (req, res) {
  res.json({ message: "users route accessed" });
});

/* createUser Route. */
router.post("/createUser", hashPassword, authenticateToken, createUser);

/* deleteUser Route. */
router.delete("/deleteUser", deleteUser);

/* editUser Route. */
router.patch("/editUser", editUser);

/* fetchAllUser Route. */
router.get("/all", fetchAllUsers);

/* loginUser Route. */
router.get("/login", authenticateToken, loginUser);

/* setPassword Route. */
router.post("/setPassword", setUserPassword);

module.exports = router;
